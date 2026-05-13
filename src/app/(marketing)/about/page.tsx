import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { SITE_CONFIG } from "@/lib/constants";
import { Icon } from "@/components/ui/icon";
import type { IconName } from "@/components/ui/icon";

export const metadata: Metadata = {
  title: "About",
  description:
    "Two engineers with 15+ years of experience, augmented by AI coding agents. 130+ projects shipped. Production agent platforms built and operated.",
};

interface Founder {
  name: string;
  role: string;
  bio: string[];
}

const FOUNDERS: Founder[] = [
  {
    name: "Swarup Donepudi",
    role: "Founder",
    bio: [
      "Builder first. Thinks in systems and platforms — his instinct is to design the operating system for a problem, not just solve the immediate task.",
      "15 years from DevOps engineering to platform architecture. Built internal tools that saved ~$1M at CDK Global in Chicago. Built Zodiac — an internal DevOps self-service platform for 2,000 engineers — at Zillow.",
      "At Leftbin, Swarup leads client relationships, engagement strategy, and business positioning. He owns the Company OS product surface and leads discovery conversations with clients.",
    ],
  },
  {
    name: "Suresh",
    role: "Co-Founder",
    bio: [
      "Deep technical partner. When a new technology needs to be evaluated and integrated, Suresh figures it out — completely, from research through production.",
      "Independently drove: the trading engine (Kafka Streams), search (Apache Solr), authorization (OpenFGA), billing (Stripe), and the entire AI agent research that led to Stigmer — the agent execution model, MCP server architecture, skill system, and approval flows.",
      "At Leftbin, Suresh owns agent execution architecture and deep technical research. He is the reason Leftbin can deliver production-grade agent systems, not prototypes.",
    ],
  },
];

interface Differentiator {
  icon: IconName;
  title: string;
  description: string;
}

const DIFFERENTIATORS: Differentiator[] = [
  {
    icon: "check-circle",
    title: "Not theoretical",
    description:
      "130+ projects shipped with AI coding agents. Two production-grade platforms built entirely with agent-driven development. This is battle-tested capability.",
  },
  {
    icon: "zap",
    title: "Not slow",
    description:
      "Full vertical slices — data model through UI — delivered in 1–2 calendar days. The constraint is always scope selection, never implementation capacity.",
  },
  {
    icon: "target",
    title: "Not generic",
    description:
      'Specialized in AI agent-powered workflow automation. Not generic software development, not staff augmentation, not "we use ChatGPT to write your code faster."',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="max-w-3xl">
              <p className="text-xs font-mono uppercase tracking-wider text-subtle mb-4">
                About
              </p>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-6">
                Two engineers. One mission. Automate what matters.
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Leftbin is a two-founder team augmented by AI coding agents.
                Both founders are full-stack engineers who have worked together
                since 2007. They don&apos;t scale with headcount — they scale
                with intelligence.
              </p>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Origin Story */}
      <section
        id="origin"
        aria-labelledby="origin-heading"
        className="py-24 sm:py-32 border-t border-border"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <p className="text-xs font-mono uppercase tracking-wider text-subtle mb-4">
              Our Story
            </p>
            <h2
              id="origin-heading"
              className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-8"
            >
              From college friends to production AI agents
            </h2>
          </FadeInUp>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <FadeInUp delay={0.1}>
              <p>
                Swarup and Suresh met in college in Hyderabad in 2007. They
                started building together from the very first side project and
                never stopped — through career changes, relocations, and
                multiple product pivots.
              </p>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <p>
                Leftbin was incorporated in 2019 as Leftbin Labs, but the
                consulting path stalled — the IT consulting market was
                saturated, and without a sharp niche, it was impossible to
                command premium pricing. The founders pivoted to building
                products.
              </p>
            </FadeInUp>
            <FadeInUp delay={0.3}>
              <p>
                Then came AI coding agents. Over 1.5 years, they shipped 130+
                projects using AI-driven development, building two
                production-grade platforms: a DevOps platform (Planton) and an
                open-source AI agent platform (Stigmer). Multi-surface product
                delivery across web, desktop, mobile, CLI, and backend — all
                built by a two-person team augmented by coding agents.
              </p>
            </FadeInUp>
            <FadeInUp delay={0.4}>
              <p className="text-foreground font-medium">
                In April 2026, Leftbin was reinstated at leftbin.ai with a sharp
                niche: AI agent-powered business workflow automation. Not
                theoretical expertise — battle-tested, production-validated
                capability.
              </p>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section
        id="founders"
        aria-labelledby="founders-heading"
        className="py-24 sm:py-32 border-t border-border"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="mb-16">
              <p className="text-xs font-mono uppercase tracking-wider text-subtle mb-4">
                The Team
              </p>
              <h2
                id="founders-heading"
                className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground"
              >
                Complementary focus, shared intensity
              </h2>
            </div>
          </FadeInUp>

          <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {FOUNDERS.map((founder) => (
              <StaggerItem key={founder.name}>
                <div className="border border-border rounded-lg p-6 sm:p-8 h-full">
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-foreground">
                      {founder.name}
                    </h3>
                    <span className="text-xs font-mono uppercase tracking-wider text-subtle">
                      {founder.role}
                    </span>
                  </div>
                  <div className="space-y-4">
                    {founder.bio.map((paragraph, i) => (
                      <p
                        key={i}
                        className="text-sm text-muted-foreground leading-relaxed"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Differentiators */}
      <section
        id="differentiators"
        aria-labelledby="differentiators-heading"
        className="py-24 sm:py-32 border-t border-border"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="text-center mb-16">
              <p className="text-xs font-mono uppercase tracking-wider text-subtle mb-4">
                What Makes Us Different
              </p>
              <h2
                id="differentiators-heading"
                className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground"
              >
                Not another consulting pitch
              </h2>
            </div>
          </FadeInUp>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {DIFFERENTIATORS.map((diff) => (
              <StaggerItem key={diff.title}>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-muted mb-4">
                    <Icon
                      name={diff.icon}
                      size="md"
                      className="text-foreground"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {diff.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {diff.description}
                  </p>
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
              Let&apos;s talk about your workflows
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
              We&apos;d love to hear what your team spends its hours on. If
              there&apos;s an automation opportunity, we&apos;ll find it.
            </p>
          </FadeInUp>
          <FadeInUp delay={0.1}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg">
                <Link href={SITE_CONFIG.bookDemoUrl}>Book a Demo</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/services">See Our Services</Link>
              </Button>
            </div>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
