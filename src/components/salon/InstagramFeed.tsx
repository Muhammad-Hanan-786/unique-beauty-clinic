import { motion } from "framer-motion";
import { Instagram, ExternalLink } from "lucide-react";
import p10 from "@/assets/ig-post-10.webp";
import p11 from "@/assets/ig-post-11.webp";
import p12 from "@/assets/ig-post-12.webp";
import p13 from "@/assets/ig-post-13.webp";
import p14 from "@/assets/ig-post-14.webp";
import p15 from "@/assets/ig-post-15.webp";
import p16 from "@/assets/ig-post-16.webp";
import p17 from "@/assets/ig-post-17.webp";

const IG_HANDLE = "uniquebeautysaloon_isb";
const IG_URL = `https://www.instagram.com/${IG_HANDLE}`;

const POSTS = [
  { src: p10, caption: "70% Off — Azaadi Deal" },
  { src: p11, caption: "Princess Deals — Rs. 1999" },
  { src: p12, caption: "One Tone Dye — from Rs. 4,999" },
  { src: p13, caption: "12th Anniversary — Free Threading" },
  { src: p14, caption: "12th Anniversary — 70% Off Highlights" },
  { src: p15, caption: "70% Off — X-Tenso" },
  { src: p16, caption: "70% Off — Brazilian Keratin" },
  { src: p17, caption: "70% Off — Hair Botox" },
];

export function InstagramFeed() {
  return (
    <section
      id="instagram"
      className="border-t border-border bg-background px-6 py-32 lg:px-10 lg:py-48"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as const }}
          className="mb-16 flex flex-wrap items-end justify-between gap-6"
        >
          <div>
            <p className="label-eyebrow">Instagram — Latest</p>
            <h2 className="mt-6 font-display text-5xl italic text-foreground md:text-7xl">
              From the feed.
            </h2>
            <p className="mt-6 max-w-md text-sm font-light text-muted-foreground">
              A living diary of transformations, editorials and studio moments.
            </p>
          </div>
          <a
            href={IG_URL}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 border border-border px-6 py-3 text-[0.65rem] uppercase tracking-[0.32em] text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <Instagram className="h-4 w-4" />
            @{IG_HANDLE}
            <ExternalLink className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
          </a>
        </motion.div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 lg:gap-4">
          {POSTS.map((p, i) => (
            <motion.div
              key={p.src}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.8,
                delay: (i % 4) * 0.06,
                ease: [0.22, 1, 0.36, 1] as const,
              }}
              className="group relative flex aspect-square items-center justify-center overflow-hidden border border-border bg-surface"
            >
              <img
                src={p.src}
                alt={p.caption}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-contain transition-transform duration-[1400ms] group-hover:scale-[1.03]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/85 via-background/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <p className="pointer-events-none absolute bottom-3 left-3 right-3 line-clamp-2 text-[0.65rem] uppercase tracking-[0.24em] text-foreground opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                {p.caption}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
