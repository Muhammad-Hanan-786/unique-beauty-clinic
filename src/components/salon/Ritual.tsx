import { motion } from "framer-motion";

const pillars = [
  "Luxury Environment",
  "Professional Staff",
  "Premium Imported Products",
  "Comfortable Waiting Area",
  "Private Services",
  "Relaxing Experience",
];

export function Ritual() {
  return (
    <section className="relative border-t border-border bg-surface/50">
      <div className="grid lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4 }}
          className="relative min-h-[520px] overflow-hidden bg-background lg:min-h-[720px]"
        >
          <iframe
            src="https://www.instagram.com/reel/DTczsyPCJoB/embed/"
            title="Unique Beauty Salon — reel"
            loading="lazy"
            allow="autoplay; encrypted-media; picture-in-picture; web-share"
            allowFullScreen
            scrolling="no"
            className="absolute left-1/2 w-[min(560px,100%)] -translate-x-1/2"
            style={{ top: "-54px", height: "calc(100% + 54px + 120px)" }}
          />
        </motion.div>


        <div className="flex items-center px-6 py-24 lg:px-16 lg:py-32">
          <div>
            <p className="label-eyebrow">Ritual — 07</p>
            <motion.blockquote
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] as const }}
              className="mt-8 font-display text-4xl italic leading-tight text-foreground md:text-5xl lg:text-6xl"
            >
              "Beauty begins the moment
              <br />
              <span className="text-primary">you feel confident.</span>"
            </motion.blockquote>
            <p className="mt-10 max-w-md text-base font-light leading-relaxed text-muted-foreground">
              Every visit is composed like a chapter — quiet music, warm neutrals, imported formulas and unhurried attention. The salon is a sanctuary; you leave it, transformed.
            </p>
            <ul className="mt-12 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
              {pillars.map((p) => (
                <li key={p} className="flex items-center gap-3 text-sm text-foreground/80">
                  <span className="h-px w-6 bg-primary" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
