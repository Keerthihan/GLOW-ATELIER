// components/ui/Card.tsx
import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ children, className = "", ...props }) => {
  return (
    <div
      className={`bg-white-rock/85 border border-white-rock rounded-[1.75rem] shadow-[0_18px_50px_rgba(13,27,42,0.08)] backdrop-blur hover:-translate-y-1 hover:border-blush-clay/35 hover:shadow-[0_24px_60px_rgba(13,27,42,0.12)] transition-all duration-300 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
