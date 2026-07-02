import { Container } from "@/components/ui/Container";

/** Bright title band shown at the top of every inner page. */
export function PageHero({
  eyebrow = "The Equal Research",
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="bg-wash-cool relative overflow-hidden pt-40 pb-16 sm:pt-48 sm:pb-20">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-24 h-[28rem] w-[28rem] rounded-full bg-brand/10 blur-[130px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-24 h-[24rem] w-[24rem] rounded-full bg-accent/10 blur-[130px]"
      />
      <Container className="relative">
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-dark">
          <span aria-hidden className="text-brand">
            ✦
          </span>
          {eyebrow}
        </span>
        <h1 className="mt-3 max-w-4xl font-serif text-4xl leading-tight text-ink-900 sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-sand-700">
            {description}
          </p>
        )}
      </Container>
    </section>
  );
}
