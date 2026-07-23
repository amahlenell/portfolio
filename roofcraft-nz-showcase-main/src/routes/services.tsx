import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, HardHat, Home, Layers, ShieldCheck, Sparkles, Wrench } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Roofing Services — RoofCraft NZ" },
      { name: "description", content: "New roof installation, re-roofing, repairs, gutters, coatings and commercial roofing across the upper North Island." },
      { property: "og:title", content: "Roofing Services — RoofCraft NZ" },
      { property: "og:description", content: "Full-service roofing across Aotearoa — from architectural new builds to coastal re-roofs." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: Home,
    title: "New Roof Installation",
    desc: "Long-run steel, standing seam, and architectural profiles for new residential and architectural builds.",
    features: ["COLORSTEEL® endura® & maxx®", "Standing seam & tray systems", "Structural sign-off & consents", "Design-stage collaboration"],
  },
  {
    icon: Layers,
    title: "Re-Roofing",
    desc: "Replace tired iron, tile, or asbestos roofs with modern, weather-tight systems.",
    features: ["Free on-site assessment", "Complete strip & dispose", "Upgraded insulation & underlay", "Minimal disruption to your home"],
  },
  {
    icon: Wrench,
    title: "Repairs & Maintenance",
    desc: "Fast leak repairs, flashing replacement, and seasonal maintenance packages.",
    features: ["24-hour emergency response", "Leak detection & repair", "Flashing & valley replacement", "Annual maintenance plans"],
  },
  {
    icon: ShieldCheck,
    title: "Gutters & Spouting",
    desc: "Continuous seamless spouting and downpipe systems built to handle New Zealand rain.",
    features: ["Seamless continuous spouting", "Half-round & quarter-round", "Leaf guard systems", "Rainwater harvesting compatible"],
  },
  {
    icon: Sparkles,
    title: "Roof Coatings & Restoration",
    desc: "Restore and protect existing roofs with premium factory-grade elastomeric coatings.",
    features: ["Pressure wash & preparation", "Rust treatment", "Two-coat premium finish", "10-year coating warranty"],
  },
  {
    icon: HardHat,
    title: "Commercial Roofing",
    desc: "Warehouses, offices, apartments, and multi-unit developments across the upper North Island.",
    features: ["Trapezoidal & standing seam", "Membrane & torch-on systems", "Health & safety compliant", "Programmed to your schedule"],
  },
];

function ServicesPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Our services"
        title="Full-service roofing across Aotearoa."
        subtitle="From architectural new builds to weather-worn re-roofs — a single trusted team for every project."
      />

      <section className="container-x">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 60}>
              <div className="group h-full rounded-3xl bg-card border border-border/60 p-8 md:p-10 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-lift)] transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="h-14 w-14 rounded-2xl bg-mist grid place-items-center text-navy group-hover:bg-navy group-hover:text-white transition-colors">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">0{i + 1}</span>
                </div>
                <h3 className="mt-6 font-display text-3xl text-navy">{s.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{s.desc}</p>
                <ul className="mt-6 space-y-2.5">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-navy/80">
                      <CheckCircle2 className="h-4 w-4 text-sky mt-0.5 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-x mt-32">
        <Reveal>
          <div className="rounded-4xl bg-gradient-to-br from-mist to-white p-10 md:p-16 text-center">
            <h2 className="font-display text-4xl md:text-5xl text-navy text-balance max-w-2xl mx-auto">
              Not sure what your roof needs?
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Book a free on-site assessment and we'll walk you through the options — no pressure, no obligation.
            </p>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3.5 text-white hover:bg-navy-soft transition-colors">
              Book an assessment <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </section>
    </SiteLayout>
  );
}
