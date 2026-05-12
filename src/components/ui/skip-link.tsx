import { cn } from "@/lib/utils";

export interface SkipLinkProps {
  targetId?: string;
  label?: string;
  className?: string;
}

function SkipLink({
  targetId = "main-content",
  label = "Skip to main content",
  className,
}: SkipLinkProps) {
  return (
    <a
      href={`#${targetId}`}
      className={cn(
        "sr-only",
        "focus:not-sr-only",
        "focus:fixed focus:top-4 focus:left-4 focus:z-[100]",
        "focus:px-4 focus:py-2 focus:rounded-md",
        "focus:bg-primary focus:text-primary-foreground",
        "focus:font-medium focus:text-sm",
        "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background",
        "focus:shadow-lg",
        className
      )}
    >
      {label}
    </a>
  );
}

export { SkipLink };
