import { Container } from "@/components/ui/Container";
import { trustStrip } from "@/content/site";

export function TrustStrip() {
  return (
    <section className="border-y border-ink-900/10 bg-ink-900">
      <Container className="py-5">
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-center">
          {trustStrip.map((item) => (
            <li
              key={item}
              className="flex items-center gap-2 text-sm font-medium text-white/75"
            >
              <span aria-hidden className="text-accent">
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
