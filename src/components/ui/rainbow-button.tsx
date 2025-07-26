import React from "react";
import { cn } from "../../lib/utils";

interface RainbowButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function RainbowButton({
  children,
  className,
  ...props
}: RainbowButtonProps) {
  return (
    <button
      className={cn(
        "group relative inline-flex h-12 w-fit animate-rainbow items-center justify-center rounded-full border-0 px-6 py-3 text-white font-semibold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",

        // rainbow glow with animated blur
        "before:absolute before:inset-0 before:-z-10 before:rounded-full before:animate-rainbow",
        "before:bg-[linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]",
        "before:bg-[length:200%] before:[filter:blur(12px)]",

        // ✅ iOS blur fix: mask the box edge without killing the glow
        "before:[-webkit-mask-image:radial-gradient(circle,white_99%,transparent_100%)]",
        "before:[mask-image:radial-gradient(circle,white_99%,transparent_100%)]",

        // main button background layer
        "bg-[linear-gradient(#121213,#121213),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]",

        className,
      )}
      {...props}
    >
      <span className="relative z-10 text-white font-semibold">{children}</span>
    </button>
  );
}
