"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FadeInUp } from "@/components/ui/motion";
import { SITE_CONFIG } from "@/lib/constants";

export function FinalCTA() {
  return (
    <section
      id="final-cta"
      aria-labelledby="final-cta-heading"
      className="py-24 sm:py-32 border-t border-border"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeInUp>
          <h2
            id="final-cta-heading"
            className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4"
          >
            Ready to automate your workflows?
          </h2>
        </FadeInUp>

        <FadeInUp delay={0.1}>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
            Tell us which workflow eats your team&apos;s hours. We&apos;ll show
            you what intelligent automation looks like&mdash;in your domain, with
            your data, in days.
          </p>
        </FadeInUp>

        <FadeInUp delay={0.2}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg">
              <Link href={SITE_CONFIG.bookDemoUrl}>Book a Demo</Link>
            </Button>
            <a
              href={`mailto:${SITE_CONFIG.social.email}`}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {SITE_CONFIG.social.email}
            </a>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
