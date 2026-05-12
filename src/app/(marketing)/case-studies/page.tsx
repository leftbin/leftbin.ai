import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FadeInUp } from "@/components/ui/motion";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Real consulting engagements with measurable outcomes. See how Leftbin automates business workflows with AI agents.",
};

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="max-w-3xl">
              <p className="text-xs font-mono uppercase tracking-wider text-subtle mb-4">
                Case Studies
              </p>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-6">
                Real engagements. Measurable outcomes.
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Every engagement on this page is real. No invented metrics, no
                fabricated testimonials. We show what we&apos;ve built, for whom,
                and what it delivered.
              </p>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Tiny Tactics Featured Engagement */}
      <section className="py-24 sm:py-32 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="border border-border rounded-lg p-6 sm:p-10">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <Badge variant="outline">Mobile Gaming</Badge>
                <Badge variant="muted">In Progress</Badge>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-4">
                Tiny Tactics
              </h2>
              <p className="text-sm font-mono text-subtle mb-6">
                Mobile game company &middot; 8 Unity titles &middot; ~$2M
                revenue
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xs font-mono uppercase tracking-wider text-subtle mb-3">
                    The Challenge
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    Manual LiveOps workflows consuming team hours across 8 game
                    titles. Event scheduling, push notifications, analytics
                    reviews, content updates&mdash;all done by hand, repeated
                    daily, for every game. As the portfolio grew, the operational
                    burden scaled linearly.
                  </p>

                  <h3 className="text-xs font-mono uppercase tracking-wider text-subtle mb-3">
                    The Engagement
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    1-week pilot sprint to automate one high-value LiveOps
                    workflow using AI agents powered by Stigmer. Discovery-first:
                    map all workflows, score automation potential, select the
                    highest-value target, and deliver a working automation within
                    5 days.
                  </p>
                </div>

                <div>
                  <h3 className="text-xs font-mono uppercase tracking-wider text-subtle mb-3">
                    What We&apos;re Automating
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    AI agents that reason across game analytics data, draft
                    campaign content and push notification copy, validate against
                    business rules and brand guidelines, and execute with human
                    approval gates for high-stakes decisions.
                  </p>

                  <h3 className="text-xs font-mono uppercase tracking-wider text-subtle mb-3">
                    The Approach
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Deterministic where deterministic, agent where messy
                    judgment, human where risk. One agent run across 8 games
                    replaces thousands of manual operations&mdash;cost per useful
                    decision, not cost per execution.
                  </p>
                </div>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* More Coming */}
      <section className="py-24 sm:py-32 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInUp>
            <p className="text-xs font-mono uppercase tracking-wider text-subtle mb-4">
              More Coming
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
              We&apos;re just getting started
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
              Every engagement adds to this page. As we complete more sprints
              and deliver more measurable outcomes, the proof grows.
            </p>
          </FadeInUp>
          <FadeInUp delay={0.1}>
            <Button asChild size="lg">
              <Link href={SITE_CONFIG.bookDemoUrl}>Book a Demo</Link>
            </Button>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
