import type { Metadata } from "next";
import { Briefcase } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/Reveal";
import { CareerForm } from "@/components/CareerForm";
import { careerOpenings } from "@/content/site";

export const metadata: Metadata = { title: "Careers" };

export default function Page() {
  const primaryPosition = careerOpenings[0]?.title ?? "General Application";

  return (
    <PageLayout>
      <PageHero
        title="Careers"
        description="Great research begins with curious minds. Explore current openings and apply to join our team."
      />

      <section className="bg-paper py-16 sm:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            {/* Current openings */}
            <div>
              <h2 className="font-serif text-2xl text-ink-900 sm:text-3xl">
                Current Openings
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-sand-700">
                We&apos;re always looking for talented people. Explore the roles
                below and apply using the form.
              </p>

              <div className="mt-8 space-y-4">
                {careerOpenings.map((role) => (
                  <Reveal as="div" key={role.title}>
                    <article className="rounded-2xl border border-ink-900/10 bg-white p-6 shadow-sm">
                      <div className="flex items-start gap-4">
                        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand">
                          <Briefcase className="h-6 w-6" />
                        </span>
                        <div>
                          <h3 className="font-serif text-xl text-ink-900">
                            {role.title}
                          </h3>
                          <p className="mt-2 text-sm leading-relaxed text-sand-700">
                            {role.description}
                          </p>
                        </div>
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Application form */}
            <div>
              <h2 className="font-serif text-2xl text-ink-900 sm:text-3xl">
                Join Our Team
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-sand-700">
                Fill in your details and share a link to your resume — we&apos;ll be
                in touch.
              </p>
              <div className="mt-8">
                <CareerForm position={primaryPosition} />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </PageLayout>
  );
}
