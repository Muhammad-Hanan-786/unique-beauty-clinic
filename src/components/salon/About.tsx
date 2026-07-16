import { motion } from "framer-motion";

const reveal = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] as const },
};

const stats = [
  { value: "2000+", label: "Happy Clients" },
  { value: "4.6★", label: "Google Rating" },
  { value: "12+", label: "Expert Stylists" },
  { value: "100%", label: "Luxury Products" },
];

export function About() {
  return (
    <section id="about" className="relative bg-background px-6 py-32 lg:px-10 lg:py-48">
      <div className="mx-auto grid max-w-7xl gap-20 lg:grid-cols-12 lg:gap-24">
        <motion.div {...reveal} className="lg:col-span-5">
          <p className="label-eyebrow">Our Craft — 01</p>
          <h2 className="mt-8 font-display text-6xl italic leading-[0.95] text-foreground md:text-7xl lg:text-8xl">
            A studio devoted to
            <span className="text-primary"> quiet luxury.</span>
          </h2>
        </motion.div>

        <motion.div {...reveal} transition={{ ...reveal.transition, delay: 0.15 }} className="lg:col-span-7 lg:pt-8">
          <p className="max-w-xl text-lg font-light leading-relaxed text-foreground/80 md:text-xl">
            At Unique Beauty Salon, beauty is more than a service—it is a carefully crafted experience. From precision hair artistry and luxurious treatments to bridal transformations and skincare rituals, every detail is designed to celebrate individuality, elegance, and confidence.
          </p>
          <p className="mt-8 max-w-xl text-base font-light leading-relaxed text-muted-foreground">
            Our expert team combines premium imported products with years of experience to deliver timeless beauty in a refined and welcoming environment in the heart of Islamabad.
          </p>

          <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.2 + i * 0.1, ease: [0.22, 1, 0.36, 1] as const }}
              >
                <div className="hairline mb-4" />
                <p className="font-display text-4xl italic text-primary md:text-5xl">{s.value}</p>
                <p className="mt-2 text-[0.65rem] uppercase tracking-[0.28em] text-muted-foreground">
                  {s.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
