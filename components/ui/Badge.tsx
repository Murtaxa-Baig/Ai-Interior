import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "orange" | "gray" | "dark" | "outline";
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "orange",
  className = "",
}) => {
  const baseStyles = "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase";

  const variants = {
    orange: "bg-[#FFF4ED] text-[#FF7E2C] border border-[#FFD8C2]",
    gray: "bg-[#f3f4f6] text-[#4b5563] border border-[#e5e7eb]",
    dark: "bg-[#111827] text-white",
    outline: "bg-white text-[#111827] border border-[#e5e7eb]",
  };

  return <span className={`${baseStyles} ${variants[variant]} ${className}`}>{children}</span>;
};
