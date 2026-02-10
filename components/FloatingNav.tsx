import React from "react";
import { cn } from "@/lib/util";
import Link from "next/link";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: React.ReactNode;
  }[];
  className?: string;
}) => {
  return (
    <nav
      aria-label="Navegación principal"
      className={cn(
        "flex max-w-fit fixed top-6 inset-x-0 mx-auto rounded-full z-[5000] px-8 py-3 items-center justify-center gap-6 border border-white/10 bg-black-100/80 backdrop-blur-md backdrop-saturate-150 shadow-lg shadow-black/20",
        className
      )}
    >
      {navItems.map((navItem, idx: number) => (
        <Link
          key={`link-${idx}`}
          href={navItem.link}
          className="relative text-sm text-neutral-400 transition-colors hover:text-white"
        >
          {navItem.name}
        </Link>
      ))}
    </nav>
  );
};
