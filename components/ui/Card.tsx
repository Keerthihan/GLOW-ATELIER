// components/ui/Card.tsx
import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ children, className = "", ...props }) => {
  return (
    <div
      className={`bg-white-rock border-2 border-pink-daisy/60 rounded-sm hover:border-lotus hover:shadow-[4px_4px_0px_0px_rgba(146,51,60,0.2)] transition-all duration-300 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
