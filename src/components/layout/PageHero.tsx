import Image from "next/image";
import { Container } from "@/components/ui/Container";

/** Bright title band shown at the top of every inner page.
 *  When `image` is provided, it renders a themed background photograph with a
 *  left-to-right readability scrim (same treatment as the homepage hero) so the
 *  dark title text stays crisp over the image. */
export function PageHero({
  eyebrow = "The Equal Research",
  title,
  description,
  image,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  image?: string;
}) {
  return (
    <section className="bg-paper-200 relative isolate overflow-hidden pt-40 pb-16 sm:pt-48 sm:pb-20">
      {image ? (
        <>
          {/* Background photograph */}
          <Image
            src={image}
            alt=""
            aria-hidden
            fill
            sizes="100vw"
            className="-z-20 object-cover object-[75%_center]"
          />
          {/* Left-weighted readability scrim keeps the title legible while the
              right side of the photo stays vivid. */}
          <div
            aria-hidden
            className="absolute inset-0 -z-10"
            style={{
              background:
                "linear-gradient(to right, #ffffff 0%, rgba(255,255,255,0.94) 30%, rgba(255,255,255,0.62) 56%, rgba(255,255,255,0.15) 82%)",
            }}
          />
          {/* Bottom fade blends the photo into the white content section below */}
          <div
            aria-hidden
            className="absolute inset-x-0 bottom-0 -z-10 h-24"
            style={{
              background: "linear-gradient(to bottom, rgba(255,255,255,0), #ffffff)",
            }}
          />
        </>
      ) : (
        <>
          <div
            aria-hidden
            className="pointer-events-none absolute -top-32 -right-24 h-[28rem] w-[28rem] rounded-full bg-brand/10 blur-[130px]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-32 -left-24 h-[24rem] w-[24rem] rounded-full bg-accent/10 blur-[130px]"
          />
        </>
      )}
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
