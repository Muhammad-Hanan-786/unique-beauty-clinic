import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, Clock, MessageCircle, Send, Sparkles, Check } from "lucide-react";
import { toast } from "sonner";

const WHATSAPP_NUMBER = "923185697460";
const DISPLAY_PHONE = "+92 318 5697460";

const SERVICES = [
  "Hair Cuts & Styling",
  "Hair Treatments",
  "Keratin & Botox",
  "Hair Color & Balayage",
  "Facials & Skincare",
  "Bridal Makeup",
  "Manicure & Pedicure",
  "Nail Extensions",
  "Waxing",
  "Threading",
  "Body Treatments",
  "Eyelash Extensions",
  "Not sure — recommend for me",
];

const OCCASIONS = ["Everyday ritual", "Special event", "Bridal", "Photoshoot", "Corporate", "Other"];
const BUDGETS = ["Under Rs. 5,000", "Rs. 5,000 – 15,000", "Rs. 15,000 – 40,000", "Rs. 40,000+"];

const easing = [0.22, 1, 0.36, 1] as const;

export function Contact() {
  const [busy, setBusy] = useState(false);
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setBusy(true);
    const fd = new FormData(e.currentTarget);
    const lines = [
      "*New Consultation Request*",
      "_Unique Beauty Salon — G-9 Markaz, Islamabad_",
      "",
      `• *Name:* ${fd.get("name") || "—"}`,
      `• *Phone:* ${fd.get("phone") || "—"}`,
      `• *Email:* ${fd.get("email") || "—"}`,
      `• *Service:* ${fd.get("service") || "—"}`,
      `• *Occasion:* ${fd.get("occasion") || "—"}`,
      `• *Budget:* ${fd.get("budget") || "—"}`,
      `• *Preferred Date:* ${fd.get("date") || "—"}`,
      `• *Preferred Time:* ${fd.get("time") || "—"}`,
      "",
      `*Notes:*`,
      `${fd.get("notes") || "—"}`,
      "",
      "— Sent from uniquebeautysalon.pk",
    ];
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank");
    toast.success("Opening WhatsApp with your consultation…");
    setSent(true);
    setBusy(false);
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setSent(false), 4000);
  };

  const field =
    "peer w-full border-0 border-b border-border/70 bg-transparent py-3 text-sm text-foreground placeholder:text-muted-foreground/50 transition-colors focus:border-primary focus:outline-none";
  const label = "block text-[0.6rem] uppercase tracking-[0.32em] text-muted-foreground";

  const fieldMotion = (i: number) => ({
    initial: { opacity: 0, y: 18 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-40px" },
    transition: { duration: 0.7, delay: i * 0.06, ease: easing },
  });

  return (
    <section id="contact" className="relative border-t border-border bg-background px-6 py-32 lg:px-10 lg:py-48">
      {/* subtle animated backdrop */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.6 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
          className="absolute -top-40 right-[-10%] h-[420px] w-[420px] rounded-full bg-primary/10 blur-[120px]"
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 0.3 }}
          className="absolute bottom-[-15%] left-[-10%] h-[360px] w-[360px] rounded-full bg-primary/5 blur-[120px]"
        />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-20 max-w-3xl"
        >
          <p className="label-eyebrow">Contact — 10</p>
          <h2 className="mt-6 font-display text-6xl italic leading-[0.95] text-foreground md:text-8xl">
            Begin your <span className="text-primary">ritual.</span>
          </h2>
          <p className="mt-6 max-w-xl text-base font-light text-muted-foreground">
            Share a few details and we'll craft a private consultation for you. Your request is delivered
            directly to our concierge on WhatsApp.
          </p>
        </motion.div>

        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          {/* Left column: studio info */}
          <div className="lg:col-span-5">
            <address className="not-italic space-y-10">
              <motion.div {...fieldMotion(0)}>
                <p className={label}>Studio</p>
                <p className="mt-3 flex items-start gap-3 text-base font-light text-foreground/85">
                  <MapPin className="mt-1 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  <span>
                    2nd Floor, United Plaza<br />
                    G-9 Markaz, Islamabad<br />
                    Pakistan
                  </span>
                </p>
              </motion.div>
              <motion.div {...fieldMotion(1)}>
                <p className={label}>Direct</p>
                <p className="mt-3 flex items-center gap-3 text-base font-light text-foreground/85">
                  <Phone className="h-4 w-4 text-primary" aria-hidden="true" />
                  <a href={`tel:+${WHATSAPP_NUMBER}`} className="hover:text-primary">{DISPLAY_PHONE}</a>
                </p>
              </motion.div>
              <motion.div {...fieldMotion(2)}>
                <p className={label}>Hours</p>
                <p className="mt-3 flex items-center gap-3 text-base font-light text-foreground/85">
                  <Clock className="h-4 w-4 text-primary" aria-hidden="true" />
                  Open Daily · 10:00 AM – 9:00 PM
                </p>
              </motion.div>

              <motion.div {...fieldMotion(3)} className="flex flex-wrap gap-3 pt-4">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank" rel="noreferrer"
                  className="group inline-flex items-center gap-2 border border-primary bg-primary px-6 py-3 text-[0.65rem] uppercase tracking-[0.32em] text-primary-foreground transition-all hover:bg-transparent hover:text-primary"
                >
                  <MessageCircle className="h-4 w-4 transition-transform group-hover:rotate-12" aria-hidden="true" /> WhatsApp
                </a>
                <a
                  href={`tel:+${WHATSAPP_NUMBER}`}
                  className="inline-flex items-center gap-2 border border-foreground/40 px-6 py-3 text-[0.65rem] uppercase tracking-[0.32em] text-foreground transition-all hover:border-primary hover:text-primary"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" /> Call the Studio
                </a>
              </motion.div>

              <motion.div {...fieldMotion(4)} className="mt-8 aspect-video w-full overflow-hidden border border-border">
                <a
                  href="https://www.google.com/maps/place/unique+beauty+salon/@33.690232,73.032833,17z/data=!3m1!4b1!4m6!3m5!1s0x38dfbf916b3945bb:0x94b5cbedb37cdd5a!8m2!3d33.690232!4d73.032833!16s%2Fg%2F11g0455503"
                  target="_blank"
                  rel="noreferrer"
                  className="block h-full w-full"
                  aria-label="Open Unique Beauty Salon on Google Maps"
                >
                  <iframe
                    title="Unique Beauty Salon — G-9 Markaz, Islamabad"
                    src="https://www.google.com/maps?q=Unique+Beauty+Salon,+G-9+Markaz,+Islamabad&ll=33.690232,73.032833&z=17&output=embed"
                    className="pointer-events-none h-full w-full grayscale"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </a>
              </motion.div>
            </address>
          </div>

          {/* Right column: form */}
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1, ease: easing }}
            className="relative lg:col-span-7"
          >
            <div className="relative border border-border bg-surface/40 p-8 backdrop-blur-sm md:p-12">
              <div className="mb-8 flex items-center gap-2 text-[0.6rem] uppercase tracking-[0.32em] text-primary">
                <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                Private Consultation
              </div>

              <div className="grid gap-8 sm:grid-cols-2">
                <motion.div {...fieldMotion(0)}>
                  <label className={label} htmlFor="name">Full Name</label>
                  <input id="name" name="name" required className={field} placeholder="Your name" />
                </motion.div>
                <motion.div {...fieldMotion(1)}>
                  <label className={label} htmlFor="phone">Phone / WhatsApp</label>
                  <input id="phone" name="phone" required className={field} placeholder="+92 ___ _______" />
                </motion.div>
                <motion.div {...fieldMotion(2)}>
                  <label className={label} htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" className={field} placeholder="you@email.com" />
                </motion.div>
                <motion.div {...fieldMotion(3)}>
                  <label className={label} htmlFor="service">Desired Service</label>
                  <select id="service" name="service" required className={field} defaultValue="">
                    <option value="" disabled>Select a service</option>
                    {SERVICES.map((s) => (
                      <option key={s} value={s} className="bg-background text-foreground">{s}</option>
                    ))}
                  </select>
                </motion.div>
                <motion.div {...fieldMotion(4)}>
                  <label className={label} htmlFor="occasion">Occasion</label>
                  <select id="occasion" name="occasion" className={field} defaultValue="">
                    <option value="" disabled>Choose one</option>
                    {OCCASIONS.map((o) => (
                      <option key={o} value={o} className="bg-background text-foreground">{o}</option>
                    ))}
                  </select>
                </motion.div>
                <motion.div {...fieldMotion(5)}>
                  <label className={label} htmlFor="budget">Budget Range</label>
                  <select id="budget" name="budget" className={field} defaultValue="">
                    <option value="" disabled>Optional</option>
                    {BUDGETS.map((b) => (
                      <option key={b} value={b} className="bg-background text-foreground">{b}</option>
                    ))}
                  </select>
                </motion.div>
                <motion.div {...fieldMotion(6)}>
                  <label className={label} htmlFor="date">Preferred Date</label>
                  <input id="date" name="date" type="date" className={field} />
                </motion.div>
                <motion.div {...fieldMotion(7)}>
                  <label className={label} htmlFor="time">Preferred Time</label>
                  <input id="time" name="time" type="time" className={field} />
                </motion.div>
              </div>

              <motion.div {...fieldMotion(8)} className="mt-8">
                <label className={label} htmlFor="notes">Notes for our team</label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={4}
                  className={field}
                  placeholder="Inspiration, allergies, references, or anything we should prepare…"
                />
              </motion.div>

              <motion.button
                {...fieldMotion(9)}
                type="submit"
                disabled={busy}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="group relative mt-10 flex w-full items-center justify-center gap-3 overflow-hidden border border-primary bg-primary px-8 py-4 text-xs uppercase tracking-[0.32em] text-primary-foreground transition-colors hover:bg-transparent hover:text-primary disabled:opacity-60"
              >
                <span className="relative z-10 flex items-center gap-3">
                  {sent ? (
                    <>
                      <Check className="h-4 w-4" /> Sent to WhatsApp
                    </>
                  ) : busy ? (
                    <>
                      <span className="h-3 w-3 animate-ping rounded-full bg-current" />
                      Opening WhatsApp…
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      Send to WhatsApp
                    </>
                  )}
                </span>
              </motion.button>

              <motion.p {...fieldMotion(10)} className="mt-4 text-center text-xs text-muted-foreground">
                Submission opens WhatsApp with your consultation pre-filled — sent to {DISPLAY_PHONE}.
              </motion.p>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
