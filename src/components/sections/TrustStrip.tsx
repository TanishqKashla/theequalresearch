import { Container } from "@/components/ui/Container";
import { trustStrip } from "@/content/site";

export function TrustStrip() {
  return (
    <section className="border-y border-ink-900/10 bg-gradient-to-r from-brand-soft via-white to-accent-soft">
      <Container className="py-5">
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-center">
          {trustStrip.map((item) => (
            <li
              key={item}
              className="flex items-center gap-2 text-sm font-medium text-ink-800"
            >
              <span aria-hidden className="text-brand">
                ✦
              </span>
              {item}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
