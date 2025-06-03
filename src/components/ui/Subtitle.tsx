import React from 'react';

interface SubtitleProps {
  children: React.ReactNode;
  className?: string;
}

export const Subtitle = ({ children, className = '' }: SubtitleProps) => {
  return (
    <p className={`text-[14px] md:text-[15px] font-bold uppercase tracking-[4px] mb-[6px] md:mb-[10px] text-medium-gray ${className}`}>
      {children}
    </p>
  );
};