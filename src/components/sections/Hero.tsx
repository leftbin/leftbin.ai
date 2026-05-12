"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FadeInUp } from "@/components/ui/motion";
import { SITE_CONFIG } from "@/lib/constants";

const STATS = [
  { value: "130+", label: "Projects Delivered" },
  { value: "Days", label: "Not Months" },
  { value: "15yr+", label: "Engineering Experience" },
  { value: "Production", label: "Agent Platform" },
] as const;

export function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center py-16 sm:py-24 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 40%, transparent 40%, hsl(var(--background)) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <FadeInUp delay={0.1}>
            <p className="text-xs font-mono uppercase tracking-wider text-subtle mb-6">
              {SITE_CONFIG.tagline}
            </p>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6"
            >
              We build AI agents that run your business workflows
            </h1>
          </FadeInUp>

          <FadeInUp delay={0.3}>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
              Not slides. Working software. In days, not months. We automate the
              repetitive, data-driven operations that eat your team&apos;s
              hours&mdash;using AI agents that interpret, reason, and execute
              with human approval where it matters.
            </p>
          </FadeInUp>

          <FadeInUp delay={0.4}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg">
                <Link href={SITE_CONFIG.bookDemoUrl}>Book a Demo</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/services">Our Services</Link>
              </Button>
            </div>
          </FadeInUp>
        </div>

        <FadeInUp delay={0.6}>
          <div className="mt-16 pt-8 border-t border-border">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
              {STATS.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-mono text-2xl sm:text-3xl font-bold text-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs font-mono uppercase tracking-wider text-subtle">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
