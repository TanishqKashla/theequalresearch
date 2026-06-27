import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "outline" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-ink-950 hover:bg-accent-light shadow-[0_8px_30px_-12px_rgba(200,164,92,0.6)] hover:-translate-y-0.5",
  outline:
    "border border-white/30 text-white hover:border-accent hover:text-accent",
  ghost:
    "border border-ink-900/15 text-ink-900 hover:border-accent hover:text-accent-dark",
};

export function Button({
  href,
  variant = "primary",
  className,
  children,
}: {
  href: string;
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className={cn(base, variants[variant], className)}>
      {children}
    </Link>
  );
}
