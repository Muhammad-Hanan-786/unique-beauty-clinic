import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { services } from "@/lib/services-data";
import { ArrowUpRight } from "lucide-react";
import type { PointerEvent as ReactPointerEvent } from "react";

export function ServicesGrid({ limit }: { limit?: number }) {
  const list = limit ? services.slice(0, limit) : services;

  const handleMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const ry = (x - 0.5) * 14; // rotateY
    const rx = (0.5 - y) * 10; // rotateX
    el.style.setProperty("--rx", `${rx}deg`);
    el.style.setProperty("--ry", `${ry}deg`);
    el.style.setProperty("--tz", `18px`);
    el.style.setProperty("--mx", `${x * 100}%`);
    el.style.setProperty("--my", `${y * 100}%`);
  };
  const handleLeave = (e: ReactPointerEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    el.style.setProperty("--rx", `0deg`);
    el.style.setProperty("--ry", `0deg`);
    el.style.setProperty("--tz", `0px`);
  };

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {list.map((s, i) => (
        <motion.div
          key={s.slug}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.9, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] as const }}
          className="card-3d"
          onPointerMove={handleMove}
          onPointerLeave={handleLeave}
        >
          <Link
            to="/services/$slug"
            params={{ slug: s.slug }}
            className="card-3d-inner group relative block h-full border border-border bg-surface/40 transition-colors hover:border-primary/60"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={s.image}
                alt={s.title}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-110"
              />
              {s.hoverImage && (
                <img
                  src={s.hoverImage}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <span
                className="card-3d-layer absolute left-4 top-4 font-display text-sm italic text-primary"
                style={{ ["--layer" as string]: "60px" }}
              >
                {s.n}
              </span>
              <span
                className="card-3d-layer absolute right-4 top-4 rounded-full border border-primary/60 bg-background/70 px-3 py-1 text-[0.6rem] uppercase tracking-[0.28em] text-primary opacity-0 backdrop-blur transition-opacity duration-500 group-hover:opacity-100"
                style={{ ["--layer" as string]: "70px" }}
              >
                From {s.from}
              </span>
              <div className="card-3d-shine" />
            </div>
            <div
              className="card-3d-layer grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3 p-6"
              style={{ ["--layer" as string]: "30px" }}
            >
              <div className="min-w-0">
                <h3 className="truncate font-display text-2xl italic text-foreground transition-colors group-hover:text-primary">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm font-light leading-relaxed text-muted-foreground line-clamp-2">
                  {s.short}
                </p>
                <p className="mt-4 text-[0.65rem] uppercase tracking-[0.32em] text-foreground/60">
                  From {s.from}
                </p>
              </div>
              <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-primary transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:scale-125" />
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
