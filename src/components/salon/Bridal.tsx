import { motion } from "framer-motion";
import b1 from "@/assets/bridal-1.jpg";
import b2 from "@/assets/bridal-2.jpg";
import b3 from "@/assets/bridal-3.jpg";
import b4 from "@/assets/bridal-4.jpg";
import b5 from "@/assets/bridal-5.jpg";
import b6 from "@/assets/bridal-6.jpg";
import b7 from "@/assets/bridal-7.jpg";

const packages = [
  { name: "Engagement", price: "Rs. 30,000" },
  { name: "Mehndi", price: "Rs. 25,000" },
  { name: "Nikah", price: "Rs. 45,000" },
  { name: "Barat", price: "Rs. 55,000" },
  { name: "Walima", price: "Rs. 45,000" },
  { name: "Complete Bridal Package", price: "Rs. 1,80,000" },
];

const images = [
  { src: b1, alt: "Bridal look 1", className: "md:col-span-3 aspect-[4/5]" },
  { src: b2, alt: "Bridal look 2", className: "md:col-span-3 aspect-[4/5]" },
  { src: b3, alt: "Bridal look 3", className: "md:col-span-2 aspect-[4/5]" },
  { src: b4, alt: "Bridal look 4", className: "md:col-span-2 aspect-[4/5]" },
  { src: b5, alt: "Bridal look 5", className: "md:col-span-2 aspect-[4/5]" },
  { src: b6, alt: "Bridal look 6", className: "md:col-span-3 aspect-[4/5]" },
  { src: b7, alt: "Bridal look 7", className: "md:col-span-3 aspect-[4/5]" },
];

export function Bridal() {
  return (
    <section className="relative overflow-hidden bg-background px-6 py-32 lg:px-10 lg:py-48">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] as const }}
          className="max-w-3xl"
        >
          <p className="label-eyebrow">Bridal — 04</p>
          <h2 className="mt-6 font-display text-6xl italic leading-[0.95] text-foreground md:text-7xl lg:text-8xl">
            <span className="text-primary">Her day,</span> composed like a film.
          </h2>
        </motion.div>

        <div className="mt-20 grid gap-4 md:grid-cols-6">
          {images.map((img, i) => (
            <motion.div
              key={img.src + i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as const }}
              className={img.className}
            >
              <div className="h-full w-full overflow-hidden">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-full w-full object-cover transition-transform duration-[1600ms] hover:scale-105"
                  loading="lazy"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 grid gap-x-8 gap-y-4 border-t border-border pt-12 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.06 }}
              className="flex items-baseline justify-between border-b border-border py-5"
            >
              <span className="font-display text-xl italic text-foreground">{p.name}</span>
              <span className="text-sm uppercase tracking-[0.24em] text-primary">{p.price}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
