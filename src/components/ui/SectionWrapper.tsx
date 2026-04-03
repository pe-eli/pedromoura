import type { ReactNode } from "react";

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
  cardClassName?: string;
}

export function SectionWrapper({ id, children, className = "", cardClassName = "" }: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`relative py-20 md:py-28 ${className}`}
    >
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
        <div className={`liquid-card px-5 py-8 sm:px-8 md:px-10 md:py-10 ${cardClassName}`}>
          {children}
        </div>
      </div>
    </section>
  );
}
