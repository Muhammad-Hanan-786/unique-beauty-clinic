import { createFileRoute } from "@tanstack/react-router";
import { Team } from "@/components/salon/Team";
import { SectionHeading } from "@/components/salon/SectionHeading";
import banner1 from "@/assets/banner_1.jpeg";

export const Route = createFileRoute("/team")({
  component: TeamPage,
  head: () => ({
    meta: [
      { title: "Our Team — Stylists & Artists | Unique Beauty Salon" },
      {
        name: "description",
        content:
          "Meet the internationally-trained hair, color, skin and bridal artists at Unique Beauty Salon, Islamabad.",
      },
      { property: "og:title", content: "Team — Unique Beauty Salon" },
      { property: "og:description", content: "A studio of specialists — trained internationally, obsessed with craft." },
      { property: "og:url", content: "https://uniquebeautyclinic.com/team" },
      { property: "og:image", content: banner1 },
      { name: "twitter:image", content: banner1 },
    ],
    links: [{ rel: "canonical", href: "https://uniquebeautyclinic.com/team" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://uniquebeautyclinic.com/" },
            { "@type": "ListItem", position: 2, name: "Team", item: "https://uniquebeautyclinic.com/team" },
          ],
        }),
      },
    ],
  }),
});

function TeamPage() {
  return (
    <>
      <section className="border-b border-border bg-background px-6 pb-16 pt-40 lg:px-10 lg:pt-48">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Team"
            title={<>Meet the artists.</>}
            intro="A studio of specialists — trained internationally, obsessed with craft. Every service is performed by a named artist, not a rotating chair."
          />
        </div>
      </section>
      <Team />
    </>
  );
}
