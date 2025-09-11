import NextAuth, { DefaultSession } from "next-auth";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { type JWT } from "next-auth/jwt";

import authConfig from "./auth.config";

import { PrismaAdapter } from "@auth/prisma-adapter";
import db from "./lib/db";
import { getUserById } from "./helpers/read-db";

declare module "next-auth" {
  interface Session {
    user: {
      isPremium: boolean;
      address: string;
      fid: number;
      role: "ADMIN" | "USER";
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    isPremium: boolean;
    address: string;
    fid: number;
    role: "ADMIN" | "USER";
  }
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  pages: {
    error: "/error",
    signIn: "/login",
  },
  callbacks: {
    async signIn({ user }) {
      if (!user || !user.id) return false;

      const existingUser = await getUserById(user.id);
      if (existingUser) {
        return true;
      } else {
        return false;
      }
    },
    async session({ session, token }) {
      if (session.user && token.sub) session.user.id = token.sub;
      if (session.user && token.fid) session.user.fid = token.fid;
      if (session.user && token.address) session.user.address = token.address;
      if (session.user && token.isPremium)
        session.user.isPremium = token.isPremium;
      if (session.user && token.role) session.user.role = token.role;

      return session;
    },
    async jwt({ token }) {
      if (token.sub) {
        const user = await getUserById(token.sub);
        // console.log("user", user);

        if (user) {
          token.isPremium = user.isPremium;
          token.address = user.walletAddress;
          token.fid = user.fid;
          token.role = user.role;
        }
      }

      return token;
    },
  },

  // always comment the cookies if pushing to prod
  // cookies: {
  //   sessionToken: {
  //     name: `__Secure-next-auth.session-token`,
  //     options: {
  //       httpOnly: true,
  //       sameSite: "lax", // ✅ correct for normal prod apps
  //       secure: true, // ✅ because you're on https://
  //       path: "/",
  //     },
  //   },
  //   csrfToken: {
  //     name: "__Host-next-auth.csrf-token",
  //     options: {
  //       httpOnly: false,
  //       sameSite: "none",
  //       secure: true,
  //     },
  //   },
  // },
  // eslint-disable-next-line
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
});
