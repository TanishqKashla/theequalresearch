import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/Reveal";
import { insightsPreview, insightCategories } from "@/content/site";

export function InsightsPreview() {
  return (
    <section id="insights" className="bg-paper-200 py-24">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Insights"
            title="Research, perspectives & investor education"
            description="Market outlooks, sector reports, and learning resources that turn information into understanding."
          />
          <Button href="/#insights" variant="ghost" className="shrink-0">
            View all insights <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {insightsPreview.map((post, i) => (
            <Reveal as="div" key={post.title} delay={i * 0.06}>
              <article className="group flex h-full flex-col rounded-2xl border border-ink-900/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink-900/5">
                <span className="self-start rounded-full bg-accent/12 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent-dark">
                  {post.category}
                </span>
                <h3 className="mt-4 font-serif text-xl leading-snug text-ink-900 group-hover:text-accent-dark">
                  {post.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-sand-700">
                  {post.blurb}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent-dark">
                  Read more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Category chips */}
        <div className="mt-10 flex flex-wrap gap-2">
          {insightCategories.map((c) => (
            <span
              key={c}
              className="rounded-full border border-ink-900/10 bg-white px-4 py-1.5 text-xs font-medium text-ink-800"
            >
              {c}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
