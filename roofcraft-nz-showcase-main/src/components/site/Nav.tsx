import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="container-x">
        <div
          className={`flex items-center justify-between rounded-2xl transition-all duration-500 ${
            scrolled ? "glass px-4 py-2.5" : "px-2 py-2"
          }`}
        >
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="relative h-9 w-9 rounded-xl bg-navy grid place-items-center overflow-hidden">
              <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 12 12 4l9 8" />
                <path d="M5 10v10h14V10" />
              </svg>
              <span className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
            </div>
            <div className="leading-tight">
              <div className="font-display text-lg font-medium tracking-tight text-navy">RoofCraft</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground -mt-0.5">Aotearoa NZ</div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                className="relative px-3.5 py-2 text-sm text-foreground/80 hover:text-navy transition-colors rounded-lg"
                activeProps={{ className: "text-navy font-medium" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+6491234567"
              className="hidden lg:flex items-center gap-2 text-sm text-navy/80 hover:text-navy transition-colors"
            >
              <Phone className="h-4 w-4" />
              09 123 4567
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 rounded-full bg-navy px-4 py-2 text-sm font-medium text-white shadow-[var(--shadow-soft)] hover:bg-navy-soft transition-colors"
            >
              Free Quote
            </Link>
          </div>

          <button
            onClick={() => setOpen((o) => !o)}
            className="md:hidden grid place-items-center h-10 w-10 rounded-xl hover:bg-mist transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-2 rounded-2xl glass p-3 animate-fade-in">
            <div className="flex flex-col">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 rounded-xl text-foreground hover:bg-mist transition-colors"
                  activeProps={{ className: "bg-mist text-navy font-medium" }}
                >
                  {l.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-xl bg-navy px-4 py-3 text-sm font-medium text-white"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
