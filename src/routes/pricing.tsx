import { createFileRoute } from "@tanstack/react-router";
import { PriceMenu } from "@/components/salon/PriceMenu";
import { SectionHeading } from "@/components/salon/SectionHeading";
import banner5 from "@/assets/banner_5.webp";

export const Route = createFileRoute("/pricing")({
  component: PricingPage,
  head: () => ({
    meta: [
      { title: "Price Menu — Unique Beauty Salon Islamabad" },
      {
        name: "description",
        content:
          "Complete price list for every service at Unique Beauty Salon — hair, color, keratin, bridal, facials, nails and more. Search live.",
      },
      { property: "og:title", content: "Price Menu — Unique Beauty Salon" },
      { property: "og:description", content: "The complete menu, searchable. All prices in Pakistani Rupees." },
      { property: "og:url", content: "https://uniquebeautyclinic.com/pricing" },
      { property: "og:image", content: banner5 },
      { name: "twitter:image", content: banner5 },
    ],
    links: [{ rel: "canonical", href: "https://uniquebeautyclinic.com/pricing" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://uniquebeautyclinic.com/" },
            { "@type": "ListItem", position: 2, name: "Pricing", item: "https://uniquebeautyclinic.com/pricing" },
          ],
        }),
      },
    ],
  }),
});

function PricingPage() {
  return (
    <>
      <section className="border-b border-border bg-background px-6 pb-16 pt-40 lg:px-10 lg:pt-48">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            eyebrow="Pricing"
            title={<>The complete menu.</>}
            intro="Every price is honoured at the front desk. Search by treatment or expand a category."
          />
        </div>
      </section>
      <PriceMenu />
    </>
  );
}
