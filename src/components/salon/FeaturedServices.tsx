import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";

import banner1 from "@/assets/banner_1.jpeg";
import banner2 from "@/assets/banner_2.webp";
import banner3 from "@/assets/banner_3.webp";
import banner4 from "@/assets/banner_4.webp";
import banner5 from "@/assets/banner_5.webp";
import hairCutsFront from "@/assets/hair-cuts-front.jpg";
import hairCutsHover from "@/assets/hair-cuts-hover.jpg";
import hairTreatmentsFront from "@/assets/hair-treatments-front.jpg";
import hairTreatmentsHover from "@/assets/hair-treatments-hover.jpg";
import keratinBotoxFront from "@/assets/keratin-botox-front.webp";
import keratinBotoxHover from "@/assets/keratin-botox-hover.png";
import hairColorFront from "@/assets/hair-color-front.jpg";
import hairColorHover from "@/assets/hair-color-hover.jpg";
import facialsFront from "@/assets/facials-front.jpg";
import facialsHover from "@/assets/facials-hover.webp";
import bridalMakeupFront from "@/assets/bridal-makeup-front.jpg";
import bridalMakeupHover from "@/assets/bridal-makeup-hover.jpg";
import manicurePedicureFront from "@/assets/manicure-pedicure-front.jpg";
import manicurePedicureHover from "@/assets/manicure-pedicure-hover.webp";
import nailExtensionsFront from "@/assets/nail-extensions-front.jpg";
import nailExtensionsHover from "@/assets/nail-extensions-hover.jpg";
import waxingFront from "@/assets/waxing-front.jpg";
import waxingHover from "@/assets/waxing-hover.jpg";
import threadingFront from "@/assets/threading-front.jpg";
import threadingHover from "@/assets/threading-hover.jpg";
import bodyTreatmentsFront from "@/assets/body-treatments-front.jpg";
import bodyTreatmentsHover from "@/assets/body-treatments-hover.jpg";
import eyelashExtensionsFront from "@/assets/eyelash-extensions-front.webp";
import eyelashExtensionsHover from "@/assets/eyelash-extensions-hover.jpg";

const images = [banner5, banner3, banner4, banner1, banner2];

type Service = {
  slug: string;
  n: string;
  title: string;
  from: string;
  desc: string;
  image: string;
  hoverImage?: string;
  details: { name: string; price: string }[];
};

const services: Service[] = [
  {
    slug: "hair-cuts",
    n: "01", title: "Hair Cuts & Styling", from: "Rs. 2,000",
    desc: "Precision cuts, layers, and blow-dry finishes tailored to your bone structure.",
    image: hairCutsFront,
    hoverImage: hairCutsHover,
    details: [
      { name: "Signature Hair Cut", price: "Rs. 2,000" },
      { name: "Kids Hair Cut", price: "Rs. 1,200" },
      { name: "Blow Dry", price: "Rs. 2,500" },
      { name: "Hair Styling — Occasion", price: "Rs. 4,500" },
      { name: "Hair Iron / Curls", price: "Rs. 3,000" },
    ],
  },
  {
    slug: "hair-treatments",
    n: "02", title: "Hair Treatments", from: "Rs. 2,500",
    desc: "Deep-conditioning rituals to restore softness, shine and strength.",
    image: hairTreatmentsFront,
    hoverImage: hairTreatmentsHover,
    details: [
      { name: "Protein Treatment", price: "Rs. 3,500" },
      { name: "Deep Conditioning", price: "Rs. 2,500" },
      { name: "Scalp Detox", price: "Rs. 4,000" },
      { name: "Hair Spa", price: "Rs. 3,500" },
    ],
  },
  {
    slug: "keratin-botox",
    n: "03", title: "Keratin & Botox", from: "Rs. 18,000",
    desc: "Semi-permanent smoothing systems for glass-like, frizz-free hair.",
    image: keratinBotoxFront,
    hoverImage: keratinBotoxHover,
    details: [
      { name: "Keratin — Short", price: "Rs. 18,000" },
      { name: "Keratin — Medium", price: "Rs. 25,000" },
      { name: "Keratin — Long", price: "Rs. 35,000" },
      { name: "Hair Botox", price: "Rs. 22,000" },
      { name: "Nano Plastia", price: "Rs. 28,000" },
    ],
  },
  {
    slug: "hair-color",
    n: "04", title: "Hair Color & Balayage", from: "Rs. 5,000",
    desc: "Editorial color work — from soft dimension to hand-painted balayage.",
    image: hairColorFront,
    hoverImage: hairColorHover,
    details: [
      { name: "Root Touch-Up", price: "Rs. 5,000" },
      { name: "Global Color", price: "Rs. 8,000" },
      { name: "Highlights", price: "Rs. 12,000" },
      { name: "Balayage", price: "Rs. 18,000" },
      { name: "Ombre", price: "Rs. 15,000" },
    ],
  },
  {
    slug: "facials",
    n: "05", title: "Facials & Skincare", from: "Rs. 2,000",
    desc: "Result-driven facials with premium imported skincare.",
    image: facialsFront,
    hoverImage: facialsHover,
    details: [
      { name: "Signature Facial", price: "Rs. 2,000" },
      { name: "Hydra Facial", price: "Rs. 6,500" },
      { name: "Gold Facial", price: "Rs. 5,000" },
      { name: "Anti-Aging Facial", price: "Rs. 7,000" },
      { name: "Whitening Facial", price: "Rs. 4,500" },
    ],
  },
  {
    slug: "bridal-makeup",
    n: "06", title: "Bridal Makeup", from: "Rs. 30,000",
    desc: "A day-of transformation crafted for the modern bride.",
    image: bridalMakeupFront,
    hoverImage: bridalMakeupHover,
    details: [
      { name: "Engagement", price: "Rs. 30,000" },
      { name: "Mehndi", price: "Rs. 25,000" },
      { name: "Nikah", price: "Rs. 45,000" },
      { name: "Barat", price: "Rs. 55,000" },
      { name: "Walima", price: "Rs. 45,000" },
    ],
  },
  {
    slug: "manicure-pedicure",
    n: "07", title: "Manicure & Pedicure", from: "Rs. 2,000",
    desc: "Hand and foot rituals with warm oils and precision detail.",
    image: manicurePedicureFront,
    hoverImage: manicurePedicureHover,
    details: [
      { name: "Classic Manicure", price: "Rs. 2,000" },
      { name: "Luxury Manicure", price: "Rs. 3,500" },
      { name: "Classic Pedicure", price: "Rs. 2,500" },
      { name: "Luxury Pedicure", price: "Rs. 4,500" },
      { name: "Paraffin Treatment", price: "Rs. 2,000" },
    ],
  },
  {
    slug: "nail-extensions",
    n: "08", title: "Nail Extensions", from: "Rs. 8,000",
    desc: "Gel & acrylic extensions with hand-painted nail art.",
    image: nailExtensionsFront,
    hoverImage: nailExtensionsHover,
    details: [
      { name: "Gel Extensions", price: "Rs. 8,000" },
      { name: "Acrylic Extensions", price: "Rs. 8,500" },
      { name: "Refill", price: "Rs. 5,500" },
      { name: "Nail Art", price: "Rs. 500 / nail" },
      { name: "Removal", price: "Rs. 2,000" },
    ],
  },
  {
    slug: "waxing",
    n: "09", title: "Waxing", from: "Rs. 300",
    desc: "Warm and cold wax formulas for silky, calm skin.",
    image: waxingFront,
    hoverImage: waxingHover,
    details: [
      { name: "Upper Lip", price: "Rs. 300" },
      { name: "Full Arms", price: "Rs. 1,200" },
      { name: "Full Legs", price: "Rs. 1,800" },
      { name: "Under Arms", price: "Rs. 500" },
      { name: "Full Body Wax", price: "Rs. 5,500" },
    ],
  },
  {
    slug: "threading",
    n: "10", title: "Threading", from: "Rs. 200",
    desc: "Precise brow shaping and facial threading.",
    image: threadingFront,
    hoverImage: threadingHover,
    details: [
      { name: "Eyebrows", price: "Rs. 200" },
      { name: "Upper Lip", price: "Rs. 150" },
      { name: "Chin", price: "Rs. 200" },
      { name: "Full Face Threading", price: "Rs. 800" },
    ],
  },
  {
    slug: "body-treatments",
    n: "11", title: "Body Treatments", from: "Rs. 2,000",
    desc: "Polishes, scrubs and whitening rituals for radiant skin.",
    image: bodyTreatmentsFront,
    hoverImage: bodyTreatmentsHover,
    details: [
      { name: "Body Polish", price: "Rs. 3,500" },
      { name: "Body Whitening", price: "Rs. 5,500" },
      { name: "Back Facial", price: "Rs. 3,000" },
      { name: "Full Body Massage", price: "Rs. 4,500" },
    ],
  },
  {
    slug: "eyelash-extensions",
    n: "12", title: "Eyelash Extensions", from: "Rs. 8,000",
    desc: "Classic, hybrid and volume sets applied lash-by-lash.",
    image: eyelashExtensionsFront,
    hoverImage: eyelashExtensionsHover,
    details: [
      { name: "Classic Set", price: "Rs. 8,000" },
      { name: "Hybrid Set", price: "Rs. 10,000" },
      { name: "Volume Set", price: "Rs. 12,000" },
      { name: "Lash Lift & Tint", price: "Rs. 5,000" },
      { name: "Removal", price: "Rs. 2,000" },
    ],
  },
];


export function FeaturedServices() {
  return (
    <section id="services" className="relative border-t border-border bg-background px-6 py-32 lg:px-10 lg:py-48">
      <div className="mx-auto max-w-7xl">
        <div className="mb-24 grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="label-eyebrow">Services — 02</p>
            <h2 className="mt-6 font-display text-6xl italic leading-[0.95] text-foreground md:text-7xl">
              The full repertoire.
            </h2>
          </div>
          <p className="max-w-md self-end text-base font-light leading-relaxed text-muted-foreground lg:col-span-5 lg:col-start-8">
            Twelve disciplines. One quiet standard. Explore each ritual and its complete price list.
          </p>
        </div>

        <div>
          {services.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] as const }}
            >
              <Link
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="group relative grid w-full grid-cols-[3rem_1fr_auto] items-center gap-6 border-t border-border py-8 text-left transition-colors hover:bg-surface md:grid-cols-[4rem_1fr_auto_auto] md:py-10 lg:grid-cols-[4rem_1.5fr_2fr_auto] lg:gap-10"
              >
                <span className="font-display text-lg italic text-primary md:text-xl">{s.n}</span>
                <span className="font-display text-2xl italic leading-tight text-foreground transition-colors group-hover:text-primary md:text-3xl lg:text-4xl">
                  {s.title}
                </span>
                <span className="hidden text-sm font-light text-muted-foreground md:block">{s.desc}</span>
                <span className="whitespace-nowrap text-[0.7rem] uppercase tracking-[0.28em] text-foreground/70">
                  From {s.from}
                </span>
                <div className="pointer-events-none absolute right-6 top-1/2 hidden h-40 w-56 -translate-y-1/2 overflow-hidden opacity-0 shadow-2xl transition-opacity duration-500 group-hover:opacity-100 xl:block">
                  <img src={s.image} alt="" className="h-full w-full object-cover" />
                  {s.hoverImage && (
                    <img
                      src={s.hoverImage}
                      alt=""
                      aria-hidden="true"
                      className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                    />
                  )}
                </div>
              </Link>
            </motion.div>
          ))}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  );
}


export { images as galleryImages };
