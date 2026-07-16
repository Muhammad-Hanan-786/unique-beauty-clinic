import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { CalendarCheck, Sparkles, Clock, ShieldCheck, Phone, MessageCircle } from "lucide-react";
import { Contact } from "@/components/salon/Contact";
import banner2 from "@/assets/banner_2.webp";

const easing = [0.22, 1, 0.36, 1] as const;

export const Route = createFileRoute("/booking")({
  component: BookingPage,
  head: () => ({
    meta: [
      { title: "Book an Appointment — Unique Beauty Salon Islamabad" },
      {
        name: "description",
        content:
          "Reserve your ritual at Unique Beauty Salon, G-9 Markaz Islamabad. Hair, bridal, skincare and nails — book online in under a minute.",
      },
      { property: "og:title", content: "Book Your Appointment — Unique Beauty Salon" },
      { property: "og:description", content: "Reserve your ritual. Hair, bridal, skincare and nails in Islamabad." },
      { property: "og:url", content: "https://uniquebeautyclinic.com/booking" },
      { property: "og:image", content: banner2 },
      { name: "twitter:image", content: banner2 },
    ],
    links: [{ rel: "canonical", href: "https://uniquebeautyclinic.com/booking" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://uniquebeautyclinic.com/" },
            { "@type": "ListItem", position: 2, name: "Book", item: "https://uniquebeautyclinic.com/booking" },
          ],
        }),
      },
    ],
  }),
});

const steps = [
  {
    n: "01",
    icon: CalendarCheck,
    title: "Share your details",
    body: "Tell us the service, preferred date and time. Takes less than a minute.",
  },
  {
    n: "02",
    icon: MessageCircle,
    title: "We confirm on WhatsApp",
    body: "Our concierge replies within business hours to lock your slot with the right artist.",
  },
  {
    n: "03",
    icon: Sparkles,
    title: "Arrive & unwind",
    body: "Every ritual begins with a private consultation and warm welcome.",
  },
];

const perks = [
  { icon: Clock, label: "Under 60 seconds" },
  { icon: ShieldCheck, label: "No prepayment" },
  { icon: Sparkles, label: "Senior artists" },
];

function BookingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border bg-background px-6 pb-20 pt-32 lg:px-10 lg:pt-40">
        {/* Animated ambient background */}
        <div className="pointer-events-none absolute inset-0 -z-0">
          <img
            src={banner2}
            alt=""
            aria-hidden
            className="h-full w-full object-cover object-left opacity-25 sm:object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" />
          <motion.div
            aria-hidden
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 0.35, scale: 1 }}
            transition={{ duration: 2.4, ease: easing }}
            className="absolute -left-24 top-16 h-80 w-80 rounded-full bg-primary/25 blur-[110px]"
          />
          <motion.div
            aria-hidden
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.25 }}
            transition={{ duration: 2.4, delay: 0.3, ease: easing }}
            className="absolute -right-20 top-32 h-72 w-72 rounded-full bg-primary/20 blur-[110px]"
          />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easing }}
            className="label-eyebrow"
          >
            Booking
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.08, ease: easing }}
            className="mt-4 max-w-4xl font-display text-4xl italic leading-[1.02] text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Reserve your <span className="text-primary">ritual.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.18, ease: easing }}
            className="mt-6 max-w-2xl text-base font-light leading-relaxed text-foreground/80 sm:text-lg"
          >
            One quiet form, one dedicated concierge. Choose a service, share a preferred window,
            and we&rsquo;ll confirm on WhatsApp within the hour.
          </motion.p>

          {/* Perk chips */}
          <motion.ul
            initial="hidden"
            animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.35 } } }}
            className="mt-8 flex flex-wrap gap-2.5"
          >
            {perks.map((p) => (
              <motion.li
                key={p.label}
                variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.5, ease: easing }}
                className="inline-flex items-center gap-2 border border-border bg-surface/50 px-4 py-2 text-[0.65rem] uppercase tracking-[0.28em] text-foreground/80 backdrop-blur"
              >
                <p.icon className="h-3.5 w-3.5 text-primary" />
                {p.label}
              </motion.li>
            ))}
          </motion.ul>

          {/* Quick actions */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: easing }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <a
              href="#booking-form"
              className="btn-3d inline-flex items-center gap-2 border border-primary bg-primary px-8 py-4 text-xs uppercase tracking-[0.32em] text-primary-foreground"
            >
              <CalendarCheck className="h-4 w-4" /> Start booking
            </a>
            <a
              href="tel:+923185697460"
              className="inline-flex items-center gap-2 border border-foreground/25 px-6 py-4 text-xs uppercase tracking-[0.32em] text-foreground transition-colors duration-500 hover:border-primary hover:text-primary"
            >
              <Phone className="h-4 w-4" /> Call studio
            </a>
            <a
              href="https://wa.me/923185697460"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-foreground/25 px-6 py-4 text-xs uppercase tracking-[0.32em] text-foreground transition-colors duration-500 hover:border-primary hover:text-primary"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-b border-border bg-surface/30 px-6 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: easing }}
            className="label-eyebrow"
          >
            How it works
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: 0.08, ease: easing }}
            className="mt-4 font-display text-3xl italic text-foreground sm:text-4xl md:text-5xl"
          >
            Three quiet steps.
          </motion.h2>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: easing }}
                whileHover={{ y: -4 }}
                className="group relative overflow-hidden border border-border bg-background/70 p-8 backdrop-blur transition-colors duration-500 hover:border-primary/60"
              >
                <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/10 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100" />
                <div className="flex items-start justify-between">
                  <span className="font-display text-sm italic text-primary">{s.n}</span>
                  <s.icon className="h-5 w-5 text-primary transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-110" />
                </div>
                <h3 className="mt-6 font-display text-2xl italic text-foreground">{s.title}</h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-muted-foreground">{s.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + info */}
      <div id="booking-form" className="scroll-mt-24">
        <Contact />
      </div>

      {/* Fine print */}
      <section className="border-t border-border bg-background px-6 py-16 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
          <p className="text-sm font-light leading-relaxed text-muted-foreground">
            Prefer to speak with the studio? Our concierge is on WhatsApp daily 10 AM – 9 PM. Bridal
            enquiries are best made 4–6 weeks in advance.
          </p>
          <Link
            to="/services"
            className="btn-3d inline-flex w-fit border border-primary bg-primary px-8 py-3 text-xs uppercase tracking-[0.32em] text-primary-foreground"
          >
            Explore services
          </Link>
        </div>
      </section>
    </>
  );
}
