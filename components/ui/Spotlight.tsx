import React from "react";
import { cn } from "@/lib/util";

type SpotlightProps = {
  className?: string;
  fill?: string;
};

export const Spotlight = ({ className, fill }: SpotlightProps) => {
  const color =
    fill === "purple"
      ? "rgba(128,0,255,0.12)"
      : fill === "blue"
        ? "rgba(30,80,255,0.12)"
        : "rgba(255,255,255,0.08)";

  return (
    <div
      className={cn(
        "pointer-events-none absolute z-[1] animate-spotlight opacity-0",
        className
      )}
      style={{
        background: `radial-gradient(ellipse at center, ${color} 0%, transparent 70%)`,
        width: "140%",
        height: "140%",
      }}
      aria-hidden="true"
    />
  );
};
