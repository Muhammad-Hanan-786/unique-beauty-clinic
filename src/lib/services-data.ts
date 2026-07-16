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

export type PriceItem = { name: string; price: string };

export type Service = {
  slug: string;
  n: string;
  title: string;
  from: string;
  short: string;
  long: string;
  image: string;
  hoverImage?: string;
  gallery: string[];
  ritual: string[];
  items: PriceItem[];
};

export const services: Service[] = [
  {
    slug: "hair-cuts",
    n: "01",
    title: "Hair Cuts & Styling",
    from: "Rs. 2,000",
    short: "Precision cuts, layers, and blow-dry finishes tailored to your bone structure.",
    long: "Every cut begins with a private consultation. Our stylists study bone structure, hair density and lifestyle before a single strand is shaped — the result is a haircut that grows out beautifully and moves with you.",
    image: hairCutsFront,
    hoverImage: hairCutsHover,
    gallery: [hairCutsFront, hairCutsHover, banner5],
    ritual: [
      "15-minute consultation",
      "Aromatic wash with scalp massage",
      "Precision cut & shape",
      "Blow-dry finish",
    ],
    items: [
      { name: "Signature Hair Cut", price: "Rs. 2,000" },
      { name: "Kids Hair Cut", price: "Rs. 1,200" },
      { name: "Fringe Trim", price: "Rs. 800" },
      { name: "Blow Dry", price: "Rs. 2,500" },
      { name: "Hair Styling — Occasion", price: "Rs. 4,500" },
      { name: "Hair Iron / Curls", price: "Rs. 3,000" },
    ],
  },
  {
    slug: "hair-treatments",
    n: "02",
    title: "Hair Treatments",
    from: "Rs. 2,500",
    short: "Deep-conditioning rituals to restore softness, shine and strength.",
    long: "Bespoke treatments formulated for your hair type. From protein reconstruction to scalp detox, we restore what modern life takes away.",
    image: hairTreatmentsFront,
    hoverImage: hairTreatmentsHover,
    gallery: [hairTreatmentsFront, hairTreatmentsHover, banner3],
    ritual: [
      "Scalp & hair diagnosis",
      "Custom formula blend",
      "Steam & massage",
      "Cool rinse & finish",
    ],
    items: [
      { name: "Protein Treatment", price: "Rs. 3,500" },
      { name: "Deep Conditioning", price: "Rs. 2,500" },
      { name: "Scalp Detox", price: "Rs. 4,000" },
      { name: "Hair Spa", price: "Rs. 3,500" },
      { name: "Olaplex Standalone", price: "Rs. 5,500" },
    ],
  },
  {
    slug: "keratin-botox",
    n: "03",
    title: "Keratin & Botox",
    from: "Rs. 18,000",
    short: "Semi-permanent smoothing systems for glass-like, frizz-free hair.",
    long: "Formaldehyde-free keratin systems that leave hair soft, shining and effortless to style — for up to six months.",
    image: keratinBotoxFront,
    hoverImage: keratinBotoxHover,
    gallery: [keratinBotoxFront, keratinBotoxHover, banner4],
    ritual: [
      "Clarifying shampoo",
      "Custom keratin application",
      "Heat sealing (30–60 min)",
      "Aftercare kit",
    ],
    items: [
      { name: "Keratin — Short", price: "Rs. 18,000" },
      { name: "Keratin — Medium", price: "Rs. 25,000" },
      { name: "Keratin — Long", price: "Rs. 35,000" },
      { name: "Hair Botox", price: "Rs. 22,000" },
      { name: "Nano Plastia", price: "Rs. 28,000" },
    ],
  },
  {
    slug: "hair-color",
    n: "04",
    title: "Hair Color & Balayage",
    from: "Rs. 5,000",
    short: "Editorial color work — from soft dimension to hand-painted balayage.",
    long: "Our colorists are trained in international foiling, freehand and balayage techniques. Every service is preceded by a bond-building complimentary Olaplex step.",
    image: hairColorFront,
    hoverImage: hairColorHover,
    gallery: [hairColorFront, hairColorHover, banner4],
    ritual: [
      "Color consultation & swatch",
      "Bond-building pre-treatment",
      "Application & processing",
      "Toning, gloss & blow-dry",
    ],
    items: [
      { name: "Root Touch-Up", price: "Rs. 5,000" },
      { name: "Global Color", price: "Rs. 8,000" },
      { name: "Highlights — Partial", price: "Rs. 8,000" },
      { name: "Highlights — Full", price: "Rs. 12,000" },
      { name: "Balayage — Partial", price: "Rs. 15,000" },
      { name: "Balayage — Full", price: "Rs. 22,000" },
      { name: "Ombre", price: "Rs. 15,000" },
      { name: "Fashion Color", price: "Rs. 12,000" },
    ],
  },
  {
    slug: "facials",
    n: "05",
    title: "Facials & Skincare",
    from: "Rs. 2,000",
    short: "Result-driven facials with premium imported skincare.",
    long: "Facials designed for real skin — Dermalogica, Casmara and medical-grade formulas administered by trained skin therapists.",
    image: facialsFront,
    hoverImage: facialsHover,
    gallery: [facialsFront, facialsHover, banner1],
    ritual: [
      "Skin analysis under lamp",
      "Double cleanse & steam",
      "Custom treatment & mask",
      "SPF & aftercare",
    ],
    items: [
      { name: "Signature Facial", price: "Rs. 2,000" },
      { name: "Hydra Facial", price: "Rs. 6,500" },
      { name: "Gold Facial", price: "Rs. 5,000" },
      { name: "Anti-Aging Facial", price: "Rs. 7,000" },
      { name: "Whitening Facial", price: "Rs. 4,500" },
      { name: "Acne Facial", price: "Rs. 5,000" },
    ],
  },
  {
    slug: "bridal-makeup",
    n: "06",
    title: "Bridal Makeup",
    from: "Rs. 25,000",
    short: "A day-of transformation crafted for the modern bride.",
    long: "From Mehndi to Walima, our bridal team choreographs every look with airbrush, HD or classic techniques — designed to photograph beautifully and last from dawn to midnight.",
    image: bridalMakeupFront,
    hoverImage: bridalMakeupHover,
    gallery: [bridalMakeupFront, bridalMakeupHover, banner3],
    ritual: [
      "Trial session (optional)",
      "Skin prep & priming",
      "HD or airbrush makeup",
      "Hair styling & dupatta setting",
    ],
    items: [
      { name: "Engagement", price: "Rs. 30,000" },
      { name: "Mehndi", price: "Rs. 25,000" },
      { name: "Nikah", price: "Rs. 45,000" },
      { name: "Barat", price: "Rs. 55,000" },
      { name: "Walima", price: "Rs. 45,000" },
      { name: "Complete Bridal Package", price: "Rs. 1,80,000" },
    ],
  },
  {
    slug: "manicure-pedicure",
    n: "07",
    title: "Manicure & Pedicure",
    from: "Rs. 2,000",
    short: "Hand and foot rituals with warm oils and precision detail.",
    long: "Warm oils, marble stones and unhurried attention — from a five-minute file-and-polish to our hour-long paraffin retreat.",
    image: manicurePedicureFront,
    hoverImage: manicurePedicureHover,
    gallery: [manicurePedicureFront, manicurePedicureHover, banner1],
    ritual: [
      "Cuticle care & shape",
      "Exfoliation & soak",
      "Massage & moisturize",
      "Gel or classic polish",
    ],
    items: [
      { name: "Classic Manicure", price: "Rs. 2,000" },
      { name: "Luxury Manicure", price: "Rs. 3,500" },
      { name: "Classic Pedicure", price: "Rs. 2,500" },
      { name: "Luxury Pedicure", price: "Rs. 4,500" },
      { name: "Paraffin Treatment", price: "Rs. 2,000" },
    ],
  },
  {
    slug: "nail-extensions",
    n: "08",
    title: "Nail Extensions",
    from: "Rs. 8,000",
    short: "Gel & acrylic extensions with hand-painted nail art.",
    long: "Sculpted extensions with lightweight gel and acrylic systems — finished with editorial nail art on request.",
    image: nailExtensionsFront,
    hoverImage: nailExtensionsHover,
    gallery: [nailExtensionsFront, nailExtensionsHover, banner1],
    ritual: [
      "Length & shape consult",
      "Prep & application",
      "Sculpt, file & shine",
      "Art, chrome or minimalist finish",
    ],
    items: [
      { name: "Gel Extensions", price: "Rs. 8,000" },
      { name: "Acrylic Extensions", price: "Rs. 8,500" },
      { name: "Refill", price: "Rs. 5,500" },
      { name: "Nail Art", price: "Rs. 500 / nail" },
      { name: "Removal", price: "Rs. 2,000" },
    ],
  },
  {
    slug: "waxing",
    n: "09",
    title: "Waxing",
    from: "Rs. 300",
    short: "Warm and cold wax formulas for silky, calm skin.",
    long: "Gentle, imported wax formulas that lift hair with minimal pull — followed by soothing post-wax oils.",
    image: waxingFront,
    hoverImage: waxingHover,
    gallery: [waxingFront, waxingHover, banner2],
    ritual: [
      "Skin prep & powder",
      "Warm or cold wax application",
      "Removal in growth direction",
      "Soothing oil & aftercare",
    ],
    items: [
      { name: "Upper Lip", price: "Rs. 300" },
      { name: "Full Arms", price: "Rs. 1,200" },
      { name: "Half Legs", price: "Rs. 1,000" },
      { name: "Full Legs", price: "Rs. 1,800" },
      { name: "Under Arms", price: "Rs. 500" },
      { name: "Full Body Wax", price: "Rs. 5,500" },
    ],
  },
  {
    slug: "threading",
    n: "10",
    title: "Threading",
    from: "Rs. 200",
    short: "Precise brow shaping and facial threading.",
    long: "Brow architecture is the frame for the whole face — our threading artists shape with a millimetre's precision.",
    image: threadingFront,
    hoverImage: threadingHover,
    gallery: [threadingFront, threadingHover, banner1],
    ritual: [
      "Brow mapping",
      "Twin-thread precision",
      "Tint & set (optional)",
      "Post-thread calm",
    ],
    items: [
      { name: "Eyebrows", price: "Rs. 200" },
      { name: "Upper Lip", price: "Rs. 150" },
      { name: "Chin", price: "Rs. 200" },
      { name: "Full Face Threading", price: "Rs. 800" },
    ],
  },
  {
    slug: "body-treatments",
    n: "11",
    title: "Body Treatments",
    from: "Rs. 2,000",
    short: "Polishes, scrubs and whitening rituals for radiant skin.",
    long: "Full-body rituals that combine exfoliation, brightening actives and long massage strokes for skin that glows.",
    image: bodyTreatmentsFront,
    hoverImage: bodyTreatmentsHover,
    gallery: [bodyTreatmentsFront, bodyTreatmentsHover, banner5],
    ritual: [
      "Warm shower & dry brush",
      "Body polish or scrub",
      "Wrap or massage",
      "Hydration & warm towel",
    ],
    items: [
      { name: "Body Polish", price: "Rs. 3,500" },
      { name: "Body Whitening", price: "Rs. 5,500" },
      { name: "Back Facial", price: "Rs. 3,000" },
      { name: "Full Body Massage", price: "Rs. 4,500" },
    ],
  },
  {
    slug: "eyelash-extensions",
    n: "12",
    title: "Eyelash Extensions",
    from: "Rs. 5,000",
    short: "Classic, hybrid and volume sets applied lash-by-lash.",
    long: "Feather-weight extensions applied one lash at a time. Lifts, tints, and full sets designed to suit your eye shape.",
    image: eyelashExtensionsFront,
    hoverImage: eyelashExtensionsHover,
    gallery: [eyelashExtensionsFront, eyelashExtensionsHover, banner4],
    ritual: [
      "Under-eye protection",
      "Lash mapping",
      "Individual lash placement",
      "Fluff, seal & photograph",
    ],
    items: [
      { name: "Classic Set", price: "Rs. 8,000" },
      { name: "Hybrid Set", price: "Rs. 10,000" },
      { name: "Volume Set", price: "Rs. 12,000" },
      { name: "Lash Lift & Tint", price: "Rs. 5,000" },
      { name: "Removal", price: "Rs. 2,000" },
    ],
  },
];

export const findService = (slug: string) => services.find((s) => s.slug === slug);

export const relatedServices = (slug: string, count = 3) =>
  services.filter((s) => s.slug !== slug).slice(0, count);
