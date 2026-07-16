import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Check, Clock, Leaf, Plus, Sparkles, Star, Users } from "lucide-react";
import { findService, relatedServices } from "@/lib/services-data";
import { findServiceDetail } from "@/lib/service-details";

export const Route = createFileRoute("/services/$slug")({
  component: ServiceDetail,
  loader: ({ params }) => {
    const service = findService(params.slug);
    if (!service) throw notFound();
    const detail = findServiceDetail(params.slug);
    return { service, related: relatedServices(params.slug), detail };
  },
  head: ({ params, loaderData }) => {
    const s = loaderData?.service;
    const d = loaderData?.detail;
    const scripts: { type: string; children: string }[] = [];
    if (s) {
      scripts.push({
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: s.title,
          description: s.short,
          provider: { "@type": "BeautySalon", name: "Unique Beauty Salon" },
          areaServed: "Islamabad",
          offers: s.items.map((i) => ({
            "@type": "Offer",
            name: i.name,
            price: i.price.replace(/[^0-9]/g, ""),
            priceCurrency: "PKR",
          })),
        }),
      });
      scripts.push({
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://uniquebeautyclinic.com/" },
            { "@type": "ListItem", position: 2, name: "Services", item: "https://uniquebeautyclinic.com/services" },
            { "@type": "ListItem", position: 3, name: s.title, item: `https://uniquebeautyclinic.com/services/${params.slug}` },
          ],
        }),
      });
      if (d?.faqs?.length) {
        scripts.push({
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: d.faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        });
      }
    }
    return {
      meta: [
        { title: s ? `${s.title} — Unique Beauty Salon Islamabad` : "Service — Unique Beauty Salon" },
        {
          name: "description",
          content: s?.short ?? "Luxury beauty service at Unique Beauty Salon, Islamabad.",
        },
        { property: "og:title", content: s?.title ?? "Unique Beauty Salon" },
        { property: "og:description", content: s?.short ?? "" },
        { property: "og:url", content: `https://uniquebeautyclinic.com/services/${params.slug}` },
        { property: "og:type", content: "article" },
        ...(s ? [{ property: "og:image", content: s.image } as const] : []),
        ...(s ? [{ name: "twitter:image", content: s.image } as const] : []),
      ],
      links: [{ rel: "canonical", href: `https://uniquebeautyclinic.com/services/${params.slug}` }],
      scripts,
    };
  },
});

function ServiceDetail() {
  const { service, related, detail } = Route.useLoaderData();

  return (
    <article className="bg-background">
      <section className="relative min-h-[70vh] overflow-hidden pt-24">
        <div className="group absolute inset-0">
          <img
            src={service.image}
            alt={service.title}
            fetchPriority="high"
            className="h-full w-full object-cover"
          />
          {service.hoverImage && (
            <img
              src={service.hoverImage}
              alt=""
              aria-hidden="true"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/50" />
        </div>
        <div className="relative z-10 mx-auto flex max-w-7xl flex-col justify-end px-6 pb-16 pt-32 lg:px-10 lg:pt-40">
          <Link
            to="/services"
            className="mb-8 inline-flex w-fit items-center gap-2 text-[0.65rem] uppercase tracking-[0.32em] text-primary hover:text-foreground"
          >
            <ArrowLeft className="h-3 w-3" /> All services
          </Link>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="label-eyebrow"
          >
            Ritual {service.n}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] as const }}
            className="mt-4 font-display text-4xl italic leading-[0.95] text-foreground sm:text-5xl md:text-7xl lg:text-8xl"
          >
            {service.title}
          </motion.h1>
          <p className="mt-6 max-w-2xl text-base font-light text-foreground/85 sm:text-lg">{service.long}</p>

          {detail && (
            <div className="mt-8 flex flex-wrap items-center gap-3 text-[0.65rem] uppercase tracking-[0.28em] text-foreground/80">
              <span className="inline-flex items-center gap-2 border border-border bg-background/40 px-4 py-2 backdrop-blur">
                <Clock className="h-3.5 w-3.5 text-primary" /> {detail.duration}
              </span>
              <span className="inline-flex items-center gap-2 border border-border bg-background/40 px-4 py-2 backdrop-blur">
                <Sparkles className="h-3.5 w-3.5 text-primary" /> From {service.from}
              </span>
            </div>
          )}
        </div>
      </section>

      <section className="border-t border-border px-6 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="label-eyebrow">The ritual</p>
            <h2 className="mt-6 font-display text-3xl italic text-foreground sm:text-4xl md:text-5xl">
              What to expect.
            </h2>
            <ul className="mt-8 space-y-4">
              {service.ritual.map((r: string) => (
                <li key={r} className="flex items-start gap-4 text-base font-light text-foreground/80">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-primary" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>

            {detail && (
              <div className="mt-12 space-y-10">
                <div>
                  <p className="label-eyebrow">Benefits</p>
                  <ul className="mt-5 space-y-3">
                    {detail.benefits.map((b: string) => (
                      <li key={b} className="flex items-start gap-3 text-sm font-light text-foreground/80">
                        <Sparkles className="mt-1 h-3.5 w-3.5 shrink-0 text-primary" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="label-eyebrow">Who it's for</p>
                  <ul className="mt-5 space-y-3">
                    {detail.suitableFor.map((s: string) => (
                      <li key={s} className="flex items-start gap-3 text-sm font-light text-foreground/80">
                        <Users className="mt-1 h-3.5 w-3.5 shrink-0 text-primary" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="label-eyebrow">Aftercare</p>
                  <ul className="mt-5 space-y-3">
                    {detail.aftercare.map((a: string) => (
                      <li key={a} className="flex items-start gap-3 text-sm font-light text-foreground/80">
                        <Check className="mt-1 h-3.5 w-3.5 shrink-0 text-primary" />
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-7">
            <p className="label-eyebrow">The menu</p>
            <h2 className="mt-6 font-display text-3xl italic text-foreground sm:text-4xl md:text-5xl">
              Complete price list.
            </h2>

            {detail?.whatsIncluded?.length ? (
              <div className="mt-10">
                <p className="label-eyebrow">What's included</p>
                <ul className="mt-5 space-y-3">
                  {detail.whatsIncluded.map((w: string) => (
                    <li key={w} className="flex items-start gap-3 text-sm font-light text-foreground/80">
                      <Check className="mt-1 h-3.5 w-3.5 shrink-0 text-primary" />
                      <span>{w}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {detail?.preparation?.length ? (
              <div className="mt-10">
                <p className="label-eyebrow">Before your visit</p>
                <ul className="mt-5 space-y-3">
                  {detail.preparation.map((p: string) => (
                    <li key={p} className="flex items-start gap-3 text-sm font-light text-foreground/80">
                      <Leaf className="mt-1 h-3.5 w-3.5 shrink-0 text-primary" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {detail?.results ? (
              <div className="mt-10 border-l-2 border-primary/60 pl-5">
                <p className="label-eyebrow inline-flex items-center gap-2">
                  <Star className="h-3 w-3 text-primary" /> Results
                </p>
                <p className="mt-3 text-base font-light italic leading-relaxed text-foreground/85">
                  {detail.results}
                </p>
              </div>
            ) : null}

            <h3 className="mt-12 font-display text-2xl italic text-foreground sm:text-3xl">Pricing.</h3>
            <div className="mt-8 divide-y divide-border border-y border-border">
              {service.items.map((i: { name: string; price: string }) => (
                <div key={i.name} className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-4 py-5">
                  <span className="text-base font-light text-foreground/85">{i.name}</span>
                  <span className="shrink-0 text-sm uppercase tracking-[0.24em] text-primary">{i.price}</span>
                </div>
              ))}
            </div>

            {detail?.addOns?.length ? (
              <div className="mt-10">
                <p className="label-eyebrow">Popular add-ons</p>
                <div className="mt-5 divide-y divide-border border-y border-border">
                  {detail.addOns.map((a: { name: string; price: string }) => (
                    <div key={a.name} className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-4 py-4">
                      <span className="inline-flex items-start gap-2 text-sm font-light text-foreground/85">
                        <Plus className="mt-1 h-3.5 w-3.5 shrink-0 text-primary" />
                        {a.name}
                      </span>
                      <span className="shrink-0 text-xs uppercase tracking-[0.24em] text-primary">{a.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}

            <Link
              to="/booking"
              className="btn-3d mt-8 inline-flex border border-primary bg-primary px-8 py-4 text-xs uppercase tracking-[0.32em] text-primary-foreground sm:px-10"
            >
              Book this service
            </Link>

            {detail?.faqs?.length ? (
              <div className="mt-14">
                <p className="label-eyebrow">Frequently asked</p>
                <h3 className="mt-4 font-display text-2xl italic text-foreground sm:text-3xl">Good to know.</h3>
                <div className="mt-6 divide-y divide-border border-y border-border">
                  {detail.faqs.map((f: { q: string; a: string }) => (
                    <details key={f.q} className="group py-5">
                      <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-base font-light text-foreground/90">
                        <span>{f.q}</span>
                        <span className="mt-1 shrink-0 text-primary transition-transform group-open:rotate-45">+</span>
                      </summary>
                      <p className="mt-3 text-sm font-light leading-relaxed text-muted-foreground">{f.a}</p>
                    </details>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-surface/40 px-6 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-4">
            {service.gallery.map((src: string, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.08 }}
                className="aspect-[4/5] overflow-hidden"
              >
                <img
                  src={src}
                  alt={`${service.title} — ${i + 1}`}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-[1600ms] hover:scale-105"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-background px-6 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="label-eyebrow">You may also love</p>
          <h2 className="mt-6 font-display text-3xl italic text-foreground sm:text-4xl md:text-5xl">
            Related rituals.
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r: typeof service) => (
              <Link
                key={r.slug}
                to="/services/$slug"
                params={{ slug: r.slug }}
                className="group block border border-border bg-surface/40 transition-colors hover:border-primary/50"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={r.image}
                    alt={r.title}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-[1600ms] group-hover:scale-105"
                  />
                  {r.hoverImage && (
                    <img
                      src={r.hoverImage}
                      alt=""
                      aria-hidden="true"
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                    />
                  )}
                </div>
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3 p-6">
                  <div className="min-w-0">
                    <h3 className="truncate font-display text-xl italic text-foreground group-hover:text-primary">
                      {r.title}
                    </h3>
                    <p className="mt-2 text-[0.65rem] uppercase tracking-[0.28em] text-muted-foreground">
                      From {r.from}
                    </p>
                  </div>
                  <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-primary" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
