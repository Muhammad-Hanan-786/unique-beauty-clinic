import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Hero } from "@/components/salon/Hero";
import { About } from "@/components/salon/About";
import { ServicesGrid } from "@/components/salon/ServicesGrid";
import { Testimonials } from "@/components/salon/Testimonials";
import { InstagramFeed } from "@/components/salon/InstagramFeed";
import banner5 from "@/assets/banner_5.webp";
import banner3 from "@/assets/banner_3.webp";
import bridalHero from "@/assets/bridal-1.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Unique Beauty Salon — Where Beauty Becomes Art | Islamabad" },
      {
        name: "description",
        content:
          "Luxury hair, bridal, makeup and skincare in G-9 Markaz, Islamabad. Precision cuts, balayage, keratin, bridal packages & hydra facials.",
      },
      { property: "og:title", content: "Unique Beauty Salon — Where Beauty Becomes Art | Islamabad" },
      {
        property: "og:description",
        content: "Luxury hair, bridal, makeup and skincare in G-9 Markaz, Islamabad. Precision cuts, balayage, keratin, bridal packages & hydra facials.",
      },
      { property: "og:url", content: "https://uniquebeautyclinic.com/" },
      { property: "og:image", content: banner3 },
      { name: "twitter:image", content: banner3 },
    ],
    links: [
      { rel: "canonical", href: "https://uniquebeautyclinic.com/" },
      { rel: "preload", as: "image", href: banner5, fetchPriority: "high" },
    ],
  }),
});

function Index() {
  return (
    <>
      <Hero />

      {/* In this issue — magazine strip */}
      <section className="border-y border-border bg-surface/40">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-border md:grid-cols-4">
          {[
            { n: "N°01", label: "Services", to: "/services" as const },
            { n: "N°02", label: "Bridal", to: "/bridal" as const },
            { n: "N°03", label: "Gallery", to: "/gallery" as const },
            { n: "N°04", label: "Contact", to: "/contact" as const },
          ].map((it) => (
            <Link
              key={it.n}
              to={it.to}
              className="group flex items-baseline gap-3 px-6 py-6 transition-colors hover:bg-background/40"
            >
              <span className="numeral text-sm">{it.n}</span>
              <span className="text-[0.7rem] uppercase tracking-[0.32em] text-foreground/80 group-hover:text-primary">
                {it.label}
              </span>
            </Link>
          ))}
        </div>
      </section>

      <About />

      <section className="border-t border-border bg-background px-6 py-32 lg:px-10 lg:py-48">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as const }}
            className="mb-16 grid gap-6 lg:grid-cols-12"
          >
            <div className="lg:col-span-6">
              <p className="label-eyebrow">Services — 02</p>
              <h2 className="mt-6 font-display text-5xl italic leading-[0.95] text-foreground md:text-7xl">
                The full repertoire.
              </h2>
            </div>
            <p className="max-w-md self-end text-base font-light text-muted-foreground lg:col-span-5 lg:col-start-8">
              Twelve disciplines. One quiet standard. Explore each ritual and its complete price list.
            </p>
          </motion.div>

          <ServicesGrid limit={6} />

          <div className="mt-16 text-center">
            <Link
              to="/services"
              className="inline-flex items-center justify-center border border-primary bg-primary px-10 py-4 text-xs uppercase tracking-[0.32em] text-primary-foreground transition-all duration-500 hover:bg-transparent hover:text-primary"
            >
              All services →
            </Link>
          </div>
        </div>
      </section>

      <section className="relative border-t border-border bg-surface/40 px-6 py-32 lg:px-10 lg:py-48">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="lg:col-span-6"
          >
            <Link
              to="/bridal"
              aria-label="Explore bridal packages"
              className="group relative block aspect-[4/5] overflow-hidden"
            >
              <img
                src={bridalHero}
                alt="Bridal makeup and hair styling at Unique Beauty Salon, Islamabad"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1600ms] group-hover:scale-105"
              />
              <span className="pointer-events-none absolute inset-x-6 bottom-6 flex items-center justify-between text-xs uppercase tracking-[0.28em] text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <span>View Bridal</span>
                <span aria-hidden="true">→</span>
              </span>
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as const }}
            className="lg:col-span-6"
          >
            <p className="label-eyebrow">Bridal</p>
            <h2 className="mt-6 font-display text-5xl italic leading-[0.95] text-foreground md:text-6xl">
              <span className="text-primary">Her day,</span> composed like a film.
            </h2>
            <p className="mt-6 max-w-md text-base font-light text-muted-foreground">
              Nikah, Walima, Mehndi, Barat and Engagement — a bridal team that choreographs every ceremony with airbrush, HD or classic techniques.
            </p>
            <Link
              to="/bridal"
              className="mt-10 inline-flex border border-primary/60 px-8 py-3 text-xs uppercase tracking-[0.32em] text-primary transition-all hover:bg-primary hover:text-primary-foreground"
            >
              Explore Bridal
            </Link>
          </motion.div>
        </div>
      </section>

      <Testimonials />
      <InstagramFeed />

      <section className="relative border-t border-border bg-background px-6 py-32 lg:px-10 lg:py-40">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as const }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="label-eyebrow">Begin</p>
          <h2 className="mt-6 font-display text-5xl italic leading-[0.95] text-foreground md:text-7xl">
            Reserve your chair.
          </h2>
          <p className="mt-6 text-base font-light text-muted-foreground">
            Every appointment begins with a private consultation. Choose your ritual — we'll design the rest.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/booking"
              className="border border-primary bg-primary px-10 py-4 text-xs uppercase tracking-[0.32em] text-primary-foreground transition-all hover:bg-transparent hover:text-primary"
            >
              Book Appointment
            </Link>
            <Link
              to="/pricing"
              className="border border-foreground/30 px-10 py-4 text-xs uppercase tracking-[0.32em] text-foreground transition-all hover:border-primary hover:text-primary"
            >
              View Price Menu
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  );
}
