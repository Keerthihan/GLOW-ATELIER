// components/ui/Button.tsx
import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  className = "",
  href,
  ...props
}) => {
  let variantClasses = "";

  switch (variant) {
    case "primary":
      variantClasses = "bg-blush-clay text-white-rock shadow-[0_16px_34px_rgba(193,122,122,0.28)] hover:-translate-y-0.5 hover:shadow-[0_20px_42px_rgba(193,122,122,0.36)] active:translate-y-0";
      break;
    case "secondary":
      variantClasses = "bg-deep-sea text-white-rock shadow-[0_16px_34px_rgba(13,27,42,0.18)] hover:-translate-y-0.5 hover:bg-eucalyptus";
      break;
    case "outline":
      variantClasses = "border border-eucalyptus/40 text-deep-sea bg-white-rock/60 backdrop-blur hover:-translate-y-0.5 hover:border-eucalyptus hover:bg-eucalyptus hover:text-white-rock";
      break;
  }

  const combinedClasses = `px-7 py-3.5 rounded-full font-body text-sm font-bold focus:outline-none focus:ring-2 focus:ring-golden-hour focus:ring-offset-2 tracking-wide cursor-pointer disabled:opacity-55 disabled:cursor-not-allowed text-center transition-all duration-300 ${variantClasses} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses} onClick={props.onClick as any}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={combinedClasses}
      {...props}
    >
      {children}
    </button>
  );
};
