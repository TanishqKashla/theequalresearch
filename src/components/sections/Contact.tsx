import { Mail, Phone, MessageCircle, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/ContactForm";
import { company } from "@/content/site";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-ink-900 py-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-0 h-[30rem] w-[30rem] rounded-full bg-accent/8 blur-[120px]"
      />
      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          {/* Left: invitation + contact rails */}
          <div className="text-white">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent-light">
              <span aria-hidden className="text-accent">
                ✦
              </span>
              Get In Touch
            </span>
            <h2 className="mt-3 font-serif text-3xl leading-tight sm:text-4xl">
              Start with a conversation about your goals
            </h2>
            <p className="mt-4 max-w-md leading-relaxed text-white/70">
              Whether you&apos;re building wealth, planning for the future, or
              simply want to understand the markets better — our team is here to
              help with research-driven clarity.
            </p>

            <ul className="mt-9 space-y-4">
              <ContactRail icon={Mail} label="Email" value={company.email} href={`mailto:${company.email}`} />
              <ContactRail icon={Phone} label="Phone" value={company.phone} href={`tel:${company.phone}`} />
              <ContactRail
                icon={MessageCircle}
                label="WhatsApp"
                value="Chat with our team"
                href={`https://wa.me/${company.whatsapp}`}
              />
              <ContactRail
                icon={MapPin}
                label="Registration"
                value={`SEBI RIA ${company.sebiRia}`}
              />
            </ul>
          </div>

          {/* Right: form */}
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}

function ContactRail({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <>
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-white/8 text-accent">
        <Icon className="h-5 w-5" />
      </span>
      <span>
        <span className="block text-xs uppercase tracking-wider text-white/45">
          {label}
        </span>
        <span className="text-sm font-medium text-white">{value}</span>
      </span>
    </>
  );

  return (
    <li>
      {href ? (
        <a href={href} className="flex items-center gap-4 transition-opacity hover:opacity-80">
          {inner}
        </a>
      ) : (
        <div className="flex items-center gap-4">{inner}</div>
      )}
    </li>
  );
}
