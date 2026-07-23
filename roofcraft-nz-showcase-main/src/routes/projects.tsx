import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import heroImg from "@/assets/hero.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — RoofCraft NZ" },
      { name: "description", content: "A selection of recent roofing projects across Auckland, Waikato, Tauranga, and rural New Zealand." },
      { property: "og:title", content: "RoofCraft NZ Projects" },
      { property: "og:description", content: "Recent metal roofing, re-roofing, and architectural projects across Aotearoa." },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: ProjectsPage,
});

const projects = [
  { img: project2, title: "Piha Coastal Retreat", cat: "New Build", loc: "West Auckland", year: "2024" },
  { img: project3, title: "Grey Lynn Villa", cat: "Re-Roof", loc: "Central Auckland", year: "2024" },
  { img: project4, title: "Waikato Farmhouse", cat: "Rural", loc: "Cambridge", year: "2023" },
  { img: project1, title: "Devonport Bungalow", cat: "Standing Seam", loc: "North Shore", year: "2024" },
  { img: heroImg, title: "Karekare Architectural", cat: "New Build", loc: "West Auckland", year: "2023" },
  { img: project3, title: "Mt Eden Character Home", cat: "Re-Roof", loc: "Central Auckland", year: "2023" },
];

const filters = ["All", "New Build", "Re-Roof", "Rural", "Standing Seam"] as const;

function ProjectsPage() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const visible = active === "All" ? projects : projects.filter((p) => p.cat === active);

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Recent work"
        title="Roofs we're proud of."
        subtitle="A snapshot of recent installations across the upper North Island."
      />

      <section className="container-x">
        <Reveal>
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`rounded-full px-5 py-2 text-sm transition-all ${
                  active === f
                    ? "bg-navy text-white shadow-[var(--shadow-soft)]"
                    : "bg-mist text-navy/70 hover:bg-mist/70"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((p, i) => (
            <Reveal key={`${p.title}-${p.year}`} delay={i * 60}>
              <div className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-3xl aspect-[4/5]">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
                  <div className="absolute top-4 left-4 rounded-full glass px-3 py-1 text-xs text-navy">
                    {p.cat}
                  </div>
                </div>
                <div className="mt-4 flex items-start justify-between">
                  <div>
                    <h3 className="font-display text-xl text-navy">{p.title}</h3>
                    <div className="text-sm text-muted-foreground mt-0.5">{p.loc}</div>
                  </div>
                  <div className="text-xs text-muted-foreground pt-1">{p.year}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
