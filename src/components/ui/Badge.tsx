interface BadgeProps {
  label: string;
  variant?: "blue" | "purple" | "ghost";
}

export function Badge({ label, variant = "blue" }: BadgeProps) {
  const variants = {
    blue: "border-neon-blue/30 text-neon-blue bg-neon-blue/10",
    purple: "border-neon-purple/30 text-neon-purple bg-neon-purple/10",
    ghost: "border-glass-border text-text-secondary bg-white/5",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full border px-4 py-1.5 font-body text-xs font-medium ${variants[variant]}`}
    >
      {label}
    </span>
  );
}
