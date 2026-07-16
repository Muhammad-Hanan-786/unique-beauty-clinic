import { Instagram, Facebook } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Logo } from "@/components/salon/Logo";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background px-6 pb-24 pt-16 md:pb-16 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-4">
          <div>
            <Logo imgClassName="h-20 w-auto" />
            <p className="mt-4 text-[0.6rem] uppercase tracking-[0.4em] text-primary">Salon · Islamabad</p>
            <p className="mt-6 max-w-xs text-sm font-light text-muted-foreground">
              Luxury hair, bridal and beauty rituals in G-9 Markaz, Islamabad.
            </p>
          </div>


          <div>
            <p className="label-eyebrow">Explore</p>
            <ul className="mt-6 space-y-3 text-sm text-foreground/80">
              <li><Link to="/about" className="hover:text-primary">About</Link></li>
              <li><Link to="/services" className="hover:text-primary">Services</Link></li>
              <li><Link to="/pricing" className="hover:text-primary">Pricing</Link></li>
              <li><Link to="/bridal" className="hover:text-primary">Bridal</Link></li>
              <li><Link to="/gallery" className="hover:text-primary">Gallery</Link></li>
              <li><Link to="/team" className="hover:text-primary">Team</Link></li>
              <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
            </ul>
          </div>

          <div>
            <p className="label-eyebrow">Follow</p>
            <ul className="mt-6 space-y-3 text-sm text-foreground/80">
              <li>
                <a href="https://www.instagram.com/uniquebeautysaloon_isb" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-primary">
                  <Instagram className="h-4 w-4" /> Instagram
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/uniquebeauty221" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-primary">
                  <Facebook className="h-4 w-4" /> Facebook
                </a>
              </li>
              <li>
                <a href="https://www.tiktok.com/@uniquebeautysaloon_isb" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-primary">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.94a8.16 8.16 0 0 0 4.77 1.52V7a4.85 4.85 0 0 1-1.84-.31z"/></svg>
                  TikTok
                </a>
              </li>
              <li><a href="https://wa.me/923185697460" className="hover:text-primary">WhatsApp</a></li>
              <li><a href="tel:+923185697460" className="hover:text-primary">+92 318 5697460</a></li>
            </ul>
          </div>

          <div>
            <p className="label-eyebrow">Newsletter</p>
            <p className="mt-6 text-sm font-light text-muted-foreground">
              Quiet dispatches on new services, seasonal editorials and studio moments.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="mt-4 flex border-b border-border">
              <input type="email" placeholder="Your email" className="min-w-0 flex-1 bg-transparent py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none" />
              <button className="shrink-0 pl-3 text-[0.65rem] uppercase tracking-[0.32em] text-primary hover:text-foreground">Join →</button>
            </form>
          </div>
        </div>

        <div className="hairline mt-16" />
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 text-[0.65rem] uppercase tracking-[0.28em] text-muted-foreground">
          <p>© {new Date().getFullYear()} Unique Beauty Salon</p>
          <p>Designed with quiet luxury · Islamabad</p>
        </div>
      </div>
    </footer>
  );
}
