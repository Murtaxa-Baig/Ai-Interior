import React from "react";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "danger";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className = "",
  disabled = false,
  type = "button",
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-bold rounded-xl transition-all duration-200 cursor-pointer select-none active:scale-[0.98]";

  const variantStyles = {
    primary:
      "bg-[#FF7E2C] text-white hover:bg-[#E56919] active:bg-[#D45B0E] shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed",
    secondary:
      "bg-[#111827] text-white hover:bg-[#1f2937] shadow-sm disabled:opacity-50 disabled:cursor-not-allowed",
    outline:
      "bg-white text-[#111827] border border-[#e5e7eb] hover:bg-[#f9fafb] hover:border-[#d1d5db] disabled:opacity-50 disabled:cursor-not-allowed",
    danger:
      "bg-red-600 text-white hover:bg-red-700 active:bg-red-800 shadow-md disabled:opacity-50 disabled:cursor-not-allowed",
  };

  const sizeStyles = {
    sm: "text-xs px-3.5 py-1.5 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-7 py-3.5 gap-2.5",
  };

  const combinedClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
    >
      {children}
    </button>
  );
};
