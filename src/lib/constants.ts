export const SITE_CONFIG = {
  name: "Leftbin",

  tagline: "AI Agent-Powered Business Workflow Automation",

  description:
    "We build AI agents that run your business workflows. Not slides. Working software. In days, not months.",

  url: "https://leftbin.ai",

  githubUrl: "https://github.com/leftbin",

  social: {
    linkedin: "https://www.linkedin.com/company/leftbin",
    email: "hello@leftbin.ai",
  },

  copyright: {
    holder: "Leftbin",
  },

  bookDemoUrl: "/book-demo",
} as const;

// ---------------------------------------------------------------------------
// Navigation
// ---------------------------------------------------------------------------

export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

export const NAV_PRIMARY: NavLink[] = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
];

export const NAV_LINKS_ALL: NavLink[] = [
  ...NAV_PRIMARY,
  { label: "Contact", href: "/contact" },
  { label: "Case Studies", href: "/case-studies" },
];

// ---------------------------------------------------------------------------
// Footer
// ---------------------------------------------------------------------------

export const FOOTER_LINKS = {
  company: [
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "Services", href: "/services" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Book a Demo", href: "/book-demo" },
  ],
  connect: [
    { label: "LinkedIn", href: SITE_CONFIG.social.linkedin, external: true },
    { label: "GitHub", href: SITE_CONFIG.githubUrl, external: true },
    { label: "Email", href: `mailto:${SITE_CONFIG.social.email}`, external: true },
  ],
} as const;
