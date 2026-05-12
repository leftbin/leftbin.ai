import type { Metadata } from "next";
import { FadeInUp } from "@/components/ui/motion";
import { BookDemoForm } from "@/components/forms/BookDemoForm";

export const metadata: Metadata = {
  title: "Book a Demo",
  description:
    "Tell us which workflow to automate. We'll show you what intelligent automation looks like in your domain.",
};

export default function BookDemoPage() {
  return (
    <>
      <section className="py-16 sm:py-24">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="mb-12">
              <p className="text-xs font-mono uppercase tracking-wider text-subtle mb-4">
                Book a Demo
              </p>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
                Tell us which workflow to automate
              </h1>
              <p className="text-muted-foreground leading-relaxed">
                Describe the repetitive operations eating your team&apos;s
                hours. We&apos;ll show you what intelligent automation looks
                like&mdash;in your domain, with your data, in days.
              </p>
            </div>
          </FadeInUp>

          <BookDemoForm />
        </div>
      </section>
    </>
  );
}
