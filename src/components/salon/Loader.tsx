import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import logoAsset from "@/assets/unique-beauty-logo.png";

const WORDS = ["Welcome", "to", "Unique", "Beauty", "Salon"];

export function Loader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Respect reduced-motion — dismiss quickly for those users.
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    const t = setTimeout(() => setShow(false), reduced ? 600 : 5000);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(8px)" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] as const }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-background"
          style={{ perspective: "1400px" }}
        >
          {/* Ambient depth */}
          <motion.div
            aria-hidden
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.15, 0.45, 0.2] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,var(--color-primary)_0%,transparent_55%)] opacity-20"
          />

          {/* Logo — subtle 3D lift */}
          <motion.div
            initial={{ opacity: 0, rotateX: 25, y: 20, scale: 0.85 }}
            animate={{ opacity: 1, rotateX: 0, y: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] as const }}
            className="relative"
            style={{ transformStyle: "preserve-3d" }}
          >
            <motion.div
              aria-hidden
              animate={{ opacity: [0.25, 0.7, 0.25], scale: [0.9, 1.1, 0.9] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 -z-10 rounded-full bg-primary/30 blur-3xl"
            />
            <img
              src={logoAsset}
              alt="Unique Beauty Salon"
              className="h-28 w-auto object-contain drop-shadow-[0_10px_30px_rgba(212,175,110,0.35)] md:h-36"
            />
          </motion.div>

          {/* 3D word-by-word reveal */}
          <div
            className="mt-10 flex flex-wrap items-baseline justify-center gap-x-3 gap-y-1 px-6 text-center md:gap-x-5"
            style={{ transformStyle: "preserve-3d" }}
          >
            {WORDS.map((w, i) => {
              const accent = w === "Unique" || w === "Beauty";
              return (
                <motion.span
                  key={w + i}
                  initial={{
                    opacity: 0,
                    y: 40,
                    rotateX: -80,
                    filter: "blur(10px)",
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    rotateX: 0,
                    filter: "blur(0px)",
                  }}
                  transition={{
                    duration: 0.9,
                    delay: 0.35 + i * 0.18,
                    ease: [0.22, 1, 0.36, 1] as const,
                  }}
                  style={{ transformOrigin: "50% 100%" }}
                  className={`font-display text-4xl italic leading-none md:text-6xl lg:text-7xl ${
                    accent ? "text-primary" : "text-foreground"
                  }`}
                >
                  {w}
                </motion.span>
              );
            })}
          </div>

          {/* Eyebrow tag */}
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            animate={{ opacity: 1, letterSpacing: "0.3em" }}
            transition={{ duration: 1, delay: 1.4, ease: [0.22, 1, 0.36, 1] as const }}
            className="mt-8 text-[0.6rem] uppercase text-muted-foreground md:text-[0.7rem]"
          >
            Islamabad · Est. Studio
          </motion.p>

          {/* Progress hairline */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 2.6, delay: 0.2, ease: [0.65, 0, 0.35, 1] as const }}
            className="mt-8 h-px w-48 origin-left bg-gradient-to-r from-transparent via-primary to-transparent"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
