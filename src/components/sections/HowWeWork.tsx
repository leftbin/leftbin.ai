"use client";

import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/ui/motion";

interface Step {
  number: string;
  title: string;
  description: string;
}

const STEPS: Step[] = [
  {
    number: "01",
    title: "Discovery",
    description:
      "Deep-dive into your workflows. Structured questionnaires, workflow mapping, automation opportunity scoring.",
  },
  {
    number: "02",
    title: "Scope",
    description:
      "Select one high-value workflow. Define success metrics. Agree on the deliverable.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Full vertical slice: data model, agent workflow, integrations, UI if needed. Working software, not prototypes.",
  },
  {
    number: "04",
    title: "Harden",
    description:
      "Error handling, edge cases, runbook. Demo-ready in every detail.",
  },
  {
    number: "05",
    title: "Handoff",
    description:
      "Baseline delivery with three options: handoff, productionize in a 2-week sprint, or ongoing retainer.",
  },
];

export function HowWeWork() {
  return (
    <section
      id="how-we-work"
      aria-labelledby="how-we-work-heading"
      className="py-24 sm:py-32 border-t border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUp>
          <div className="text-center mb-16">
            <p className="text-xs font-mono uppercase tracking-wider text-subtle mb-4">
              How We Work
            </p>
            <h2
              id="how-we-work-heading"
              className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4"
            >
              Discovery to delivery in days, not quarters
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every engagement follows a structured flow designed for velocity
              without sacrificing quality.
            </p>
          </div>
        </FadeInUp>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-border rounded-lg overflow-hidden border border-border">
          {STEPS.map((step) => (
            <StaggerItem key={step.number}>
              <div className="bg-background p-6 h-full">
                <div className="font-mono text-2xl font-bold text-foreground/20 mb-3">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
