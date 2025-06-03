import React from "react";

interface SectionDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export const Description = ({
  children,
  className = "",
}: SectionDescriptionProps) => {
  return (
    <p
      className={`text-[11px] md:text-[14px] w-full max-w-[684px] mx-auto text-dark ${className}`}
    >
      {children}
    </p>
  );
};
