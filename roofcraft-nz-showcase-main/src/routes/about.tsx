import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, Leaf, Users } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import aboutImg from "@/assets/about.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About RoofCraft NZ — Family-Run NZ Roofers Since 2000" },
      { name: "description", content: "Meet the family behind RoofCraft NZ — 25 years of licensed craftsmanship, honest quotes, and roofs built to last." },
      { property: "og:title", content: "About RoofCraft NZ" },
      { property: "og:description", content: "A family-run team of licensed NZ roofers with a quiet obsession for getting the details right." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: Award, title: "Craftsmanship first", desc: "Every flashing folded, every fastener placed. We measure success in millimetres." },
  { icon: Users, title: "Family & local", desc: "Founded in Devonport in 2000. Still owned and run by the Wilson family." },
  { icon: Leaf, title: "Built to last", desc: "Long-life materials, honest guarantees, and roofs designed for New Zealand's climate." },
];

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Our story"
        title="Three generations. One promise."
        subtitle="A family-run team of licensed roofers who treat every project like it belongs to us."
      />

      <section className="container-x">
        <Reveal>
          <div className="rounded-4xl overflow-hidden aspect-[16/9] md:aspect-[21/9]">
            <img src={aboutImg} alt="Close-up of modern metal roof detail" className="h-full w-full object-cover" loading="lazy" />
          </div>
        </Reveal>
      </section>

      <section className="container-x mt-24 grid gap-12 md:grid-cols-12">
        <Reveal className="md:col-span-5">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Est. 2000</div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl text-navy text-balance">
            From a Devonport garage to award-winning NZ roofers.
          </h2>
        </Reveal>
        <Reveal delay={120} className="md:col-span-7 space-y-5 text-muted-foreground leading-relaxed">
          <p>
            RoofCraft was started in 2000 by Tom Wilson, a third-generation roofer who
            was frustrated by the corner-cutting he saw across the industry. His idea
            was simple: quote fairly, install brilliantly, and stand behind the work.
          </p>
          <p>
            Twenty-five years later we're still a family business. Tom's sons, Ben and
            Jack, now lead the crew — but the standard is unchanged. We take on fewer
            jobs a year than most competitors, and we won't hand a roof over until
            every detail is right.
          </p>
          <p>
            Today RoofCraft works across the upper North Island — from architectural
            new builds in Auckland to rural farmhouses in the Waikato — with a
            reputation built one satisfied homeowner at a time.
          </p>
        </Reveal>
      </section>

      <section className="container-x mt-32">
        <div className="grid gap-5 md:grid-cols-3">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 80}>
              <div className="rounded-3xl bg-card border border-border/60 p-8 shadow-[var(--shadow-soft)] h-full">
                <div className="h-12 w-12 rounded-2xl bg-mist grid place-items-center text-navy">
                  <v.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 font-display text-2xl text-navy">{v.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-x mt-32">
        <div className="rounded-4xl bg-gradient-to-br from-navy to-navy-soft text-white p-10 md:p-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { v: 25, s: "+", l: "Years trading" },
              { v: 1200, s: "+", l: "Roofs delivered" },
              { v: 22, s: "", l: "Team members" },
              { v: 15, s: "yr", l: "Warranty" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-4xl md:text-5xl">
                  <Counter to={s.v} suffix={s.s} />
                </div>
                <div className="mt-2 text-xs uppercase tracking-[0.15em] text-white/60">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x mt-24 text-center">
        <Reveal>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3.5 text-white hover:bg-navy-soft transition-colors">
            Work with us <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </section>
    </SiteLayout>
  );
}
