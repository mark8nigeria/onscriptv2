"use client";

import React, { useState } from "react";
import ButtonAction from "@/components/ButtonAction";
import { Menu, Plus } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { adminNavLinks, navLinks } from "@/data/navlinks.data";
import { cn } from "@/lib/utils";
import { adminPrefix } from "@/data/routes.data";

export default function NavMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith(adminPrefix);

  return (
    <>
      <ButtonAction onClick={() => setIsMenuOpen(true)}>
        <Menu className="text-black size-6" />
      </ButtonAction>
      <div
        className={cn(
          "fixed top-0 left-0 w-full h-full z-[1000] bg-black/40 p-4 backdrop-blur-sm",
          { hidden: !isMenuOpen },
        )}
      >
        <div className="w-full flex items-end justify-start flex-col gap-2">
          <ButtonAction
            className="p-2.5 rounded-full bg-white"
            onClick={() => setIsMenuOpen(false)}
          >
            <Plus className="text-black size-6 rotate-45" />
          </ButtonAction>

          <div className="flex flex-col items-start justify-start gap-4 rounded-3xl bg-white p-4 w-72">
            {(isAdminRoute ? adminNavLinks : navLinks).map(
              ({ href, name }, i) => (
                <Link
                  key={i}
                  href={href}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    "bg-neutral-50 py-2.5 px-4 w-full rounded-full hover:bg-neutral-200 duration-300 transition-colors",
                    {
                      "bg-neutral-200": href === pathname,
                    },
                  )}
                >
                  <p className="text-lg text-black font-medium">{name}</p>
                </Link>
              ),
            )}
          </div>
        </div>
      </div>
    </>
  );
}
