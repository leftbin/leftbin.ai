"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { FadeInUp } from "@/components/ui/motion";
import { SITE_CONFIG } from "@/lib/constants";

type FormStatus = "idle" | "submitted";

const inputClasses = cn(
  "w-full rounded border border-border bg-card px-4 py-3",
  "text-sm text-foreground placeholder:text-subtle",
  "transition-colors",
  "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background",
);

export function BookDemoForm() {
  const [status, setStatus] = React.useState<FormStatus>("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    if (data.get("website")) {
      setStatus("submitted");
      return;
    }

    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const company = String(data.get("company") || "");
    const message = String(data.get("message") || "");

    const subject = encodeURIComponent(
      `Demo Request from ${name} at ${company}`,
    );
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nCompany: ${company}\n\nWhat to automate:\n${message}`,
    );

    window.location.href = `mailto:${SITE_CONFIG.social.email}?subject=${subject}&body=${body}`;
    setStatus("submitted");
  }

  if (status === "submitted") {
    return (
      <FadeInUp>
        <div className="rounded-lg border border-border bg-card p-8 text-center">
          <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-muted">
            <Icon
              name="check-circle"
              size="lg"
              className="text-foreground"
            />
          </div>
          <h2 className="text-xl font-bold text-foreground mb-2">
            Request received
          </h2>
          <p className="text-muted-foreground mb-6">
            Your email client should have opened with the request pre-filled. If
            it didn&apos;t, you can reach us directly at{" "}
            <a
              href={`mailto:${SITE_CONFIG.social.email}`}
              className="text-foreground underline underline-offset-4 hover:text-foreground/80"
            >
              {SITE_CONFIG.social.email}
            </a>
            . We&apos;ll be in touch within one business day.
          </p>
          <Button asChild variant="outline">
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </FadeInUp>
    );
  }

  return (
    <FadeInUp delay={0.1}>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label
            htmlFor="name"
            className="block text-xs font-mono uppercase tracking-wider text-subtle mb-2"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={inputClasses}
            placeholder="Jane Smith"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-xs font-mono uppercase tracking-wider text-subtle mb-2"
          >
            Work Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputClasses}
            placeholder="jane@acme.com"
          />
        </div>

        <div>
          <label
            htmlFor="company"
            className="block text-xs font-mono uppercase tracking-wider text-subtle mb-2"
          >
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            required
            autoComplete="organization"
            className={inputClasses}
            placeholder="Acme Corp"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-xs font-mono uppercase tracking-wider text-subtle mb-2"
          >
            What do you want to automate?
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            className={cn(inputClasses, "resize-y min-h-[6rem]")}
            placeholder="Tell us about the workflows eating your team's hours..."
          />
        </div>

        {/* Honeypot */}
        <div className="absolute -left-[9999px]" aria-hidden="true">
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <Button type="submit" size="lg" className="w-full">
          Send Request
        </Button>
      </form>
    </FadeInUp>
  );
}
