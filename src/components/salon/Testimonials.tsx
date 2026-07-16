import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  { name: "Sana A.", text: "The most luxurious salon experience in Islamabad. Every detail — from the space to the service — felt intentional.", rating: 5 },
  { name: "Mehak R.", text: "My bridal look was breathtaking. The team is patient, skilled, and truly artistic. Cannot recommend enough.", rating: 5 },
  { name: "Ayesha F.", text: "Best balayage I've had in Pakistan. Zara understood exactly what I wanted and elevated it.", rating: 5 },
  { name: "Hira K.", text: "Their hydra facial completely transformed my skin. The environment is calming, almost like a spa retreat.", rating: 5 },
  { name: "Nida S.", text: "Consistent quality every time. The keratin treatment lasted months and my hair felt like silk.", rating: 5 },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % reviews.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="border-t border-border bg-background px-6 py-32 lg:px-10 lg:py-48">
      <div className="mx-auto max-w-4xl text-center">
        <p className="label-eyebrow">Voices — 08</p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <div className="flex gap-1 text-primary">
            {Array.from({ length: 5 }).map((_, k) => (
              <Star key={k} className="h-4 w-4 fill-primary" />
            ))}
          </div>
          <span className="font-display text-2xl italic text-foreground">4.6</span>
          <span className="text-xs uppercase tracking-[0.28em] text-muted-foreground">Google · 2000+ Reviews</span>
        </div>

        <div className="relative mt-16 min-h-[260px] md:min-h-[220px]">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] as const }}
              className="px-4"
            >
              <p className="font-display text-2xl italic leading-relaxed text-foreground md:text-4xl">
                "{reviews[i].text}"
              </p>
              <p className="mt-8 text-[0.7rem] uppercase tracking-[0.32em] text-primary">
                — {reviews[i].name}
              </p>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex justify-center gap-2">
          {reviews.map((_, k) => (
            <button
              key={k}
              onClick={() => setI(k)}
              aria-label={`Review ${k + 1}`}
              className={`h-px w-8 transition-all ${k === i ? "bg-primary" : "bg-border"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
