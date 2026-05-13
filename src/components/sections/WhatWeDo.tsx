"use client";

import { Icon } from "@/components/ui/icon";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import type { IconName } from "@/components/ui/icon";

interface Phase {
  icon: IconName;
  title: string;
  description: string;
}

const PHASES: Phase[] = [
  {
    icon: "target",
    title: "Discover",
    description:
      "We map your workflows end to end. Every manual step, every decision point, every data source. Then we identify where intelligent automation delivers the highest value.",
  },
  {
    icon: "workflow",
    title: "Build",
    description:
      "AI agents that reason through messy data, draft outputs, validate against your rules, and execute — with human approval gates where risk demands it. Delivered in days.",
  },
  {
    icon: "activity",
    title: "Operate",
    description:
      "Monitor agent performance, tune decision quality, expand to new workflows. Retainer clients get continuous improvement, not a handoff and goodbye.",
  },
];

export function WhatWeDo() {
  return (
    <section
      id="what-we-do"
      aria-labelledby="what-we-do-heading"
      className="py-24 sm:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUp>
          <div className="text-center mb-16">
            <p className="text-xs font-mono uppercase tracking-wider text-subtle mb-4">
              What We Do
            </p>
            <h2
              id="what-we-do-heading"
              className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4"
            >
              Three phases. One outcome: automation that works.
            </h2>
          </div>
        </FadeInUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PHASES.map((phase) => (
            <StaggerItem key={phase.title}>
              <div className="bg-transparent border border-border rounded-lg p-6 hover:border-foreground/20 transition-colors duration-300 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-muted">
                    <Icon name={phase.icon} size="md" className="text-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {phase.title}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {phase.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
