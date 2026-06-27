import { cn } from "@/lib/cn";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  invert = false,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  invert?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em]",
            invert ? "text-accent-light" : "text-accent-dark",
          )}
        >
          <span aria-hidden className="text-accent">
            ✦
          </span>
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "mt-3 font-serif text-3xl leading-tight sm:text-4xl",
          invert ? "text-white" : "text-ink-900",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed",
            invert ? "text-white/70" : "text-sand-700",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
