import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Logo } from "@/components/salon/Logo";


const links = [
  { label: "Home", to: "/" as const },
  { label: "About", to: "/about" as const },
  { label: "Services", to: "/services" as const },
  { label: "Pricing", to: "/pricing" as const },
  { label: "Bridal", to: "/bridal" as const },
  { label: "Gallery", to: "/gallery" as const },
  { label: "Team", to: "/team" as const },
  { label: "Contact", to: "/contact" as const },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-border bg-background/70 py-4 backdrop-blur-xl"
            : "bg-transparent py-6"
        }`}
      >
        <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 lg:flex lg:justify-between lg:px-10">
          <Link to="/" aria-label="Unique Beauty Salon — Home" className="group flex min-w-0 items-center">
            <Logo
              linkTo={false}
              priority
              imgClassName={
                scrolled
                  ? "h-12 w-auto sm:h-14 md:h-16 lg:h-20 transition-all duration-500"
                  : "h-14 w-auto sm:h-20 md:h-24 lg:h-32 transition-all duration-500"
              }
            />
          </Link>




          <nav className="hidden items-center gap-8 lg:flex">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: true }}
                activeProps={{ className: "text-primary" }}
                inactiveProps={{ className: "text-foreground/80 hover:text-primary" }}
                className="text-[0.7rem] uppercase tracking-[0.32em] transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-3">
            <Link
              to="/booking"
              className="hidden shrink-0 border border-primary/60 px-5 py-2.5 text-[0.65rem] uppercase tracking-[0.32em] text-primary transition-all duration-500 hover:bg-primary hover:text-primary-foreground md:block"
            >
              Book
            </Link>
            <button
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className="text-foreground lg:hidden"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[60] bg-background/95 backdrop-blur-2xl"
          >
            <div className="flex h-full flex-col p-8">
              <div className="flex items-center justify-between">
                <Logo linkTo={false} imgClassName="h-10 w-auto" />
                <button aria-label="Close menu" onClick={() => setOpen(false)}>
                  <X className="h-6 w-6 text-foreground" />
                </button>
              </div>
              <nav className="mt-12 flex flex-col gap-5 overflow-y-auto">

                {links.map((l, i) => (
                  <motion.div
                    key={l.to}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                  >
                    <Link
                      to={l.to}
                      activeOptions={{ exact: true }}
                      activeProps={{ className: "text-primary" }}
                      inactiveProps={{ className: "text-foreground" }}
                      onClick={() => setOpen(false)}
                      className="font-display text-4xl italic hover:text-primary"
                    >
                      {l.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <Link
                to="/booking"
                onClick={() => setOpen(false)}
                className="mt-auto border border-primary px-6 py-4 text-center text-xs uppercase tracking-[0.32em] text-primary"
              >
                Book Appointment
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
