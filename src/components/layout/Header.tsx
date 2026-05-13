"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { NAV_PRIMARY, SITE_CONFIG } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { Logo } from "@/components/ui/logo";
import { MobileMenu } from "./MobileMenu";

export type HeaderProps = React.HTMLAttributes<HTMLElement>;

const navLinkClasses = cn(
  "relative px-3 py-2",
  "text-sm font-medium",
  "text-muted-foreground",
  "rounded-sm",
  "transition-colors",
  "hover:text-foreground",
  "focus-visible:outline-none",
  "focus-visible:ring-2 focus-visible:ring-ring",
  "focus-visible:ring-offset-2 focus-visible:ring-offset-background",
  "focus-visible:text-foreground",
  "after:absolute after:bottom-1 after:left-3 after:right-3",
  "after:h-px after:bg-foreground",
  "after:origin-left after:scale-x-0",
  "after:transition-transform after:duration-[var(--duration-normal)] after:ease-out",
  "hover:after:scale-x-100",
  "focus-visible:after:scale-x-100",
);

function Header({ className, ...props }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const mobileMenuTriggerRef = React.useRef<HTMLButtonElement>(null);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50",
          "h-16",
          "bg-[rgba(10,10,10,0.88)] backdrop-blur-md",
          "border-b border-border",
          className,
        )}
        {...props}
      >
        <div className="h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-full flex items-center justify-between">
            <Logo size="md" showText={false} />

            <nav
              className="hidden md:flex items-center gap-1"
              aria-label="Main navigation"
            >
              {NAV_PRIMARY.map((link) => (
                <NavLink key={link.href} href={link.href}>
                  {link.label}
                </NavLink>
              ))}

              <div className="ml-3">
                <Button asChild size="sm">
                  <Link href={SITE_CONFIG.bookDemoUrl}>
                    Book a Demo
                  </Link>
                </Button>
              </div>
            </nav>

            <Button
              ref={mobileMenuTriggerRef}
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <Icon name="menu" size="lg" />
            </Button>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        triggerRef={mobileMenuTriggerRef}
      />
    </>
  );
}

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

function NavLink({ href, children }: NavLinkProps) {
  return (
    <Link href={href} className={navLinkClasses}>
      {children}
    </Link>
  );
}

export { Header };
