import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as const }}
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <p className="label-eyebrow">{eyebrow}</p>
      <h1 className="mt-6 font-display text-5xl italic leading-[0.95] text-foreground md:text-7xl">
        {title}
      </h1>
      {intro && <p className="mt-6 text-base font-light text-muted-foreground">{intro}</p>}
    </motion.div>
  );
}
