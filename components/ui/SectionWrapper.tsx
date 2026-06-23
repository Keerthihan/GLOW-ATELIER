// components/ui/SectionWrapper.tsx
import React from "react";

interface SectionWrapperProps extends React.HTMLAttributes<HTMLElement> {
  id: string;
  children: React.ReactNode;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({
  id,
  children,
  className = "",
  ...props
}) => {
  return (
    <section
      id={id}
      className={`py-20 px-6 lg:px-16 ${className}`}
      {...props}
    >
      {children}
    </section>
  );
};
