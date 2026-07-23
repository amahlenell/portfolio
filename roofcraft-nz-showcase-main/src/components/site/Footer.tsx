import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-32 bg-navy text-white/85">
      <div className="container-x py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5">
              <div className="h-10 w-10 rounded-xl bg-white/10 grid place-items-center">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 12 12 4l9 8" />
                  <path d="M5 10v10h14V10" />
                </svg>
              </div>
              <div>
                <div className="font-display text-xl">RoofCraft NZ</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-white/50">Aotearoa</div>
              </div>
            </div>
            <p className="mt-6 max-w-md text-white/70 leading-relaxed">
              Award-winning roofing craftsmanship for New Zealand homes. From coastal
              baches to Auckland villas — built to weather Aotearoa.
            </p>
            <div className="mt-8 flex flex-col gap-3 text-sm">
              <a href="tel:+6491234567" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
                <Phone className="h-4 w-4" /> 09 123 4567
              </a>
              <a href="mailto:hello@roofcraft.nz" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
                <Mail className="h-4 w-4" /> hello@roofcraft.nz
              </a>
              <div className="flex items-center gap-3 text-white/80">
                <MapPin className="h-4 w-4" /> 42 Queen Street, Auckland 1010
              </div>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="text-xs uppercase tracking-[0.2em] text-white/50">Company</div>
            <ul className="mt-5 space-y-3 text-sm">
              <li><Link to="/about" className="hover:text-white text-white/75">About Us</Link></li>
              <li><Link to="/projects" className="hover:text-white text-white/75">Our Projects</Link></li>
              <li><Link to="/services" className="hover:text-white text-white/75">Services</Link></li>
              <li><Link to="/contact" className="hover:text-white text-white/75">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="text-xs uppercase tracking-[0.2em] text-white/50">Newsletter</div>
            <p className="mt-5 text-sm text-white/70">
              Seasonal roofing tips and project stories, straight to your inbox.
            </p>
            <form className="mt-4 flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                required
                placeholder="your@email.co.nz"
                className="flex-1 rounded-full bg-white/8 border border-white/15 px-4 py-2.5 text-sm placeholder:text-white/40 focus:outline-none focus:border-white/40"
              />
              <button className="rounded-full bg-white text-navy px-5 py-2.5 text-sm font-medium hover:bg-white/90 transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 text-xs text-white/50">
          <div>© {new Date().getFullYear()} RoofCraft NZ Limited. Licensed Building Practitioner.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Warranty</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
