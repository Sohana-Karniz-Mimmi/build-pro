import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

export const Title = ({ children, className = '' }: SectionTitleProps) => {
  return (
    <h2 className={`text-[25px] md:text-[32px] font-bold tracking-[2px] text-dark mb-[6px] md:mb-[10px] capitalize ${className}`}>
      {children}
    </h2>
  );
};