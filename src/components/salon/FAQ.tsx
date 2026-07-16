import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "How do I book an appointment?", a: "You may book directly via the form below, call us at +92 318 5697460, or message us on WhatsApp. Bridal bookings are best made 2–4 weeks in advance." },
  { q: "Is there parking available?", a: "Yes. United Plaza offers secure parking on-site for our guests." },
  { q: "What payment methods do you accept?", a: "We accept cash, all major debit and credit cards, and bank transfers." },
  { q: "Do you accommodate children?", a: "Absolutely. We offer dedicated kids' cuts and a welcoming environment for families." },
  { q: "How far in advance should I book bridal services?", a: "We recommend booking bridal packages at least 4–6 weeks in advance to secure your preferred artist and dates." },
  { q: "Do you offer hair consultations?", a: "Yes. Complimentary 15-minute consultations are available before every color, keratin, or transformation service." },
  { q: "What are your opening hours?", a: "We are open daily, 10:00 AM to 9:00 PM, including weekends and public holidays." },
  { q: "What products do you use?", a: "We work exclusively with premium imported brands — Olaplex, Kerastase, L'Oréal Professionnel, Wella, and Dermalogica among others." },
];

export function FAQ() {
  return (
    <section className="border-t border-border bg-background px-6 py-32 lg:px-10 lg:py-48">
      <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="lg:col-span-5"
        >
          <p className="label-eyebrow">Questions — 09</p>
          <h2 className="mt-6 font-display text-5xl italic text-foreground md:text-6xl">
            Everything to know, before you arrive.
          </h2>
        </motion.div>

        <div className="lg:col-span-7">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`f-${i}`} className="border-border">
                <AccordionTrigger className="py-6 text-left font-display text-lg italic text-foreground hover:text-primary hover:no-underline md:text-xl">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-sm font-light leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
