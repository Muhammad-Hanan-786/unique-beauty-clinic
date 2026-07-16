import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import banner1 from "@/assets/banner_1.jpeg";
import banner2 from "@/assets/banner_2.webp";
import banner3 from "@/assets/banner_3.webp";
import banner4 from "@/assets/banner_4.webp";
import banner5 from "@/assets/banner_5.webp";

const banners = [banner5, banner3, banner4, banner1, banner2];

export function Hero() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    // Respect users who prefer reduced motion; otherwise rotate on a
    // gentle 5s cadence — 1.5s was aggressive on CPU and jarring visually.
    if (typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    const t = setInterval(() => setIdx((i) => (i + 1) % banners.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="home" className="relative min-h-[100svh] w-full overflow-hidden bg-background pb-16">
      <div className="absolute inset-0">
        <AnimatePresence mode="sync">
          <motion.img
            key={idx}
            src={banners[idx]}
            alt="Unique Beauty Salon Islamabad — luxury hair, bridal and beauty editorial"
            fetchPriority="high"
            className="absolute inset-0 h-full w-full object-cover object-right sm:object-center"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] as const }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        <div className="absolute inset-0 bg-background/30" />
      </div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 pt-28 text-center md:pt-32">
        <motion.h1
          initial={{ opacity: 0, y: 20, letterSpacing: "0.12em" }}
          animate={{ opacity: 1, y: 0, letterSpacing: "0.02em" }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] as const }}
          className="font-display text-[12vw] leading-[0.9] text-foreground sm:text-7xl md:text-[8rem] lg:text-[11rem]"
        >
          Unique <span className="italic text-primary">Beauty</span> Salon
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.9 }}
          className="mt-8 flex flex-wrap items-baseline justify-center gap-x-[0.28em] px-4 font-display text-[6vw] italic leading-[1.15] text-foreground/90 sm:text-4xl md:mt-10 md:text-5xl lg:text-6xl"
          aria-label="Where beauty becomes art."
        >
          {"Where beauty becomes art.".split(" ").map((word, wi) => (
            <span key={word + wi} className="inline-flex overflow-hidden whitespace-nowrap">
              {Array.from(word).map((ch, ci) => {
                // Cumulative character index across words for a smooth typewriter cadence.
                const priorChars = "Where beauty becomes art."
                  .split(" ")
                  .slice(0, wi)
                  .reduce((n, w) => n + w.length, 0);
                const idx = priorChars + ci;
                return (
                  <motion.span
                    key={ch + ci}
                    initial={{ opacity: 0, y: "0.6em", rotateX: -80, filter: "blur(6px)" }}
                    animate={{ opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" }}
                    transition={{
                      duration: 0.55,
                      delay: 1.1 + idx * 0.045,
                      ease: [0.22, 1, 0.36, 1] as const,
                    }}
                    style={{ transformOrigin: "50% 100%" }}
                    className="inline-block"
                  >
                    {ch}
                  </motion.span>
                );
              })}
            </span>
          ))}
          <motion.span
            aria-hidden
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut", delay: 2.4 }}
            className="ml-1 inline-block h-[0.9em] w-[2px] translate-y-[0.1em] bg-primary"
          />
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.6, delay: 0.4 }}
          className="mt-8 max-w-xl text-sm font-light italic text-foreground/85 sm:text-base"
        >
          Step into a sanctuary of quiet luxury in the heart of Islamabad — where every ritual is crafted just for you.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.6, delay: 0.55 }}
          className="mt-6 max-w-xl text-xs font-light tracking-[0.28em] text-foreground/85 sm:text-sm"
        >
          LUXURY HAIR · BRIDAL · MAKEUP · BEAUTY RITUALS
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4"
        >
          <Link
            to="/booking"
            className="btn-3d border border-primary bg-primary px-10 py-4 text-xs uppercase tracking-[0.32em] text-primary-foreground"
          >
            Book Appointment
          </Link>
          <a
            href="https://wa.me/923185697460"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-foreground/30 px-10 py-4 text-xs uppercase tracking-[0.32em] text-foreground transition-all duration-500 hover:border-primary hover:text-primary"
          >
            Chat on WhatsApp
          </a>
        </motion.div>

      </div>

    </section>
  );
}
