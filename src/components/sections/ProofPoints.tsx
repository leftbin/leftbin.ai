"use client";

import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/ui/motion";

interface Stat {
  value: string;
  description: string;
}

const STATS: Stat[] = [
  {
    value: "130+",
    description:
      "Projects completed by AI coding agents across web, desktop, mobile, CLI, and backend",
  },
  {
    value: "1\u20132 days",
    description:
      "Full vertical slices delivered. Data model through UI in a single sprint",
  },
  {
    value: "2 products",
    description:
      "Production-grade platforms shipped: a DevOps platform and an AI agent platform",
  },
  {
    value: "5 surfaces",
    description:
      "Simultaneous delivery across web, desktop, mobile, CLI, and backend",
  },
];

export function ProofPoints() {
  return (
    <section
      id="proof-points"
      aria-labelledby="proof-points-heading"
      className="py-24 sm:py-32 border-t border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUp>
          <div className="text-center mb-16">
            <p className="text-xs font-mono uppercase tracking-wider text-subtle mb-4">
              Track Record
            </p>
            <h2
              id="proof-points-heading"
              className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4"
            >
              Built with AI agents. Battle-tested in production.
            </h2>
          </div>
        </FadeInUp>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat) => (
            <StaggerItem key={stat.value}>
              <div className="text-center">
                <div className="font-mono text-3xl sm:text-4xl font-bold text-foreground mb-3">
                  {stat.value}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
