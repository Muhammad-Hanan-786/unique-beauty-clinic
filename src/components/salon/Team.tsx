import { motion } from "framer-motion";
import { Instagram, User } from "lucide-react";

const team = [
  { name: "Ayesha Khan", role: "Creative Director", specialty: "Bridal & Editorial" },
  { name: "Zara Malik", role: "Master Colorist", specialty: "Balayage · Fashion Color" },
  { name: "Hina Riaz", role: "Senior Hair Artist", specialty: "Cuts · Keratin" },
  { name: "Mahnoor Ali", role: "Skin Therapist", specialty: "Facials · Skincare" },
];


export function Team() {
  return (
    <section id="team" className="border-t border-border bg-background px-6 py-32 lg:px-10 lg:py-48">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-20 max-w-3xl"
        >
          <p className="label-eyebrow">Team — 06</p>
          <h2 className="mt-6 font-display text-5xl italic text-foreground md:text-7xl">
            Meet the artists.
          </h2>
          <p className="mt-6 text-base font-light text-muted-foreground">
            A studio of specialists — trained internationally, obsessed with craft.
          </p>
        </motion.div>

        <div className="grid gap-x-6 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const }}
              className="group"
            >
              <div className="relative aspect-[3/4] overflow-hidden border border-border bg-surface/60">
                <div className="flex h-full w-full items-center justify-center">
                  <User className="h-16 w-16 text-muted-foreground/30" strokeWidth={1} aria-hidden="true" />
                </div>
                <span className="absolute bottom-3 left-3 text-[0.55rem] uppercase tracking-[0.3em] text-muted-foreground/60">
                  Portrait — coming soon
                </span>
              </div>

              <div className="mt-6 flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-2xl italic text-foreground">{m.name}</h3>
                  <p className="mt-1 text-[0.65rem] uppercase tracking-[0.3em] text-primary">{m.role}</p>
                  <p className="mt-3 text-sm font-light text-muted-foreground">{m.specialty}</p>
                </div>
                <a
                  href="https://www.instagram.com/uniquebeautysaloon_isb"
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${m.name} on Instagram`}
                  className="text-foreground/60 transition-colors hover:text-primary"
                >
                  <Instagram className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
