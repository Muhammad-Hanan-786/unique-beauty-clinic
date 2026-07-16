import { createFileRoute } from "@tanstack/react-router";
import { Contact } from "@/components/salon/Contact";
import { FAQ } from "@/components/salon/FAQ";
import { SectionHeading } from "@/components/salon/SectionHeading";
import banner2 from "@/assets/banner_2.webp";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact & Book — Unique Beauty Salon Islamabad" },
      {
        name: "description",
        content:
          "Book at Unique Beauty Salon, G-9 Markaz Islamabad. Call +92 318 5697460, WhatsApp, or send an appointment request. Open daily 10 AM – 9 PM.",
      },
      { property: "og:title", content: "Contact — Unique Beauty Salon" },
      { property: "og:description", content: "Begin your ritual. Booking, address, hours." },
      { property: "og:url", content: "https://uniquebeautyclinic.com/contact" },
      { property: "og:image", content: banner2 },
      { name: "twitter:image", content: banner2 },
    ],
    links: [{ rel: "canonical", href: "https://uniquebeautyclinic.com/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://uniquebeautyclinic.com/" },
            { "@type": "ListItem", position: 2, name: "Contact", item: "https://uniquebeautyclinic.com/contact" },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            { "@type": "Question", name: "How do I book an appointment?", acceptedAnswer: { "@type": "Answer", text: "Book via the form, call +92 318 5697460, or message on WhatsApp." } },
            { "@type": "Question", name: "What are your opening hours?", acceptedAnswer: { "@type": "Answer", text: "Open daily 10:00 AM to 9:00 PM." } },
            { "@type": "Question", name: "How far in advance should I book bridal?", acceptedAnswer: { "@type": "Answer", text: "4–6 weeks for bridal packages." } },
          ],
        }),
      },
    ],
  }),
});

function ContactPage() {
  return (
    <>
      <section className="border-b border-border bg-background px-6 pb-16 pt-40 lg:px-10 lg:pt-48">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Contact"
            title={<>Begin your <span className="text-primary">ritual.</span></>}
            intro="Book online, call the studio, or message us on WhatsApp. Every appointment begins with a private consultation."
          />
        </div>
      </section>
      <Contact />
      <FAQ />
    </>
  );
}
