import { createFileRoute } from "@tanstack/react-router";
import { Bridal } from "@/components/salon/Bridal";
import { SectionHeading } from "@/components/salon/SectionHeading";
import bridal1 from "@/assets/bridal-1.jpg";

export const Route = createFileRoute("/bridal")({
  component: BridalPage,
  head: () => ({
    meta: [
      { title: "Bridal Packages — Unique Beauty Salon Islamabad" },
      {
        name: "description",
        content:
          "Islamabad's cinematic bridal studio. Airbrush and HD makeup, hair styling, dupatta setting for Nikah, Walima, Barat, Mehndi and Engagement.",
      },
      { property: "og:title", content: "Bridal — Unique Beauty Salon" },
      { property: "og:description", content: "Her day, composed like a film." },
      { property: "og:url", content: "https://uniquebeautyclinic.com/bridal" },
      { property: "og:image", content: bridal1 },
      { name: "twitter:image", content: bridal1 },
    ],
    links: [{ rel: "canonical", href: "https://uniquebeautyclinic.com/bridal" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://uniquebeautyclinic.com/" },
            { "@type": "ListItem", position: 2, name: "Bridal", item: "https://uniquebeautyclinic.com/bridal" },
          ],
        }),
      },
    ],
  }),
});

function BridalPage() {
  return (
    <>
      <section className="border-b border-border bg-background px-6 pb-16 pt-40 lg:px-10 lg:pt-48">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Bridal"
            title={<>Her day, composed like a film.</>}
            intro="From Mehndi to Walima, our bridal team choreographs every look with airbrush, HD or classic techniques — designed to photograph beautifully and last from dawn to midnight."
          />
        </div>
      </section>
      <Bridal />
    </>
  );
}
