import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { CheckCircle2, Mail, MapPin, Phone } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — RoofCraft NZ" },
      { name: "description", content: "Get in touch for a free on-site roofing assessment. Response within 24 hours across Auckland and the upper North Island." },
      { property: "og:title", content: "Contact RoofCraft NZ" },
      { property: "og:description", content: "Free on-site quotes. Response within 24 hours." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Get in touch"
        title="Let's talk about your roof."
        subtitle="Free on-site assessment. Fixed-price quotes. Response within 24 hours."
      />

      <section className="container-x">
        <div className="grid gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-5 space-y-6">
            <div className="rounded-3xl bg-card border border-border/60 p-8 shadow-[var(--shadow-soft)]">
              <h3 className="font-display text-2xl text-navy">Contact details</h3>
              <div className="mt-6 space-y-4 text-sm">
                <a href="tel:+6491234567" className="flex items-start gap-4 group">
                  <div className="h-10 w-10 rounded-xl bg-mist grid place-items-center text-navy shrink-0">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground">Phone</div>
                    <div className="font-medium text-navy group-hover:underline">09 123 4567</div>
                  </div>
                </a>
                <a href="mailto:hello@roofcraft.nz" className="flex items-start gap-4 group">
                  <div className="h-10 w-10 rounded-xl bg-mist grid place-items-center text-navy shrink-0">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground">Email</div>
                    <div className="font-medium text-navy group-hover:underline">hello@roofcraft.nz</div>
                  </div>
                </a>
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-xl bg-mist grid place-items-center text-navy shrink-0">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground">Studio</div>
                    <div className="font-medium text-navy">42 Queen Street</div>
                    <div className="text-muted-foreground">Auckland 1010, NZ</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-gradient-to-br from-navy to-navy-soft p-8 text-white">
              <h3 className="font-display text-2xl">Trading hours</h3>
              <div className="mt-6 space-y-2 text-sm text-white/85">
                <div className="flex justify-between border-b border-white/10 pb-2"><span>Mon – Fri</span><span>7:00 – 17:00</span></div>
                <div className="flex justify-between border-b border-white/10 pb-2"><span>Saturday</span><span>8:00 – 14:00</span></div>
                <div className="flex justify-between"><span>Sunday</span><span>Closed</span></div>
              </div>
              <div className="mt-6 pt-6 border-t border-white/10 text-xs text-white/60">
                Emergency leak repairs available 24/7 for existing clients.
              </div>
            </div>
          </Reveal>

          <Reveal delay={120} className="md:col-span-7">
            <div className="rounded-3xl bg-card border border-border/60 p-8 md:p-10 shadow-[var(--shadow-soft)]">
              {sent ? (
                <div className="text-center py-12">
                  <div className="mx-auto h-14 w-14 rounded-2xl bg-sky/15 grid place-items-center text-sky">
                    <CheckCircle2 className="h-7 w-7" />
                  </div>
                  <h3 className="mt-6 font-display text-3xl text-navy">Thanks — we're on it.</h3>
                  <p className="mt-3 text-muted-foreground">We'll be in touch within 24 hours to arrange your free on-site assessment.</p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-5">
                  <h3 className="font-display text-2xl text-navy">Request a free quote</h3>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Full name" name="name" required />
                    <Field label="Phone" name="phone" type="tel" required />
                  </div>
                  <Field label="Email" name="email" type="email" required />
                  <Field label="Property address" name="address" placeholder="Street, suburb, city" />
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-[0.15em] text-muted-foreground">Service required</label>
                    <select
                      required
                      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-sky focus:ring-4 focus:ring-sky/10 transition"
                      defaultValue=""
                    >
                      <option value="" disabled>Select a service…</option>
                      <option>New roof installation</option>
                      <option>Re-roofing</option>
                      <option>Repairs & maintenance</option>
                      <option>Gutters & spouting</option>
                      <option>Roof coating</option>
                      <option>Commercial project</option>
                      <option>Other / not sure</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-[0.15em] text-muted-foreground">Tell us about your project</label>
                    <textarea
                      rows={4}
                      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-sky focus:ring-4 focus:ring-sky/10 transition"
                      placeholder="Rough timing, roof size, materials you're considering…"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-navy px-8 py-3.5 text-white font-medium hover:bg-navy-soft transition-colors shadow-[var(--shadow-soft)]"
                  >
                    Send enquiry
                  </button>
                  <p className="text-xs text-muted-foreground">By submitting you agree to our friendly follow-up — never spam.</p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({ label, name, type = "text", required, placeholder }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div className="space-y-2">
      <label htmlFor={name} className="text-xs uppercase tracking-[0.15em] text-muted-foreground">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-sky focus:ring-4 focus:ring-sky/10 transition"
      />
    </div>
  );
}
