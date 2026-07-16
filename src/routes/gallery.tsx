import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ExternalLink, Play } from "lucide-react";
import { SectionHeading } from "@/components/salon/SectionHeading";
import { galleryCategories, galleryItems, type GalleryCategory } from "@/lib/gallery-data";
import { instagramReels } from "@/lib/instagram-reels";

export const Route = createFileRoute("/gallery")({
  component: GalleryPage,
  head: () => ({
    meta: [
      { title: "Gallery — Editorial Salon Work | Unique Beauty Salon" },
      {
        name: "description",
        content:
          "Bridal, hair, color, skin, nails and studio moments captured at Unique Beauty Salon, G-9 Markaz Islamabad.",
      },
      { property: "og:title", content: "Gallery — Unique Beauty Salon" },
      { property: "og:description", content: "Frames from the floor. Transformations and details." },
      { property: "og:url", content: "https://uniquebeautyclinic.com/gallery" },
      { property: "og:image", content: galleryItems[0].src },
      { name: "twitter:image", content: galleryItems[0].src },
    ],
    links: [{ rel: "canonical", href: "https://uniquebeautyclinic.com/gallery" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://uniquebeautyclinic.com/" },
            { "@type": "ListItem", position: 2, name: "Gallery", item: "https://uniquebeautyclinic.com/gallery" },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ImageGallery",
          name: "Unique Beauty Salon — Gallery",
          image: galleryItems.slice(0, 12).map((g) => ({
            "@type": "ImageObject",
            contentUrl: g.src,
            description: g.alt,
          })),
        }),
      },
    ],
  }),
});

function GalleryPage() {
  const [cat, setCat] = useState<(typeof galleryCategories)[number]>("All");
  const [idx, setIdx] = useState<number | null>(null);

  const items = useMemo(
    () => (cat === "All" ? galleryItems : galleryItems.filter((i) => i.category === (cat as GalleryCategory))),
    [cat],
  );

  const open = idx !== null;
  const close = () => setIdx(null);
  const next = () => setIdx((i) => (i === null ? 0 : (i + 1) % items.length));
  const prev = () => setIdx((i) => (i === null ? 0 : (i - 1 + items.length) % items.length));

  // Facade pattern: don't mount 24 Instagram iframes on page load (slow + each
  // one is ~1MB of network). Show a lightweight play-button poster; only the
  // reel the user actually clicks mounts an iframe (with autoplay). Clicking a
  // different reel unmounts the previous one — so at most one iframe exists at
  // a time, and no click ever navigates away to instagram.com.
  const [activeReel, setActiveReel] = useState<string | null>(null);
  const wrapperRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    if (!activeReel) return;
    // Unmount the active reel once it scrolls out of view
    const el = wrapperRefs.current[activeReel];
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) setActiveReel(null);
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [activeReel]);

  return (
    <section className="bg-background px-6 pb-32 pt-40 lg:px-10 lg:pt-48">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Gallery"
          title={<>Frames from the floor.</>}
          intro="A curated selection of transformations, editorials and quiet studio details."
        />


        {/* Instagram Reels */}
        <div className="mt-16">
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4 border-t border-border pt-10 sm:flex sm:justify-between">
            <div className="min-w-0">
              <p className="label-eyebrow">Chapter I — On Instagram</p>
              <h2 className="mt-4 font-display text-2xl italic text-foreground sm:text-3xl md:text-4xl">
                Latest reels from the floor.
              </h2>
            </div>
            <a
              href="https://www.instagram.com/uniquebeautysaloon_isb"
              target="_blank"
              rel="noreferrer"
              className="hidden shrink-0 items-center gap-2 text-[0.65rem] uppercase tracking-[0.32em] text-primary hover:underline md:inline-flex"
            >
              @uniquebeautysaloon_isb <ExternalLink className="h-3 w-3" />
            </a>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {instagramReels.map((reel, i) => (
              <motion.div
                key={reel.shortcode}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.7, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] as const }}
                className="border border-border bg-surface"
              >
                <div
                  ref={(el) => { wrapperRefs.current[reel.shortcode] = el; }}
                  className="relative w-full overflow-hidden bg-surface"
                  style={{ paddingBottom: "125%" }}
                >
                  {activeReel === reel.shortcode ? (
                    <iframe
                      src={`${reel.embedUrl}?autoplay=1`}
                      title={reel.caption}
                      allow="autoplay; encrypted-media; picture-in-picture; web-share"
                      allowFullScreen
                      scrolling="no"
                      className="absolute left-0 w-full"
                      style={{ top: "-54px", height: "calc(100% + 54px + 100px)" }}
                    />
                  ) : (
                    <button
                      type="button"
                      onClick={() => setActiveReel(reel.shortcode)}
                      aria-label={`Play reel: ${reel.caption}`}
                      className="group absolute inset-0 flex items-center justify-center"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-primary/5" />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                      <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-primary/40 bg-background/70 backdrop-blur transition-all group-hover:scale-110 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                        <Play className="ml-0.5 h-6 w-6 fill-current" />
                      </div>
                      <span className="absolute bottom-4 left-4 right-4 text-left text-[0.6rem] uppercase tracking-[0.28em] text-foreground/80">
                        {reel.caption}
                      </span>
                    </button>
                  )}
                </div>
                <div className="border-t border-border px-4 py-3">
                  <span className="text-[0.65rem] uppercase tracking-[0.28em] text-muted-foreground">
                    {reel.caption}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-20 border-t border-border pt-10">
          <p className="label-eyebrow">Chapter II — Archive</p>
          <h2 className="mt-4 font-display text-3xl italic text-foreground md:text-4xl">
            Studio archive.
          </h2>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {galleryCategories.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`border px-5 py-2.5 text-[0.65rem] uppercase tracking-[0.32em] transition-all ${
                cat === c
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-foreground/70 hover:border-primary hover:text-primary"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-10 grid auto-rows-[220px] grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {items.map((it, i) => (
            <motion.button
              key={`${cat}-${i}`}
              onClick={() => setIdx(i)}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: (i % 4) * 0.06, ease: [0.22, 1, 0.36, 1] as const }}
              className={`group relative overflow-hidden ${it.tall ? "row-span-2" : ""}`}
            >
              <img
                src={it.src}
                alt={it.alt}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="absolute bottom-4 left-4 text-[0.6rem] uppercase tracking-[0.32em] text-foreground opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                {it.category}
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
            <button className="absolute right-6 top-6 text-foreground" onClick={close} aria-label="Close">
              <X className="h-6 w-6" />
            </button>
            <button
              className="absolute left-6 top-1/2 -translate-y-1/2 text-foreground/70 hover:text-primary"
              onClick={(e) => { e.stopPropagation(); prev(); }}
              aria-label="Previous"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>
            <button
              className="absolute right-6 top-1/2 -translate-y-1/2 text-foreground/70 hover:text-primary"
              onClick={(e) => { e.stopPropagation(); next(); }}
              aria-label="Next"
            >
              <ChevronRight className="h-8 w-8" />
            </button>
            <motion.img
              key={idx}
              src={items[idx].src}
              alt={items[idx].alt}
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
