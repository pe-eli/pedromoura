interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  title,
  subtitle,
  align = "left",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center" : "text-left";
  const subtitleClass =
    align === "center"
      ? "mx-auto mt-4 max-w-2xl text-base text-text-secondary"
      : "mt-4 max-w-3xl text-base text-text-secondary";

  return (
    <div className={`mb-10 md:mb-12 ${alignClass}`}>
      <h2 className="font-display text-3xl font-bold tracking-wide text-text-primary md:text-4xl">
        {title}
        <span className="text-glow ml-1 text-neon-blue">.</span>
      </h2>
      {subtitle && (
        <p className={subtitleClass}>
          {subtitle}
        </p>
      )}
      <div
        className="mt-4 h-px w-20 bg-gradient-to-r from-neon-blue to-transparent"
        style={align === "center" ? { margin: "1rem auto 0" } : undefined}
      />
    </div>
  );
}
