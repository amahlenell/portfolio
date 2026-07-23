import type { ReactNode } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Nav />
      <main className="flex-1 pt-24">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(1000px_500px_at_50%_-100px,oklch(0.72_0.09_236/0.18),transparent)]" />
      <div className="container-x pt-16 pb-20 md:pt-24 md:pb-28 text-center">
        <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-navy/70">
          <span className="h-1.5 w-1.5 rounded-full bg-sky" />
          {eyebrow}
        </div>
        <h1 className="mt-6 font-display text-5xl md:text-7xl text-navy text-balance">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 mx-auto max-w-2xl text-lg text-muted-foreground text-balance">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
