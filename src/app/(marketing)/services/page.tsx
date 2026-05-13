import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { SITE_CONFIG } from "@/lib/constants";
import type { IconName } from "@/components/ui/icon";

export const metadata: Metadata = {
  title: "Services",
  description:
    "AI agent-powered workflow automation delivered in structured sprints. Pilot, productionization, retainer, and fractional CAIO engagements.",
};

interface EngagementType {
  title: string;
  duration: string;
  icon: IconName;
  description: string;
  details: string;
}

const ENGAGEMENT_TYPES: EngagementType[] = [
  {
    title: "Pilot",
    duration: "1 week",
    icon: "target",
    description: "Prove value before committing.",
    details:
      "One workflow, constrained scope, measurable outcome. We discover your highest-value automation opportunity, build a working prototype, and demonstrate measurable impact — all within a single week.",
  },
  {
    title: "Productionization",
    duration: "2 weeks",
    icon: "shield",
    description: "Harden the pilot into production.",
    details:
      "Error handling, monitoring, runbook, integration polish. Take the workflow that proved its value in the pilot and make it production-grade — reliable, observable, and ready for your team to depend on.",
  },
  {
    title: "Retainer",
    duration: "Monthly",
    icon: "activity",
    description: "Continuous improvement, not a handoff.",
    details:
      "Ongoing support, monitoring, and expansion to new workflows. Retainer clients get continuous improvement as we tune agent decision quality, expand coverage, and adapt to changing business needs.",
  },
  {
    title: "Fractional CAIO",
    duration: "Advisory",
    icon: "cpu",
    description: "Build your own agent capability.",
    details:
      "For companies building their own AI agent systems. Architecture review, technology selection, team coaching, and hands-on guidance from engineers who have shipped production agent platforms.",
  },
];

interface WorkflowExample {
  icon: IconName;
  title: string;
  description: string;
}

const WORKFLOW_EXAMPLES: WorkflowExample[] = [
  {
    icon: "workflow",
    title: "Data Pipeline Orchestration",
    description:
      "Agents that monitor data sources, detect anomalies, reconcile across systems, and surface actionable insights — not just move data between tables.",
  },
  {
    icon: "layers",
    title: "Document Processing",
    description:
      "Extract, interpret, and validate information from unstructured documents. Agents that understand context, not just OCR text.",
  },
  {
    icon: "zap",
    title: "Cross-System Reconciliation",
    description:
      "When your CRM says one thing and your billing system says another, agents investigate discrepancies and draft resolution actions for human review.",
  },
  {
    icon: "mail",
    title: "Customer Communication Workflows",
    description:
      "Draft, personalize, and schedule communications across channels. Agents that reason about timing, audience segments, and content relevance.",
  },
  {
    icon: "check-circle",
    title: "Compliance Monitoring",
    description:
      "Continuous scanning of operations against regulatory requirements. Agents flag violations, draft remediation steps, and escalate by severity.",
  },
];

interface ApproachStep {
  number: string;
  title: string;
  description: string;
}

const APPROACH_STEPS: ApproachStep[] = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We deep-dive into your workflows with structured questionnaires and workflow mapping. Every manual step, every decision point, every data source — documented and scored for automation potential.",
  },
  {
    number: "02",
    title: "Scope",
    description:
      "From the workflow map, we select one high-value target. We define success metrics together and agree on a clear deliverable. No scope creep, no ambiguity.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Full vertical slice delivery: data model, agent workflow, integrations, UI if needed. Working software, not prototypes. Our AI-augmented engineering delivers in days what traditional teams take months to ship.",
  },
  {
    number: "04",
    title: "Harden",
    description:
      "Error handling, edge cases, monitoring, and a thin runbook. Every detail is demo-ready. The automation is production-grade, not a proof of concept that falls apart under real load.",
  },
  {
    number: "05",
    title: "Handoff",
    description:
      "Baseline delivery with three options: take ownership and maintain it yourself, engage us for a 2-week productionization sprint, or start an ongoing retainer for continuous expansion.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="max-w-3xl">
              <p className="text-xs font-mono uppercase tracking-wider text-subtle mb-4">
                Services
              </p>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-6">
                Intelligent automation, delivered in sprints
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Every engagement starts with discovery — not a sales pitch.
                We map your workflows, identify the highest-value automation
                opportunity, and deliver working software. You see results before
                you commit to anything long-term.
              </p>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Engagement Types */}
      <section
        id="engagement-types"
        aria-labelledby="engagement-types-heading"
        className="py-24 sm:py-32 border-t border-border"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="text-center mb-16">
              <p className="text-xs font-mono uppercase tracking-wider text-subtle mb-4">
                Engagement Types
              </p>
              <h2
                id="engagement-types-heading"
                className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4"
              >
                Choose the engagement that fits
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Start small and expand based on results. Every engagement is
                designed to deliver measurable value.
              </p>
            </div>
          </FadeInUp>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ENGAGEMENT_TYPES.map((type) => (
              <StaggerItem key={type.title}>
                <div className="border border-border rounded-lg p-6 sm:p-8 h-full hover:border-foreground/20 transition-colors duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-muted">
                      <Icon
                        name={type.icon}
                        size="md"
                        className="text-foreground"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {type.title}
                      </h3>
                      <span className="text-xs font-mono uppercase tracking-wider text-subtle">
                        {type.duration}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm font-medium text-foreground mb-2">
                    {type.description}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {type.details}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* What We Automate */}
      <section
        id="what-we-automate"
        aria-labelledby="what-we-automate-heading"
        className="py-24 sm:py-32 border-t border-border"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="text-center mb-16">
              <p className="text-xs font-mono uppercase tracking-wider text-subtle mb-4">
                What We Automate
              </p>
              <h2
                id="what-we-automate-heading"
                className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4"
              >
                Workflows that eat your team&apos;s hours
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                If it involves repetitive data-driven decisions across multiple
                systems, AI agents can handle it — with human approval where
                it matters.
              </p>
            </div>
          </FadeInUp>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-lg overflow-hidden border border-border">
            {WORKFLOW_EXAMPLES.map((example) => (
              <StaggerItem key={example.title}>
                <div className="bg-background p-6 h-full">
                  <Icon
                    name={example.icon}
                    size="lg"
                    className="text-foreground/20 mb-4"
                  />
                  <h3 className="text-sm font-semibold text-foreground mb-2">
                    {example.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {example.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* The Approach */}
      <section
        id="approach"
        aria-labelledby="approach-heading"
        className="py-24 sm:py-32 border-t border-border"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="text-center mb-16">
              <p className="text-xs font-mono uppercase tracking-wider text-subtle mb-4">
                The Approach
              </p>
              <h2
                id="approach-heading"
                className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4"
              >
                Structured for velocity without sacrificing quality
              </h2>
            </div>
          </FadeInUp>

          <StaggerContainer className="space-y-6 max-w-3xl mx-auto">
            {APPROACH_STEPS.map((step) => (
              <StaggerItem key={step.number}>
                <div className="flex gap-6">
                  <div className="font-mono text-2xl font-bold text-foreground/20 shrink-0 w-10">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 sm:py-32 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInUp>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
              Ready to see what we can automate for you?
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
              Tell us about your workflows. We&apos;ll show you what intelligent
              automation looks like in your domain.
            </p>
          </FadeInUp>
          <FadeInUp delay={0.1}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg">
                <Link href={SITE_CONFIG.bookDemoUrl}>Book a Demo</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/case-studies">See Our Track Record</Link>
              </Button>
            </div>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
