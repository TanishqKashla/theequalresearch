import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "outline" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand text-white hover:bg-brand-dark shadow-[0_10px_30px_-10px_rgba(13,139,139,0.55)] hover:-translate-y-0.5",
  outline:
    "border border-ink-900/20 bg-white/60 text-ink-900 hover:border-brand hover:text-brand hover:bg-white",
  ghost:
    "border border-ink-900/15 text-ink-900 hover:border-brand hover:text-brand",
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
