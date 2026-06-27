import { ShieldCheck, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/Reveal";
import { hero, company } from "@/content/site";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-ink-950 pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      {/* Ambient background */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -right-32 h-[36rem] w-[36rem] rounded-full bg-ink-700/40 blur-[120px]" />
        <div className="absolute -bottom-48 -left-24 h-[32rem] w-[32rem] rounded-full bg-accent/10 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <Container className="relative">
        <div className="max-w-3xl">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-accent-light">
              <ShieldCheck className="h-4 w-4" /> {hero.badge}
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-6 font-serif text-4xl leading-[1.08] text-white sm:text-5xl lg:text-6xl">
              {hero.headline}
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
              {hero.subheadline}
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Button href={hero.primaryCta.href} variant="primary">
                {hero.primaryCta.label} <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href={hero.secondaryCta.href} variant="outline">
                {hero.secondaryCta.label}
              </Button>
            </div>
          </Reveal>
        </div>

        {/* Stat row */}
        <Reveal delay={0.32}>
          <dl className="mt-16 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:grid-cols-4">
            {[
              { v: "Since 2016", l: "Research Heritage" },
              { v: "SEBI RIA", l: "Registered Adviser" },
              { v: "ISO 9001", l: "Certified Process" },
              { v: "7+", l: "Advisory Verticals" },
            ].map((s) => (
              <div key={s.l} className="bg-ink-950/40 px-5 py-6">
                <dt className="font-serif text-2xl text-accent">{s.v}</dt>
                <dd className="mt-1 text-xs uppercase tracking-wider text-white/55">
                  {s.l}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <p className="mt-6 text-xs text-white/40">
          SEBI Reg. No. {company.sebiRia} · {company.iso}
        </p>
      </Container>
    </section>
  );
}
