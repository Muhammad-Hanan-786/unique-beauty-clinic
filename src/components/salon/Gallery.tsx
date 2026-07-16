import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import banner1 from "@/assets/banner_1.jpeg";
import banner2 from "@/assets/banner_2.webp";
import banner3 from "@/assets/banner_3.webp";
import banner4 from "@/assets/banner_4.webp";
import banner5 from "@/assets/banner_5.webp";

const items = [
  { src: banner5, span: "row-span-2", label: "Hair" },
  { src: banner3, span: "", label: "Bridal" },
  { src: banner4, span: "", label: "Color" },
  { src: banner1, span: "", label: "Beauty" },
  { src: banner2, span: "row-span-2", label: "Tools" },
  { src: banner3, span: "", label: "Editorial" },
  { src: banner4, span: "", label: "Balayage" },
  { src: banner5, span: "", label: "Studio" },
];

export function Gallery() {
  const [idx, setIdx] = useState<number | null>(null);
  const open = idx !== null;
  const close = () => setIdx(null);
  const next = () => setIdx((i) => (i === null ? 0 : (i + 1) % items.length));
  const prev = () => setIdx((i) => (i === null ? 0 : (i - 1 + items.length) % items.length));

  return (
    <section id="gallery" className="border-t border-border bg-background px-6 py-32 lg:px-10 lg:py-48">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as const }}
          className="mb-16 flex flex-wrap items-end justify-between gap-6"
        >
          <div>
            <p className="label-eyebrow">Gallery — 05</p>
            <h2 className="mt-6 font-display text-5xl italic text-foreground md:text-7xl">
              Frames from the floor.
            </h2>
          </div>
          <p className="max-w-sm text-sm font-light text-muted-foreground">
            A selection of transformations, moments and details captured inside the studio.
          </p>
        </motion.div>

        <div className="grid auto-rows-[220px] grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {items.map((it, i) => (
            <motion.button
              key={i}
              onClick={() => setIdx(i)}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.9, delay: (i % 4) * 0.08, ease: [0.22, 1, 0.36, 1] as const }}
              className={`group relative overflow-hidden ${it.span}`}
            >
              <img
                src={it.src}
                alt={it.label}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="absolute bottom-4 left-4 text-[0.65rem] uppercase tracking-[0.32em] text-foreground opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                {it.label}
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open && idx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-background/95 p-4 backdrop-blur-xl"
            onClick={close}
          >
            <button className="absolute right-6 top-6 text-foreground" onClick={close}>
              <X className="h-6 w-6" />
            </button>
            <button
              className="absolute left-6 top-1/2 -translate-y-1/2 text-foreground/70 hover:text-primary"
              onClick={(e) => { e.stopPropagation(); prev(); }}
            >
              <ChevronLeft className="h-8 w-8" />
            </button>
            <button
              className="absolute right-6 top-1/2 -translate-y-1/2 text-foreground/70 hover:text-primary"
              onClick={(e) => { e.stopPropagation(); next(); }}
            >
              <ChevronRight className="h-8 w-8" />
            </button>
            <motion.img
              key={idx}
              src={items[idx].src}
              alt=""
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="max-h-[85vh] max-w-[90vw] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
