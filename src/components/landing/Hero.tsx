import heroImg from "@/assets/hero-salon.jpg";
import { siteConfig } from "@/config/site";
import { Calendar, Phone, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] flex items-center overflow-hidden">
      <img
        src={heroImg}
        alt="Elegant beauty parlour interior"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background/70 via-background/40 to-primary/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

      <div className="container mx-auto px-5 relative z-10 pt-28 pb-16">
        <div className="max-w-2xl animate-float-up">
          <span className="inline-flex items-center gap-2 rounded-full bg-card/80 backdrop-blur px-4 py-1.5 text-xs font-medium text-primary shadow-card mb-6">
            <Sparkles className="h-3.5 w-3.5" /> Premium Local Beauty Care
          </span>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-bold leading-[1.05] text-foreground">
            {siteConfig.name.split(" ").slice(0, -1).join(" ")}{" "}
            <span className="text-gradient-rose">{siteConfig.name.split(" ").slice(-1)}</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-foreground/80 max-w-xl">
            {siteConfig.tagline} — with the care, expertise and warmth of your trusted neighbourhood salon.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=Hi%20I%20would%20like%20to%20book%20an%20appointment`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-rose px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-soft hover:scale-[1.02] active:scale-100 transition"
            >
              <Calendar className="h-5 w-5" /> Book Appointment
            </a>
            <a
              href={`tel:${siteConfig.phone}`}
              className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-card/70 backdrop-blur px-7 py-3.5 text-base font-semibold text-primary hover:bg-card transition"
            >
              <Phone className="h-5 w-5" /> Call Now
            </a>
          </div>

          <dl className="mt-12 grid grid-cols-3 max-w-md gap-6">
            {[
              { k: "10+", v: "Years" },
              { k: "5k+", v: "Happy Clients" },
              { k: "20+", v: "Services" },
            ].map((s) => (
              <div key={s.v}>
                <dt className="text-3xl font-display font-bold text-gradient-rose">{s.k}</dt>
                <dd className="text-sm text-muted-foreground mt-1">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
