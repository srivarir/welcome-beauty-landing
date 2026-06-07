import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { About } from "@/components/landing/About";
import { Services } from "@/components/landing/Services";
import { Gallery } from "@/components/landing/Gallery";
import { WhyChooseUs } from "@/components/landing/WhyChooseUs";
import { Testimonials } from "@/components/landing/Testimonials";
import { Offers } from "@/components/landing/Offers";
import { Contact } from "@/components/landing/Contact";
import { Footer } from "@/components/landing/Footer";
import { FloatingActions } from "@/components/landing/FloatingActions";
import { useReveal } from "@/hooks/use-reveal";
import { siteConfig } from "@/config/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${siteConfig.name} — ${siteConfig.tagline}` },
      { name: "description", content: siteConfig.shortDescription },
      { property: "og:title", content: `${siteConfig.name} — ${siteConfig.tagline}` },
      { property: "og:description", content: siteConfig.shortDescription },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700;800&family=Poppins:wght@300;400;500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BeautySalon",
          name: siteConfig.name,
          description: siteConfig.shortDescription,
          telephone: siteConfig.phone,
          address: siteConfig.address,
          openingHours: siteConfig.hours,
        }),
      },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  useReveal();
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <WhyChooseUs />
      <Testimonials />
      <Offers />
      <Contact />
      <Footer />
      <FloatingActions />
    </main>
  );
}
