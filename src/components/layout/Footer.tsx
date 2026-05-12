import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { FOOTER_LINKS, SITE_CONFIG } from "@/lib/constants";
import { Icon } from "@/components/ui/icon";
import { Logo } from "@/components/ui/logo";

export type FooterProps = React.HTMLAttributes<HTMLElement>;

function Footer({ className, ...props }: FooterProps) {
  return (
    <footer
      className={cn("border-t border-border", className)}
      {...props}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <div className="lg:col-span-1">
              <div className="mb-4">
                <Logo size="sm" showText={false} />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {SITE_CONFIG.description}
              </p>
            </div>

            <FooterLinkSection title="Company" links={FOOTER_LINKS.company} />
            <FooterLinkSection title="Services" links={FOOTER_LINKS.services} />
            <FooterLinkSection title="Connect" links={FOOTER_LINKS.connect} />
          </div>
        </div>

        <div className="py-6 border-t border-border">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-subtle">
              &copy; {new Date().getFullYear()} {SITE_CONFIG.copyright.holder}. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a
                href={SITE_CONFIG.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-subtle hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Icon name="linkedin" size="md" />
              </a>
              <a
                href={SITE_CONFIG.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-subtle hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Icon name="github" size="md" />
              </a>
              <a
                href={`mailto:${SITE_CONFIG.social.email}`}
                className="text-subtle hover:text-foreground transition-colors"
                aria-label="Email"
              >
                <Icon name="mail" size="md" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

interface FooterLinkSectionProps {
  title: string;
  links: ReadonlyArray<{
    label: string;
    href: string;
    external?: boolean;
  }>;
}

function FooterLinkSection({ title, links }: FooterLinkSectionProps) {
  return (
    <div>
      <h3 className="text-xs font-mono uppercase tracking-wider text-subtle mb-4">
        {title}
      </h3>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.href + link.label}>
            <FooterLink href={link.href} external={link.external}>
              {link.label}
            </FooterLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

interface FooterLinkProps {
  href: string;
  external?: boolean;
  children: React.ReactNode;
}

function FooterLink({ href, external, children }: FooterLinkProps) {
  const baseClasses = cn(
    "inline-flex items-center gap-1.5",
    "text-sm text-muted-foreground",
    "transition-colors",
    "hover:text-foreground"
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClasses}
      >
        <span>{children}</span>
        <Icon name="external-link" size="xs" className="opacity-50" />
      </a>
    );
  }

  return (
    <Link href={href} className={baseClasses}>
      {children}
    </Link>
  );
}

export { Footer };
