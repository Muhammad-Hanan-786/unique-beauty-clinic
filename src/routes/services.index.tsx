import { createFileRoute } from "@tanstack/react-router";
import { ServicesGrid } from "@/components/salon/ServicesGrid";
import { SectionHeading } from "@/components/salon/SectionHeading";
import { services } from "@/lib/services-data";
import banner4 from "@/assets/banner_4.webp";

export const Route = createFileRoute("/services/")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Services — Hair, Bridal, Skincare, Nails | Unique Beauty Salon" },
      {
        name: "description",
        content:
          "Twelve disciplines — precision hair cuts, balayage, keratin, bridal makeup, hydra facials, nail extensions, waxing, threading and more.",
      },
      { property: "og:title", content: "Services — Unique Beauty Salon" },
      { property: "og:description", content: "Twelve luxury beauty disciplines in one Islamabad studio." },
      { property: "og:url", content: "https://uniquebeautyclinic.com/services" },
      { property: "og:image", content: banner4 },
      { name: "twitter:image", content: banner4 },
    ],
    links: [{ rel: "canonical", href: "https://uniquebeautyclinic.com/services" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://uniquebeautyclinic.com/" },
            { "@type": "ListItem", position: 2, name: "Services", item: "https://uniquebeautyclinic.com/services" },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Services at Unique Beauty Salon",
          itemListElement: services.map((s, i) => ({
            "@type": "ListItem",
            position: i + 1,
            url: `/services/${s.slug}`,
            name: s.title,
          })),
        }),
      },
    ],
  }),
});

function ServicesPage() {
  return (
    <section className="bg-background px-6 pb-32 pt-40 lg:px-10 lg:pt-48">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Services"
          title={<>Twelve rituals. One standard.</>}
          intro="Every service begins with a consultation and ends with a follow-up. Click any category for the full price list and what to expect."
        />
        <div className="mt-20">
          <ServicesGrid />
        </div>
      </div>
    </section>
  );
}
