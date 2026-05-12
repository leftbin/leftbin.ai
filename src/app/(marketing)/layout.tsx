import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SkipLink } from "@/components/ui/skip-link";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <SkipLink />
      <Header />
      <main id="main-content" className="pt-16" tabIndex={-1}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
