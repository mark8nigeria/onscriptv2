import authConfig from "./auth.config";
import NextAuth from "next-auth";
import {
  apiAuthPrefix,
  authRoutes,
  defaultRedirectUrl,
  publicRoutes,
} from "@/data/routes.data";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const { pathname } = req.nextUrl;
  const isLoggedIn = !!req.auth;

  const isAuthRoute = authRoutes.includes(pathname);
  const isPublicRoute = publicRoutes.includes(pathname);
  const isApiAuthRoute = pathname.startsWith(apiAuthPrefix);

  if (isApiAuthRoute) return;

  if (isAuthRoute) {
    if (isLoggedIn)
      return Response.redirect(new URL(defaultRedirectUrl, req.url));

    return;
  }

  if (!isLoggedIn && !isPublicRoute)
    return Response.redirect(new URL("/login", req.url));

  return;
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
