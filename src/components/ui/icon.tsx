import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import {
  Terminal,
  Cpu,
  Code,
  Activity,
  Github,
  BookOpen,
  ExternalLink,
  Menu,
  X,
  ChevronRight,
  ChevronDown,
  ArrowRight,
  Shield,
  Mail,
  Users,
  Zap,
  Target,
  CheckCircle,
  Clock,
  Layers,
  Workflow,
  Linkedin,
  type LucideIcon,
} from "lucide-react";

const iconMap = {
  terminal: Terminal,
  cpu: Cpu,
  code: Code,
  activity: Activity,
  github: Github,
  "book-open": BookOpen,
  "external-link": ExternalLink,
  menu: Menu,
  x: X,
  "chevron-right": ChevronRight,
  "chevron-down": ChevronDown,
  "arrow-right": ArrowRight,
  shield: Shield,
  mail: Mail,
  users: Users,
  zap: Zap,
  target: Target,
  "check-circle": CheckCircle,
  clock: Clock,
  layers: Layers,
  workflow: Workflow,
  linkedin: Linkedin,
} as const;

export type IconName = keyof typeof iconMap;

const iconVariants = cva("shrink-0", {
  variants: {
    size: {
      xs: "w-3 h-3",
      sm: "w-4 h-4",
      md: "w-5 h-5",
      lg: "w-6 h-6",
      xl: "w-8 h-8",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export interface IconProps
  extends Omit<React.SVGAttributes<SVGElement>, "name">,
    VariantProps<typeof iconVariants> {
  name: IconName;
}

function Icon({ name, size, className, ...props }: IconProps) {
  const IconComponent = iconMap[name];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found in icon map`);
    return null;
  }

  return (
    <IconComponent
      className={cn(iconVariants({ size }), className)}
      aria-hidden="true"
      {...props}
    />
  );
}

function getIconComponent(name: IconName): LucideIcon | undefined {
  return iconMap[name];
}

const availableIcons = Object.keys(iconMap) as IconName[];

export { Icon, iconVariants, getIconComponent, availableIcons };
