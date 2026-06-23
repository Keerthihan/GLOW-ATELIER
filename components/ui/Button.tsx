// components/ui/Button.tsx
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  className = "",
  ...props
}) => {
  let variantClasses = "";

  switch (variant) {
    case "primary":
      variantClasses = "bg-lotus text-white-rock hover:opacity-90 transition-opacity";
      break;
    case "secondary":
      variantClasses = "bg-thunder text-white-rock hover:opacity-90 transition-opacity";
      break;
    case "outline":
      variantClasses = "border-2 border-lotus text-lotus hover:bg-lotus hover:text-white-rock transition-colors bg-transparent";
      break;
  }

  return (
    <button
      className={`px-6 py-3 rounded-sm font-body text-base font-semibold focus:outline-none focus:ring-2 focus:ring-pink-daisy focus:ring-offset-2 tracking-wide cursor-pointer disabled:opacity-55 disabled:cursor-not-allowed ${variantClasses} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
