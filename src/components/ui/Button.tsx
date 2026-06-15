import { cn } from "@/lib/utils";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  href,
  target,
  rel,
  onClick,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2";

  const variants = {
    primary:
      "bg-primary text-white hover:bg-primary-dark shadow-md shadow-blue-200 hover:shadow-lg hover:shadow-blue-300",
    outline:
      "border-2 border-primary text-primary hover:bg-accent-light bg-white",
    ghost: "text-primary hover:bg-accent-light",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = cn(base, variants[variant], sizes[size], className);

  if (href) {
    return (
      <a href={href} className={classes} target={target} rel={rel}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
