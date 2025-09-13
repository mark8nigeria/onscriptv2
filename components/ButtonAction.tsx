"use client";

import { cn } from "@/lib/utils";
import React from "react";

export type btnType = "primary" | "badge" | "secondary";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  btnType?: btnType;
}

const btnVariants = {
  primary:
    "w-full bg-black hover:bg-black/80 font-medium text-white py-3.5 px-4 rounded-lg capitalize disabled:opacity-60",
  secondary:
    "w-full bg-neutral-300 hover:bg-neutral-300/80 font-medium text-black py-3.5 px-4 rounded-lg capitalize",
  badge:
    "rounded-lg border border-neutral-300 py-2 px-3 text-[0.625rem] font-medium hover:bg-neutral-50 text-black",
};

export default function ButtonAction({
  btnType,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(btnVariants[btnType as btnType] || "", className)}
      {...props}
    >
      {children}
    </button>
  );
}
