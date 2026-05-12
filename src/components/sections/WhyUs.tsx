"use client";

import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/ui/motion";

interface Differentiator {
  them: string;
  us: string;
}

interface ComparisonBlock {
  title: string;
  description: string;
  differentiators: Differentiator[];
}

const COMPARISONS: ComparisonBlock[] = [
  {
    title: "vs Traditional Consulting",
    description:
      "They deliver slide decks and recommendations. We deliver working software. Our AI agents are in production before their project charter is approved.",
    differentiators: [
      { them: "Slide decks and roadmaps", us: "Working software in production" },
      { them: "Months of discovery", us: "Days from kickoff to delivery" },
      { them: "Theoretical ROI projections", us: "Measurable workflow economics" },
    ],
  },
  {
    title: "vs n8n / Zapier / Make",
    description:
      "They chain deterministic steps. We deploy intelligent automation. Our agents reason through ambiguity, encode domain knowledge, and operate with durable execution and approval flows.",
    differentiators: [
      { them: "Deterministic step chaining", us: "AI reasoning and interpretation" },
      { them: "Cost per execution", us: "Cost per useful decision" },
      { them: "Generic connectors", us: "Domain knowledge encoded as skills" },
    ],
  },
];

export function WhyUs() {
  return (
    <section
      id="why-us"
      aria-labelledby="why-us-heading"
      className="py-24 sm:py-32 border-t border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUp>
          <div className="text-center mb-16">
            <p className="text-xs font-mono uppercase tracking-wider text-subtle mb-4">
              Why Leftbin
            </p>
            <h2
              id="why-us-heading"
              className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4"
            >
              Not another consulting firm. Not another automation tool.
            </h2>
          </div>
        </FadeInUp>

        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {COMPARISONS.map((block) => (
            <StaggerItem key={block.title}>
              <div className="border border-border rounded-lg p-6 sm:p-8 h-full">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {block.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {block.description}
                </p>
                <div className="space-y-4">
                  {block.differentiators.map((diff) => (
                    <div key={diff.us} className="grid grid-cols-2 gap-4 text-sm">
                      <div className="text-muted-foreground/60 line-through decoration-muted-foreground/30">
                        {diff.them}
                      </div>
                      <div className="text-foreground font-medium">
                        {diff.us}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
