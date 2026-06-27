import { GraduationCap, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/Reveal";
import { careers } from "@/content/site";

export function Careers() {
  return (
    <section id="careers" className="bg-paper py-24">
      <Container>
        <div className="overflow-hidden rounded-3xl border border-ink-900/10 bg-white">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
            {/* Left content */}
            <div className="p-8 sm:p-12">
              <SectionHeading
                eyebrow={careers.eyebrow}
                title={careers.title}
                description={careers.body}
              />
              <p className="mt-5 font-serif text-lg italic text-accent-dark">
                “{careers.lead}”
              </p>

              <div className="mt-8 grid gap-8 sm:grid-cols-2">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-ink-900">
                    Internship Exposure
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {careers.internships.map((c) => (
                      <li
                        key={c}
                        className="flex items-center gap-2 text-sm text-sand-700"
                      >
                        <span aria-hidden className="text-accent">
                          ✦
                        </span>
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-ink-900">
                    Who Should Apply
                  </h3>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {careers.fields.map((f) => (
                      <li
                        key={f}
                        className="rounded-full bg-paper-200 px-3 py-1 text-xs font-medium text-ink-800"
                      >
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-9">
                <Button href="/#contact" variant="primary">
                  Apply Today <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Right visual panel */}
            <Reveal as="div" className="bg-ink-950 p-8 sm:p-12">
              <div className="flex h-full flex-col justify-center">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-accent/15 text-accent">
                  <GraduationCap className="h-7 w-7" />
                </span>
                <h3 className="mt-6 font-serif text-2xl text-white">
                  Join a culture of research, learning &amp; market understanding.
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-white/65">
                  We welcome students, graduates, and professionals passionate
                  about financial markets and analytical thinking. Bring your
                  curiosity — we&apos;ll provide the framework.
                </p>
                <p className="mt-8 text-xs uppercase tracking-widest text-accent-light">
                  Resume upload &amp; applications open
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
