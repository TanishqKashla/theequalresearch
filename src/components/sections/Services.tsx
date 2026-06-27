import {
  TrendingUp,
  LineChart,
  PiggyBank,
  Landmark,
  Users,
  Sparkles,
  GraduationCap,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { services } from "@/content/site";

const icons: Record<string, LucideIcon> = {
  "investment-advisory": TrendingUp,
  "equity-research": LineChart,
  "retirement-wealth-planning": PiggyBank,
  "tax-estate-planning": Landmark,
  "family-wealth-solutions": Users,
  "future-wealth-themes": Sparkles,
  "investor-learning-hub": GraduationCap,
};

export function Services() {
  return (
    <section id="services" className="bg-ink-900 py-24">
      <Container>
        <SectionHeading
          eyebrow="Our Services"
          title="A complete research-led advisory framework"
          description="Seven focused verticals that take investors from understanding markets to building, preserving, and transferring long-term wealth."
          invert
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = icons[s.slug] ?? TrendingUp;
            return (
              <Reveal as="div" key={s.slug} delay={(i % 3) * 0.06}>
                <article className="group flex h-full flex-col rounded-2xl border border-white/10 bg-ink-850 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:bg-ink-800">
                  <div className="flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent/15 text-accent transition-colors group-hover:bg-accent group-hover:text-ink-950">
                      <Icon className="h-6 w-6" />
                    </span>
                    <ArrowUpRight className="h-5 w-5 text-white/25 transition-colors group-hover:text-accent" />
                  </div>
                  <h3 className="mt-5 font-serif text-xl text-white">
                    {s.title}
                  </h3>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wider text-accent-light/80">
                    {s.tagline}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-white/65">
                    {s.summary}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2 border-t border-white/10 pt-5">
                    {s.areas.slice(0, 4).map((a) => (
                      <li
                        key={a}
                        className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/65"
                      >
                        {a}
                      </li>
                    ))}
                    {s.areas.length > 4 && (
                      <li className="rounded-full px-2 py-1 text-xs text-accent-light">
                        +{s.areas.length - 4} more
                      </li>
                    )}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
