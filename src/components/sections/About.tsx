import { Target, Eye, Compass, BadgeCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { about } from "@/content/site";

export function About() {
  return (
    <section id="about" className="bg-paper py-24">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr]">
          {/* Left: narrative */}
          <div>
            <SectionHeading eyebrow={about.eyebrow} title={about.title} />
            <Reveal>
              <p className="mt-6 text-lg font-medium leading-relaxed text-ink-900">
                {about.intro}
              </p>
            </Reveal>
            {about.body.map((p, i) => (
              <Reveal key={i} delay={0.05 * (i + 1)}>
                <p className="mt-4 leading-relaxed text-sand-700">{p}</p>
              </Reveal>
            ))}

            <Reveal delay={0.2}>
              <figure className="mt-8 border-l-2 border-accent pl-5">
                <blockquote className="font-serif text-lg italic text-ink-800">
                  “{about.commitment}”
                </blockquote>
              </figure>
            </Reveal>
          </div>

          {/* Right: mission / vision / credentials */}
          <div className="space-y-5">
            <Reveal>
              <div className="rounded-2xl bg-ink-950 p-7 text-white">
                <div className="flex items-center gap-3">
                  <Target className="h-5 w-5 text-accent" />
                  <h3 className="font-serif text-xl">Our Mission</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-white/75">
                  {about.mission}
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="rounded-2xl border border-ink-900/10 bg-white p-7">
                <div className="flex items-center gap-3">
                  <Eye className="h-5 w-5 text-accent-dark" />
                  <h3 className="font-serif text-xl text-ink-900">Our Vision</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-sand-700">
                  {about.vision}
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="rounded-2xl border border-ink-900/10 bg-white p-7">
                <div className="flex items-center gap-3">
                  <Compass className="h-5 w-5 text-accent-dark" />
                  <h3 className="font-serif text-xl text-ink-900">
                    Credentials & Certifications
                  </h3>
                </div>
                <ul className="mt-4 space-y-3">
                  {about.credentials.map((c) => (
                    <li key={c.label} className="flex gap-3">
                      <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-accent-dark" />
                      <span className="text-sm text-ink-800">
                        <span className="font-medium">{c.label}</span>
                        <span className="block text-sand-700">{c.value}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
