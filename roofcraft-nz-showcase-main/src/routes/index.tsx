import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  ChevronDown,
  Clock,
  Hammer,
  HardHat,
  Home,
  Layers,
  Quote,
  ShieldCheck,
  Sparkles,
  Star,
  Wrench,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import heroImg from "@/assets/hero.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RoofCraft NZ — Premium Roofing Craftsmanship" },
      { name: "description", content: "Award-winning New Zealand roofers building metal roofs, re-roofs, and gutters that weather Aotearoa. 25 years of trusted craftsmanship." },
      { property: "og:title", content: "RoofCraft NZ — Premium Roofing Craftsmanship" },
      { property: "og:description", content: "Modern metal roofs, re-roofs, and gutter systems built to weather Aotearoa." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <SiteLayout>
      <Hero />
      <Stats />
      <Services />
      <Projects />
      <WhyUs />
      <Process />
      <Testimonials />
      <FAQ />
      <CTA />
    </SiteLayout>
  );
}

function Hero() {
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative -mt-24 min-h-[92vh] overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{ transform: `translate3d(0, ${offset * 0.25}px, 0)` }}
      >
        <img
          src={heroImg}
          alt="Modern New Zealand home with dark metal roof at dusk"
          width={1600}
          height={1100}
          className="h-[110%] w-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, oklch(0.99 0.003 240 / 0.75) 0%, oklch(0.99 0.003 240 / 0.25) 30%, oklch(0.24 0.06 258 / 0.45) 100%)" }} />
      </div>

      <div className="container-x relative pt-40 pb-24 md:pt-48 md:pb-32">
        <div className="grid gap-16 md:grid-cols-12 items-end">
          <div className="md:col-span-8">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-navy/80">
                <span className="h-1.5 w-1.5 rounded-full bg-sky" />
                Trusted NZ Roofers since 2000
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="mt-6 font-display text-5xl md:text-7xl lg:text-8xl leading-[1.02] text-navy text-balance">
                Roofs built to weather <span className="gradient-text">Aotearoa</span>.
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 max-w-xl text-lg text-navy/70 leading-relaxed">
                From coastal baches in the Bay to Auckland villas — RoofCraft delivers
                premium metal roofing crafted by licensed builders who know New Zealand
                weather inside and out.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3.5 text-white shadow-[var(--shadow-lift)] hover:bg-navy-soft transition-all hover:-translate-y-0.5"
                >
                  Get a Free Quote
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 rounded-full glass px-6 py-3.5 text-navy hover:bg-white/90 transition-all"
                >
                  View our work
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={400} className="md:col-span-4">
            <div className="glass rounded-3xl p-6 space-y-5">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-sky text-sky" />
                ))}
                <span className="ml-2 text-sm font-medium text-navy">4.9 / 5</span>
              </div>
              <p className="text-sm text-navy/80 leading-relaxed">
                "The team re-roofed our Ponsonby villa in just eight days —
                immaculate finish, tidy crew, no surprises."
              </p>
              <div className="flex items-center gap-3 pt-3 border-t border-navy/10">
                <div className="h-9 w-9 rounded-full bg-gradient-to-br from-sky to-navy grid place-items-center text-white text-xs font-medium">
                  MH
                </div>
                <div>
                  <div className="text-sm font-medium text-navy">Marama H.</div>
                  <div className="text-xs text-muted-foreground">Ponsonby, Auckland</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-24 flex justify-center">
          <div className="flex flex-col items-center gap-2 text-navy/50 text-xs uppercase tracking-[0.2em]">
            Scroll
            <ChevronDown className="h-4 w-4 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { value: 1200, suffix: "+", label: "Roofs installed" },
    { value: 25, suffix: " yrs", label: "In the trade" },
    { value: 98, suffix: "%", label: "Client satisfaction" },
    { value: 15, suffix: " yr", label: "Workmanship warranty" },
  ];
  return (
    <section className="container-x -mt-8 relative z-10">
      <Reveal>
        <div className="glass rounded-3xl grid grid-cols-2 md:grid-cols-4 divide-x divide-navy/10 overflow-hidden">
          {stats.map((s) => (
            <div key={s.label} className="p-6 md:p-8 text-center">
              <div className="font-display text-4xl md:text-5xl text-navy">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-xs md:text-sm uppercase tracking-[0.15em] text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

const services = [
  { icon: Home, title: "New Roof Installation", desc: "Long-run steel, standing seam, and architectural profiles for new builds." },
  { icon: Layers, title: "Re-Roofing", desc: "Replace tired iron or tile with modern, weather-tight systems." },
  { icon: Wrench, title: "Repairs & Maintenance", desc: "Fast leak repairs, flashing, and seasonal maintenance packages." },
  { icon: ShieldCheck, title: "Gutters & Spouting", desc: "Continuous spouting and downpipe systems that handle NZ rain." },
  { icon: Sparkles, title: "Roof Coatings", desc: "Restore and protect existing roofs with premium factory-grade coatings." },
  { icon: HardHat, title: "Commercial Roofing", desc: "Warehouses, offices, and multi-unit developments across the North Island." },
];

function Services() {
  return (
    <section className="container-x mt-32">
      <div className="grid md:grid-cols-12 gap-10 items-end mb-14">
        <Reveal className="md:col-span-7">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">What we do</div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl text-navy text-balance">
            Craftsmanship for every roof in Aotearoa.
          </h2>
        </Reveal>
        <Reveal delay={100} className="md:col-span-5">
          <p className="text-muted-foreground leading-relaxed">
            Whether you're replacing an aging tile roof or specifying architectural
            standing seam for a new build, our team delivers work that stands up to
            wind, sun, and salt spray.
          </p>
        </Reveal>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 60}>
            <div className="group h-full rounded-3xl bg-card p-8 border border-border/60 hover:border-sky/40 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-lift)] hover:-translate-y-1 transition-all duration-500">
              <div className="h-12 w-12 rounded-2xl bg-mist grid place-items-center text-navy group-hover:bg-navy group-hover:text-white transition-colors">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-6 font-display text-2xl text-navy">{s.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              <div className="mt-6 inline-flex items-center gap-1.5 text-sm text-navy/70 group-hover:text-navy transition-colors">
                Learn more
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  const items = [
    { img: project2, title: "Piha Coastal Retreat", cat: "New Build · West Auckland" },
    { img: project3, title: "Grey Lynn Villa", cat: "Re-Roof · Central Auckland" },
    { img: project4, title: "Waikato Farmhouse", cat: "Rural · Cambridge" },
    { img: project1, title: "Devonport Bungalow", cat: "Standing Seam · North Shore" },
  ];
  return (
    <section className="container-x mt-32">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Recent work</div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl text-navy text-balance">
            Featured projects.
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <Link to="/projects" className="inline-flex items-center gap-2 text-sm text-navy hover:gap-3 transition-all">
            All projects <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {items.map((p, i) => (
          <Reveal key={p.title} delay={i * 80}>
            <div className="group relative overflow-hidden rounded-3xl aspect-[4/3] cursor-pointer">
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="text-xs uppercase tracking-[0.2em] text-white/70">{p.cat}</div>
                <h3 className="mt-2 font-display text-3xl text-white">{p.title}</h3>
                <div className="mt-4 inline-flex items-center gap-2 text-sm text-white/90 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-500">
                  View case study <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

const why = [
  { icon: Award, title: "Licensed & LBP certified", desc: "Fully licensed building practitioners with membership in the RANZ." },
  { icon: ShieldCheck, title: "15-year workmanship warranty", desc: "One of the strongest workmanship guarantees in New Zealand." },
  { icon: Clock, title: "On time. On budget.", desc: "Transparent scheduling and pricing — no surprises, ever." },
  { icon: Hammer, title: "Made in NZ materials", desc: "COLORSTEEL®, Zincalume®, and locally-sourced timber trusses." },
];

function WhyUs() {
  return (
    <section className="container-x mt-32">
      <div className="rounded-4xl overflow-hidden bg-gradient-to-br from-mist to-sand p-8 md:p-16">
        <div className="grid gap-14 md:grid-cols-12 items-center">
          <Reveal className="md:col-span-5">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Why RoofCraft</div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-navy text-balance">
              A quiet obsession with getting it right.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              We're a family-run team of licensed roofers who treat every project like it
              belongs to us. Twenty-five years on, we still measure success one
              satisfied homeowner at a time.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm text-white hover:bg-navy-soft transition-colors"
            >
              Meet the team <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>

          <div className="md:col-span-7 grid gap-5 sm:grid-cols-2">
            {why.map((w, i) => (
              <Reveal key={w.title} delay={i * 80}>
                <div className="glass rounded-2xl p-6 h-full">
                  <div className="h-10 w-10 rounded-xl bg-navy grid place-items-center text-white">
                    <w.icon className="h-4 w-4" />
                  </div>
                  <h3 className="mt-5 font-display text-lg text-navy">{w.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const steps = [
  { n: "01", title: "Site visit & quote", desc: "We inspect your roof, discuss options, and provide a detailed fixed-price quote within 3 days." },
  { n: "02", title: "Design & specification", desc: "Choose profiles, colours, and materials. We handle consents and structural sign-off." },
  { n: "03", title: "Craft the roof", desc: "Our licensed crew installs with meticulous attention to flashings, fixings, and weather-tightness." },
  { n: "04", title: "Sign-off & warranty", desc: "Final inspection, code compliance certificate, and your 15-year workmanship warranty." },
];

function Process() {
  return (
    <section className="container-x mt-32">
      <div className="max-w-2xl mb-16">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">How we work</div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl text-navy text-balance">
            A calm, considered process — start to finish.
          </h2>
        </Reveal>
      </div>

      <div className="relative">
        <div className="absolute left-0 right-0 top-8 h-px bg-gradient-to-r from-transparent via-navy/20 to-transparent hidden md:block" />
        <div className="grid gap-10 md:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 100}>
              <div className="relative">
                <div className="h-16 w-16 rounded-2xl bg-white border border-border shadow-[var(--shadow-soft)] grid place-items-center font-display text-xl text-navy">
                  {s.n}
                </div>
                <h3 className="mt-6 font-display text-xl text-navy">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  { name: "James & Priya Kaur", loc: "Devonport", quote: "RoofCraft turned a stressful re-roof into the easiest reno decision we've made. Beautiful standing seam, no mess left behind." },
  { name: "Te Ariki Wilson", loc: "Tauranga", quote: "Coastal spray had eaten our old iron. The new COLORSTEEL® roof looks stunning and the warranty gives us total peace of mind." },
  { name: "Sophie Bennett", loc: "Wellington", quote: "Every tradesperson was polite, tidy, and clearly took pride in the work. Rare and appreciated." },
];

function Testimonials() {
  return (
    <section className="container-x mt-32">
      <div className="mb-14">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Kind words</div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl text-navy text-balance max-w-2xl">
            From homeowners across Aotearoa.
          </h2>
        </Reveal>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={i * 80}>
            <div className="h-full rounded-3xl bg-card border border-border/60 p-8 shadow-[var(--shadow-soft)]">
              <Quote className="h-6 w-6 text-sky" />
              <p className="mt-4 text-navy/85 leading-relaxed">"{t.quote}"</p>
              <div className="mt-6 pt-6 border-t border-border flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-sky to-navy" />
                <div>
                  <div className="text-sm font-medium text-navy">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.loc}</div>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

const faqs = [
  { q: "How long does a typical re-roof take?", a: "Most residential re-roofs are completed within 5–10 working days, depending on size, complexity, and weather." },
  { q: "What roofing materials do you use?", a: "We specialise in NZ-made COLORSTEEL® and Zincalume® long-run steel, plus architectural standing seam, tray, and tile options." },
  { q: "Do you handle building consents?", a: "Yes. We manage the full consent process where required, including structural engineering sign-off." },
  { q: "What warranty do I get?", a: "You receive a 15-year workmanship warranty from us, plus manufacturer warranties on materials — typically 20–30 years." },
  { q: "Do you service outside Auckland?", a: "We work across the upper North Island, including Waikato, Bay of Plenty, and Northland for larger projects." },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="container-x mt-32">
      <div className="grid md:grid-cols-12 gap-10">
        <Reveal className="md:col-span-5">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Questions</div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl text-navy text-balance">
            The things people ask us most.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Can't see your question? <Link to="/contact" className="text-navy underline underline-offset-4">Get in touch</Link>.
          </p>
        </Reveal>
        <div className="md:col-span-7 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 40}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className={`w-full text-left rounded-2xl border transition-all overflow-hidden ${
                    isOpen ? "bg-white border-sky/40 shadow-[var(--shadow-soft)]" : "bg-mist/50 border-transparent hover:bg-mist"
                  }`}
                >
                  <div className="flex items-center justify-between p-6">
                    <span className="font-medium text-navy">{f.q}</span>
                    <ChevronDown className={`h-4 w-4 text-navy transition-transform ${isOpen ? "rotate-180" : ""}`} />
                  </div>
                  <div
                    className="grid transition-all duration-500"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                    </div>
                  </div>
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="container-x mt-32">
      <Reveal>
        <div className="relative overflow-hidden rounded-4xl bg-navy p-10 md:p-20 text-white">
          <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-sky/30 blur-3xl float-slow" />
          <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-sky/20 blur-3xl float-slow" style={{ animationDelay: "-4s" }} />
          <div className="relative grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-8">
              <div className="text-xs uppercase tracking-[0.2em] text-white/60">Ready when you are</div>
              <h2 className="mt-3 font-display text-4xl md:text-6xl text-balance">
                Let's build a roof that lasts a generation.
              </h2>
              <p className="mt-5 text-white/70 max-w-xl leading-relaxed">
                Free on-site assessment. Fixed-price quotes. Local NZ crew.
              </p>
            </div>
            <div className="md:col-span-4 flex flex-col gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-navy px-6 py-4 font-medium hover:bg-white/90 transition-colors"
              >
                Get a Free Quote <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="tel:+6491234567"
                className="inline-flex items-center justify-center gap-2 rounded-full glass-dark text-white px-6 py-4 hover:bg-white/10 transition-colors"
              >
                Call 09 123 4567
              </a>
              <div className="flex items-center gap-2 justify-center text-xs text-white/50 mt-2">
                <CheckCircle2 className="h-3.5 w-3.5" /> Response within 24 hours
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
