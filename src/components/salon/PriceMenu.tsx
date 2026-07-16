import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const menu: { category: string; items: { name: string; price: string }[] }[] = [
  { category: "Hair Cuts", items: [
    { name: "Signature Cut", price: "Rs. 2,000" },
    { name: "Kids Cut", price: "Rs. 1,200" },
    { name: "Fringe", price: "Rs. 800" },
    { name: "Blow Dry", price: "Rs. 2,500" },
    { name: "Occasion Styling", price: "Rs. 4,500" },
  ]},
  { category: "Hair Treatments", items: [
    { name: "Protein Treatment", price: "Rs. 3,500" },
    { name: "Deep Conditioning", price: "Rs. 2,500" },
    { name: "Hair Spa", price: "Rs. 3,500" },
    { name: "Scalp Detox", price: "Rs. 4,000" },
  ]},
  { category: "Keratin", items: [
    { name: "Keratin — Short", price: "Rs. 18,000" },
    { name: "Keratin — Medium", price: "Rs. 25,000" },
    { name: "Keratin — Long", price: "Rs. 35,000" },
    { name: "Hair Botox", price: "Rs. 22,000" },
    { name: "Nano Plastia", price: "Rs. 28,000" },
  ]},
  { category: "Hair Color", items: [
    { name: "Root Touch-Up", price: "Rs. 5,000" },
    { name: "Global Color", price: "Rs. 8,000" },
    { name: "Fashion Color", price: "Rs. 12,000" },
  ]},
  { category: "Highlights", items: [
    { name: "Cap Highlights", price: "Rs. 8,000" },
    { name: "Foil Highlights", price: "Rs. 12,000" },
    { name: "Full Head Highlights", price: "Rs. 18,000" },
  ]},
  { category: "Balayage", items: [
    { name: "Partial Balayage", price: "Rs. 15,000" },
    { name: "Full Balayage", price: "Rs. 22,000" },
    { name: "Ombre", price: "Rs. 15,000" },
  ]},
  { category: "Waxing", items: [
    { name: "Upper Lip", price: "Rs. 300" },
    { name: "Full Arms", price: "Rs. 1,200" },
    { name: "Full Legs", price: "Rs. 1,800" },
    { name: "Full Body", price: "Rs. 5,500" },
  ]},
  { category: "Threading", items: [
    { name: "Eyebrows", price: "Rs. 200" },
    { name: "Upper Lip", price: "Rs. 150" },
    { name: "Full Face", price: "Rs. 800" },
  ]},
  { category: "Facials", items: [
    { name: "Signature Facial", price: "Rs. 2,000" },
    { name: "Hydra Facial", price: "Rs. 6,500" },
    { name: "Gold Facial", price: "Rs. 5,000" },
    { name: "Anti-Aging Facial", price: "Rs. 7,000" },
  ]},
  { category: "Body Treatments", items: [
    { name: "Body Polish", price: "Rs. 3,500" },
    { name: "Body Whitening", price: "Rs. 5,500" },
    { name: "Full Body Massage", price: "Rs. 4,500" },
  ]},
  { category: "Bridal Makeup", items: [
    { name: "Engagement", price: "Rs. 30,000" },
    { name: "Mehndi", price: "Rs. 25,000" },
    { name: "Nikah", price: "Rs. 45,000" },
    { name: "Barat", price: "Rs. 55,000" },
    { name: "Walima", price: "Rs. 45,000" },
  ]},
  { category: "Nails", items: [
    { name: "Gel Extensions", price: "Rs. 8,000" },
    { name: "Acrylic Extensions", price: "Rs. 8,500" },
    { name: "Refill", price: "Rs. 5,500" },
    { name: "Nail Art", price: "Rs. 500 / nail" },
  ]},
  { category: "Pedicure", items: [
    { name: "Classic Pedicure", price: "Rs. 2,500" },
    { name: "Luxury Pedicure", price: "Rs. 4,500" },
    { name: "Paraffin Pedicure", price: "Rs. 5,000" },
  ]},
  { category: "Manicure", items: [
    { name: "Classic Manicure", price: "Rs. 2,000" },
    { name: "Luxury Manicure", price: "Rs. 3,500" },
    { name: "Paraffin Manicure", price: "Rs. 4,500" },
  ]},
  { category: "Lashes", items: [
    { name: "Classic Set", price: "Rs. 8,000" },
    { name: "Hybrid Set", price: "Rs. 10,000" },
    { name: "Volume Set", price: "Rs. 12,000" },
    { name: "Lash Lift & Tint", price: "Rs. 5,000" },
  ]},
  { category: "Tattoos", items: [
    { name: "Small Henna", price: "Rs. 500" },
    { name: "Bridal Mehndi — Hands", price: "Rs. 8,000" },
    { name: "Full Bridal Mehndi", price: "Rs. 15,000" },
  ]},
];

export function PriceMenu() {
  const [q, setQ] = useState("");
  const filtered = useMemo(() => {
    if (!q.trim()) return menu;
    const s = q.toLowerCase();
    return menu
      .map((c) => ({ ...c, items: c.items.filter((i) => i.name.toLowerCase().includes(s) || c.category.toLowerCase().includes(s)) }))
      .filter((c) => c.items.length);
  }, [q]);

  return (
    <section className="border-t border-border bg-surface/40 px-6 py-32 lg:px-10 lg:py-48">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <p className="label-eyebrow">Price Menu — 03</p>
          <h2 className="mt-6 font-display text-5xl italic text-foreground md:text-6xl">
            The complete menu.
          </h2>
          <p className="mt-6 max-w-xl text-base font-light text-muted-foreground">
            Search a treatment or expand a category. All prices in Pakistani Rupees.
          </p>
        </motion.div>

        <div className="mt-12 flex items-center gap-3 border border-border bg-background px-4 py-3">
          <Search className="h-4 w-4 text-primary" />
          <Input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search services…"
            className="border-0 bg-transparent p-0 text-base placeholder:text-muted-foreground/60 focus-visible:ring-0"
          />
        </div>

        <Accordion type="multiple" className="mt-8">
          {filtered.map((c) => (
            <AccordionItem key={c.category} value={c.category} className="border-border">
              <AccordionTrigger className="py-6 font-display text-xl italic text-foreground hover:text-primary hover:no-underline md:text-2xl">
                {c.category}
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-3 pb-4">
                  {c.items.map((i) => (
                    <div key={i.name} className="flex items-baseline justify-between gap-4">
                      <span className="text-sm font-light text-foreground/80">{i.name}</span>
                      <span className="text-sm text-primary">{i.price}</span>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
