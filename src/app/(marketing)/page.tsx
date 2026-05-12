import { SITE_CONFIG } from "@/lib/constants";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center px-4" style={{ minHeight: "calc(100vh - 4rem)" }}>
      <div className="max-w-2xl text-center">
        <p className="text-xs font-mono uppercase tracking-wider text-subtle mb-6">
          Coming Soon
        </p>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
          {SITE_CONFIG.name}
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8">
          {SITE_CONFIG.description}
        </p>

        <div className="flex items-center justify-center gap-8 pt-8 border-t border-border">
          <StatItem label="Projects" value="130+" />
          <StatItem label="Delivery" value="Days, not months" />
          <StatItem label="Founders" value="2 × 15yr eng" />
        </div>
      </div>
    </div>
  );
}

function StatItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-xs font-mono uppercase tracking-wider text-subtle mb-1">
        {label}
      </div>
      <div className="text-sm text-muted-foreground">{value}</div>
    </div>
  );
}
