import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/salon/About";
import { Ritual } from "@/components/salon/Ritual";
import { Team } from "@/components/salon/Team";
import { SectionHeading } from "@/components/salon/SectionHeading";
import banner2 from "@/assets/banner_2.webp";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Us — Unique Beauty Salon Islamabad" },
      {
        name: "description",
        content:
          "The story, philosophy and team behind Unique Beauty Salon in G-9 Markaz, Islamabad — a studio devoted to quiet luxury.",
      },
      { property: "og:title", content: "About — Unique Beauty Salon" },
      { property: "og:description", content: "A studio devoted to quiet luxury. Meet the people, the philosophy, the rituals." },
      { property: "og:url", content: "https://uniquebeautyclinic.com/about" },
      { property: "og:image", content: banner2 },
      { name: "twitter:image", content: banner2 },
    ],
    links: [{ rel: "canonical", href: "https://uniquebeautyclinic.com/about" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://uniquebeautyclinic.com/" },
            { "@type": "ListItem", position: 2, name: "About", item: "https://uniquebeautyclinic.com/about" },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "About Unique Beauty Salon",
          description: "Islamabad's editorial studio for hair, bridal and beauty.",
          url: "https://uniquebeautyclinic.com/about",
        }),
      },
    ],
  }),
});

function AboutPage() {
  return (
    <>
      <section className="border-b border-border bg-background px-6 pb-16 pt-40 lg:px-10 lg:pt-48">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="About — 01"
            title={<>The studio, the story, the standard.</>}
            intro="Unique Beauty Salon is Islamabad's editorial studio for hair, bridal and beauty. Founded on a single principle: beauty deserves patience."
          />
        </div>
      </section>
      <About />
      <Ritual />
      <Team />
    </>
  );
}
