import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useLayoutEffect, type ReactNode } from "react";
import { Toaster } from "sonner";

import appCss from "../styles.css?url";
import { Nav } from "@/components/salon/Nav";
import { Footer } from "@/components/salon/Footer";
import { WhatsAppFAB, MobileBookingBar } from "@/components/salon/Floats";
import { Loader } from "@/components/salon/Loader";
import { PageTransition } from "@/components/salon/PageTransition";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="label-eyebrow mb-6">404 — Not Found</p>
        <h1 className="font-display text-6xl italic text-foreground">Lost in the salon.</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          The page you are looking for has slipped away.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center border border-primary/60 px-8 py-3 text-xs uppercase tracking-[0.32em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Return home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-3xl italic text-foreground">
          Something interrupted the ritual.
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">Please refresh to continue.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="border border-primary/60 px-6 py-2 text-xs uppercase tracking-[0.3em] text-primary hover:bg-primary hover:text-primary-foreground"
          >
            Try again
          </button>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "author", content: "Unique Beauty Salon" },
      { name: "theme-color", content: "#f5f0e0" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Unique Beauty Salon" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "dns-prefetch", href: "https://wa.me" },
      { rel: "dns-prefetch", href: "https://www.instagram.com" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Fira+Sans:wght@300;400;500;600&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BeautySalon",
          name: "Unique Beauty Salon",
          telephone: "+92 318 5697460",
          address: {
            "@type": "PostalAddress",
            streetAddress: "2nd Floor, United Plaza, G-9 Markaz",
            addressLocality: "Islamabad",
            addressCountry: "PK",
          },
          openingHours: "Mo-Su 10:00-21:00",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.6",
            reviewCount: "2000",
          },
          priceRange: "$$",
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;
  useIsoLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="relative min-h-screen bg-background text-foreground">
        <div className="film-grain" aria-hidden />
        <Loader />
        <Nav />
        <main>
          <PageTransition>
            <Outlet />
          </PageTransition>
        </main>
        <Footer />
        <WhatsAppFAB />
        <MobileBookingBar />
        <Toaster theme="light" position="bottom-center" />
      </div>
    </QueryClientProvider>
  );
}
