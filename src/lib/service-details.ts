// Extra content per service, keyed by slug. Kept separate from services-data.ts
// so the grid/home bundles stay small and only the detail route imports this.

export type ServiceDetail = {
  duration: string;
  suitableFor: string[];
  benefits: string[];
  aftercare: string[];
  faqs: { q: string; a: string }[];
  preparation?: string[];
  whatsIncluded?: string[];
  addOns?: { name: string; price: string }[];
  results?: string;
};

const commonBridalFaqs = [
  {
    q: "Do you offer trials before the wedding day?",
    a: "Yes — we recommend a trial 2–3 weeks before your event so we can perfect the look together.",
  },
  {
    q: "Do you travel to venues?",
    a: "Our senior artists travel across Islamabad and Rawalpindi. Outstation travel can be arranged on request.",
  },
];

const commonHairFaqs = [
  {
    q: "Which products do you use?",
    a: "We work with international, professional-grade brands including Olaplex, Kerastase, Wella and L'Oréal Professionnel.",
  },
  {
    q: "How do I book a consultation?",
    a: "Consultations are complimentary — book via WhatsApp at +92 318 5697460 or the Contact page.",
  },
];

export const serviceDetails: Record<string, ServiceDetail> = {
  "hair-cuts": {
    duration: "45–75 minutes",
    suitableFor: ["All hair types", "Fine, thick or curly hair", "Kids and adults"],
    benefits: [
      "Cuts tailored to bone structure & lifestyle",
      "Shape that grows out beautifully",
      "Blow-dry finish included",
    ],
    preparation: [
      "Come with hair washed the day before (not the same morning)",
      "Bring reference photos if you have a look in mind",
      "Avoid heavy oils or serums on the day of your appointment",
    ],
    whatsIncluded: [
      "15-minute face-shape & lifestyle consultation",
      "Signature wash with scalp massage",
      "Precision cut and blow-dry finish",
    ],
    addOns: [
      { name: "Deep-conditioning mask", price: "PKR 2,500" },
      { name: "Scalp detox treatment", price: "PKR 3,000" },
    ],
    results: "You'll leave with a fresh, camera-ready shape that holds beautifully for 6–8 weeks.",
    aftercare: [
      "Use a sulfate-free shampoo to preserve shape",
      "Trim every 6–8 weeks to keep ends healthy",
      "Air-dry when possible; use heat protectant when styling",
    ],
    faqs: [
      {
        q: "Will the stylist consult before cutting?",
        a: "Yes — every service starts with a 15-minute consultation covering face shape, hair density and lifestyle.",
      },
      ...commonHairFaqs,
    ],
  },
  "hair-treatments": {
    duration: "60–90 minutes",
    suitableFor: ["Dry or damaged hair", "Colored hair", "Chemically treated hair"],
    benefits: ["Restores softness & shine", "Reduces breakage", "Soothes the scalp"],
    preparation: [
      "Arrive with dry, product-free hair",
      "Skip oiling for 24 hours before treatment",
      "Let us know of any scalp sensitivities",
    ],
    whatsIncluded: [
      "Scalp & strand diagnosis",
      "Custom-mixed treatment mask",
      "Steam therapy and blow-dry finish",
    ],
    addOns: [
      { name: "Olaplex bond builder", price: "PKR 4,500" },
      { name: "Hair spa upgrade", price: "PKR 3,500" },
    ],
    results: "Visibly smoother, glossier hair after one session; deeper repair with a 3-session course.",
    aftercare: [
      "Avoid heat styling for 24 hours",
      "Wash with lukewarm water",
      "Follow with a weekly hydrating mask at home",
    ],
    faqs: [
      { q: "How often should I get a treatment?", a: "For most guests, every 3–4 weeks keeps hair in optimal condition." },
      ...commonHairFaqs,
    ],
  },
  "keratin-botox": {
    duration: "2.5–4 hours",
    suitableFor: ["Frizzy or unmanageable hair", "Curly or wavy hair wanting smoother finish", "Colored hair (formaldehyde-free)"],
    benefits: ["Lasts up to 6 months", "Cuts styling time in half", "Adds glass-like shine"],
    preparation: [
      "Wash hair with a clarifying shampoo the day before",
      "Do not tie or clip hair on the day of service",
      "Plan for 3–4 hours in salon",
    ],
    whatsIncluded: [
      "Clarifying pre-wash",
      "Strand-by-strand keratin/botox application",
      "Heat sealing and initial blow-out",
    ],
    addOns: [
      { name: "Take-home aftercare kit", price: "PKR 6,500" },
      { name: "Split-end trim", price: "PKR 1,500" },
    ],
    results: "Silky, frizz-free hair from day one; full smoothness locks in after the 72-hour cure.",
    aftercare: [
      "Do not wash hair for 48–72 hours",
      "Avoid tying, clipping or tucking hair behind ears for 3 days",
      "Use sulfate- and sodium-chloride-free shampoo",
    ],
    faqs: [
      { q: "Is the formula safe?", a: "We use formaldehyde-free keratin systems safe for colored and treated hair." },
      { q: "Will it make my hair straight?", a: "It smooths and relaxes curl by 60–80% while keeping natural movement." },
      ...commonHairFaqs,
    ],
  },
  "hair-color": {
    duration: "2–5 hours depending on service",
    suitableFor: ["First-time color guests", "Grey coverage", "Balayage & fashion color enthusiasts"],
    benefits: ["Bond-building Olaplex included", "Editorial hand-painting technique", "Custom toning for skin-tone match"],
    preparation: [
      "Patch test 48 hours before (mandatory for new guests)",
      "Do not wash hair on the day of service",
      "Bring inspiration photos for the tone you want",
    ],
    whatsIncluded: [
      "Color consultation with a senior colorist",
      "Olaplex bond-builder mixed into color",
      "Custom gloss toner and blow-dry finish",
    ],
    addOns: [
      { name: "Take-home Olaplex No. 3", price: "PKR 7,500" },
      { name: "Gloss refresh (between visits)", price: "PKR 5,500" },
    ],
    results: "A luminous, skin-tone-matched color that lasts 4–6 weeks between gloss refreshes.",
    aftercare: [
      "Wait 48 hours before first wash",
      "Use color-safe, sulfate-free shampoo",
      "Book a gloss refresh every 4–6 weeks",
    ],
    faqs: [
      { q: "Do you patch test?", a: "Yes — a patch test 48 hours before is required for first-time color guests." },
      { q: "How long does balayage last?", a: "Balayage grows out softly and can last 4–6 months between refreshes." },
      ...commonHairFaqs,
    ],
  },
  facials: {
    duration: "60–90 minutes",
    suitableFor: ["All skin types", "Sensitive & reactive skin", "Acne-prone or pigmented skin"],
    benefits: ["Visibly brighter, hydrated skin", "Targets pigmentation & fine lines", "Uses medical-grade products"],
    preparation: [
      "Arrive with a clean, makeup-free face if possible",
      "Avoid strong actives (retinol, acids) for 3 days before",
      "Skip waxing or threading on the same day",
    ],
    whatsIncluded: [
      "Skin analysis under magnifying lamp",
      "Double cleanse, exfoliation and extractions",
      "Custom mask, serum, moisturizer and SPF",
    ],
    addOns: [
      { name: "LED light therapy", price: "PKR 3,500" },
      { name: "Under-eye brightening ampoule", price: "PKR 2,500" },
    ],
    results: "Instant glow and smoother texture; best results with a course of 4–6 facials, monthly.",
    aftercare: [
      "Avoid makeup for 6 hours",
      "Use gentle cleanser & SPF 50 for 3 days",
      "Skip active acids/retinols for 48 hours",
    ],
    faqs: [
      { q: "Which facial is best for me?", a: "Our therapist will analyze your skin under lamp before recommending the ideal treatment." },
      { q: "How often should I get a facial?", a: "Once every 4 weeks aligns with your skin's natural renewal cycle." },
    ],
  },
  "bridal-makeup": {
    duration: "2–3 hours",
    suitableFor: ["Brides", "Bridesmaids & family", "Engagement & event guests"],
    benefits: ["Choice of HD, airbrush or classic finish", "Lasts dawn to midnight", "Photographs beautifully in every light"],
    preparation: [
      "Book a trial 2–3 weeks before the event",
      "Follow a simple skincare routine (hydration + SPF) for 2 weeks prior",
      "Bring your outfit, jewelry and inspiration photos to the trial",
    ],
    whatsIncluded: [
      "Skin prep and priming",
      "HD/airbrush base with contour and highlight",
      "Eye look, lashes, lip and finishing spray",
      "Hair styling and dupatta setting",
    ],
    addOns: [
      { name: "Second look / reception change", price: "PKR 25,000" },
      { name: "Family makeup (per person)", price: "PKR 15,000" },
    ],
    results: "A luminous, long-wear bridal look designed to hold from ceremony to reception photos.",
    aftercare: [
      "Cleanse with a gentle oil-based remover",
      "Follow with a hydrating mask",
      "Keep skin makeup-free the following morning",
    ],
    faqs: [
      { q: "How early should I book?", a: "For bridal season we recommend booking 3–6 months in advance." },
      { q: "Do you provide hair styling with makeup?", a: "Yes — hair styling and dupatta setting are included in all bridal packages." },
      ...commonBridalFaqs,
    ],
  },
  "manicure-pedicure": {
    duration: "45–75 minutes",
    suitableFor: ["All ages", "Sensitive skin", "Guests wanting long-lasting gel finish"],
    benefits: ["Warm oils & marble stones", "Precision cuticle care", "Gel or classic polish"],
    preparation: [
      "Remove any old polish beforehand if possible",
      "Wear open-toe footwear for pedicure",
      "Skip shaving legs 24 hours before pedicure",
    ],
    whatsIncluded: [
      "Warm soak with essential oils",
      "Nail shaping, cuticle care and buffing",
      "Hand/foot massage and polish of your choice",
    ],
    addOns: [
      { name: "Paraffin wax treatment", price: "PKR 2,500" },
      { name: "Nail art (per nail)", price: "PKR 500" },
    ],
    results: "Salon-fresh nails that last 1–2 weeks for classic polish, 2–3 weeks for gel.",
    aftercare: [
      "Apply cuticle oil daily",
      "Wear gloves for household chores",
      "Book refills every 2–3 weeks for gels",
    ],
    faqs: [
      { q: "Is gel polish safe?", a: "Yes — we use professional LED-cured formulas and gentle removal to protect the natural nail." },
    ],
  },
  "nail-extensions": {
    duration: "90–120 minutes",
    suitableFor: ["Short or bitten nails", "Event & bridal looks", "Long-wear nail art lovers"],
    benefits: ["Lightweight gel & acrylic systems", "Custom shape & length", "Hand-painted art on request"],
    preparation: [
      "Remove any old extensions or gel before your appointment",
      "Bring reference photos for shape, length and art",
      "Plan for 90–120 minutes in salon",
    ],
    whatsIncluded: [
      "Natural nail prep and cuticle care",
      "Sculpted gel or acrylic tips in your chosen shape",
      "Base color, top coat and hand massage",
    ],
    addOns: [
      { name: "Custom nail art per nail", price: "PKR 700" },
      { name: "Chrome / cat-eye finish", price: "PKR 2,000" },
    ],
    results: "Beautifully sculpted nails that last 2–3 weeks before a refill.",
    aftercare: [
      "Avoid using nails as tools",
      "Keep cuticles moisturized daily",
      "Book refills every 2–3 weeks",
    ],
    faqs: [
      { q: "How long do extensions last?", a: "Typically 2–3 weeks before a refill, depending on nail growth and lifestyle." },
    ],
  },
  waxing: {
    duration: "20–60 minutes",
    suitableFor: ["All skin types", "First-time wax guests", "Sensitive skin (cold wax available)"],
    benefits: ["Imported, low-pull formulas", "Soothing post-wax oils", "Slower regrowth than shaving"],
    preparation: [
      "Let hair grow to about 5mm (2–3 weeks) before your visit",
      "Exfoliate gently 24 hours before",
      "Skip lotions or oils on the day of waxing",
    ],
    whatsIncluded: [
      "Skin cleanse and pre-wax oil",
      "Warm or cold wax as suited to your skin",
      "Post-wax soothing lotion",
    ],
    addOns: [
      { name: "Full-body scrub", price: "PKR 4,500" },
      { name: "Underarm brightening polish", price: "PKR 2,000" },
    ],
    results: "Smooth skin for 3–4 weeks with progressively finer regrowth.",
    aftercare: [
      "Avoid hot showers & gym for 24 hours",
      "Exfoliate gently after 48 hours",
      "Wear loose clothing for the rest of the day",
    ],
    faqs: [
      { q: "How long should hair be before waxing?", a: "About 5mm (2–3 weeks of growth) for the wax to grip properly." },
    ],
  },
  threading: {
    duration: "10–30 minutes",
    suitableFor: ["All skin types", "Sensitive skin", "Brow shaping & full-face threading"],
    benefits: ["Millimetre precision", "No chemicals or heat", "Sculpted, symmetrical brows"],
    preparation: [
      "Let brow hair grow for at least 2 weeks for a proper shape",
      "Bring reference photos if you want a specific brow style",
      "Skip retinol/AHAs for 24 hours before",
    ],
    whatsIncluded: [
      "Brow mapping to your face shape",
      "Precision threading",
      "Soothing aloe finish",
    ],
    addOns: [
      { name: "Brow tint", price: "PKR 1,500" },
      { name: "Brow lamination", price: "PKR 4,500" },
    ],
    results: "Clean, symmetrical brows that last 2–3 weeks before touch-up.",
    aftercare: [
      "Avoid touching the area for 2 hours",
      "Apply aloe vera if skin feels sensitive",
      "Skip active skincare for 12 hours",
    ],
    faqs: [
      { q: "Does threading hurt?", a: "There's a mild pinch, but it's quick and skin calms within minutes." },
    ],
  },
  "body-treatments": {
    duration: "60–90 minutes",
    suitableFor: ["Dull or dry skin", "Pre-bridal preparation", "Guests wanting instant radiance"],
    benefits: ["Full-body exfoliation & hydration", "Brightening actives", "Deep relaxation"],
    preparation: [
      "Shower before your appointment if possible",
      "Avoid shaving or waxing 24 hours before",
      "Wear comfortable clothing you can change out of",
    ],
    whatsIncluded: [
      "Dry brushing and full-body exfoliation",
      "Brightening or hydrating mask",
      "Massage and rich body butter finish",
    ],
    addOns: [
      { name: "Back facial upgrade", price: "PKR 4,500" },
      { name: "Foot reflexology (20 min)", price: "PKR 2,500" },
    ],
    results: "Softer, brighter, more even-toned skin from the first session.",
    aftercare: [
      "Drink plenty of water",
      "Avoid sun exposure for 24 hours",
      "Moisturize daily for lasting glow",
    ],
    faqs: [
      { q: "How often should I book a body treatment?", a: "Every 4–6 weeks maintains soft, luminous skin." },
    ],
  },
  "eyelash-extensions": {
    duration: "90–150 minutes",
    suitableFor: ["Everyday wear", "Brides & event guests", "Sensitive eyes (hypoallergenic glue available)"],
    benefits: ["Feather-weight, lash-by-lash application", "Custom mapped to eye shape", "Cuts daily mascara routine"],
    preparation: [
      "Come with clean, makeup-free eyes",
      "Skip caffeine before appointment (helps you stay still)",
      "Remove contact lenses before starting",
    ],
    whatsIncluded: [
      "Lash cleanse and eye pad prep",
      "Custom mapping to your eye shape",
      "Isolated, lash-by-lash application",
    ],
    addOns: [
      { name: "Lash lift & tint (natural lashes)", price: "PKR 5,500" },
      { name: "Refill within 3 weeks", price: "PKR 6,000" },
    ],
    results: "Full, feathery lashes that look natural on day one and can be maintained indefinitely.",
    aftercare: [
      "Keep lashes dry for 24 hours",
      "Avoid oil-based cleansers around the eyes",
      "Brush gently with a spoolie daily",
    ],
    faqs: [
      { q: "How long do extensions last?", a: "With refills every 2–3 weeks, extensions can be maintained indefinitely." },
      { q: "Will they damage my natural lashes?", a: "No — applied correctly and removed professionally, they're completely safe." },
    ],
  },
};

export const findServiceDetail = (slug: string) => serviceDetails[slug];
