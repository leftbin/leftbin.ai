import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { SITE_CONFIG } from "@/lib/constants";
import type { IconName } from "@/components/ui/icon";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Leftbin. Email, LinkedIn, or book a demo to discuss your workflow automation needs.",
};

interface ContactMethod {
  icon: IconName;
  label: string;
  value: string;
  href: string;
  external: boolean;
}

const CONTACT_METHODS: ContactMethod[] = [
  {
    icon: "mail",
    label: "Email",
    value: SITE_CONFIG.social.email,
    href: `mailto:${SITE_CONFIG.social.email}`,
    external: true,
  },
  {
    icon: "linkedin",
    label: "LinkedIn",
    value: "Leftbin on LinkedIn",
    href: SITE_CONFIG.social.linkedin,
    external: true,
  },
  {
    icon: "github",
    label: "GitHub",
    value: "leftbin",
    href: SITE_CONFIG.githubUrl,
    external: true,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 sm:py-24">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <p className="text-xs font-mono uppercase tracking-wider text-subtle mb-4">
              Contact
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
              Let&apos;s talk about your workflows
            </h1>
            <p className="text-muted-foreground leading-relaxed">
              Have a question about our services, want to discuss a potential
              engagement, or just want to say hello? Reach out through any of
              the channels below.
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-24 sm:py-32 border-t border-border">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="space-y-6">
            {CONTACT_METHODS.map((method) => (
              <StaggerItem key={method.label}>
                <a
                  href={method.href}
                  target={method.external ? "_blank" : undefined}
                  rel={method.external ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-foreground/20 transition-colors duration-300 group"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-muted shrink-0">
                    <Icon
                      name={method.icon}
                      size="md"
                      className="text-foreground"
                    />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase tracking-wider text-subtle mb-0.5">
                      {method.label}
                    </div>
                    <div className="text-sm text-foreground group-hover:text-foreground/80 transition-colors">
                      {method.value}
                    </div>
                  </div>
                  <Icon
                    name="arrow-right"
                    size="sm"
                    className="text-subtle ml-auto group-hover:text-foreground transition-colors"
                  />
                </a>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 sm:py-32 border-t border-border">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInUp>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-4">
              Have a specific workflow in mind?
            </h2>
            <p className="text-muted-foreground mb-8">
              Tell us what to automate. We&apos;ll show you what intelligent
              automation looks like\u2014in your domain, with your data.
            </p>
            <Button asChild size="lg">
              <Link href={SITE_CONFIG.bookDemoUrl}>Book a Demo</Link>
            </Button>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
