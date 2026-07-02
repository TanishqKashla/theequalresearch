import Image from "next/image";
import { ShieldCheck, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/Reveal";
import { hero, company } from "@/content/site";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[92vh] items-center overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-28"
    >
      {/* Background photograph */}
      <Image
        src="/hero-bg.jpg"
        alt=""
        aria-hidden
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-[70%_center]"
      />

      {/* Readability scrims — keep the left text column crisp while the
          skyscrapers stay vivid on the right. */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(to right, #ffffff 0%, rgba(255,255,255,0.94) 24%, rgba(255,255,255,0.55) 50%, rgba(255,255,255,0) 74%)",
        }}
      />
      {/* Bottom fade blends the photo into the section below */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(to top, #ffffff 0%, rgba(255,255,255,0) 30%)",
        }}
      />
      {/* Gentle top fade so header nav stays legible over the sky */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 22%)",
        }}
      />
      {/* On small screens the text spans full width, so add a uniform lift */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-white/55 sm:hidden" />
      {/* Soft brand glow for depth */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-24 -z-10 h-[32rem] w-[32rem] rounded-full bg-brand/10 blur-[130px]"
      />

      <Container className="relative">
        <div className="max-w-3xl">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand/25 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-brand-dark shadow-sm backdrop-blur">
              <ShieldCheck className="h-4 w-4" /> {hero.badge}
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-6 font-serif text-4xl leading-[1.06] text-ink-950 drop-shadow-sm sm:text-5xl lg:text-[3.9rem]">
              {hero.headline}
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-800">
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

        {/* Stat row — frosted glass so it reads over any part of the photo */}
        <Reveal delay={0.32}>
          <dl className="mt-14 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/60 bg-white/40 shadow-xl shadow-ink-900/10 ring-1 ring-ink-900/5 backdrop-blur-md sm:grid-cols-4">
            {[
              { v: "Since 2016", l: "Research Heritage" },
              { v: "SEBI RIA", l: "Registered Adviser" },
              { v: "ISO 9001", l: "Certified Process" },
              { v: "7+", l: "Advisory Verticals" },
            ].map((s) => (
              <div key={s.l} className="bg-white/60 px-5 py-6">
                <dt className="font-serif text-2xl text-brand-dark">{s.v}</dt>
                <dd className="mt-1 text-xs uppercase tracking-wider text-ink-800">
                  {s.l}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <p className="mt-6 text-xs font-medium text-ink-700">
          SEBI Reg. No. {company.sebiRia} · {company.iso}
        </p>
      </Container>
    </section>
  );
}
