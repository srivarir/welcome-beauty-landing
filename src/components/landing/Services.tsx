import { Scissors, Sparkles, Crown, Flower2 } from "lucide-react";
import { siteConfig } from "@/config/site";

const groups = [
  { icon: Scissors, title: "Hair Services", items: siteConfig.services.slice(0, 4) },
  { icon: Sparkles, title: "Skin Care", items: siteConfig.services.slice(4, 8) },
  { icon: Crown, title: "Bridal Services", items: siteConfig.services.slice(8, 12) },
  { icon: Flower2, title: "Beauty Services", items: siteConfig.services.slice(12, 16) },
];

export function Services() {
  return (
    <section id="services" className="py-24 sm:py-32">
      <div className="container mx-auto px-5">
        <div className="max-w-2xl mx-auto text-center reveal">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Our Services</p>
          <h2 className="mt-3 text-4xl sm:text-5xl font-display font-bold">
            A treatment for every <span className="text-gradient-rose">mood & moment</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            From everyday glow-ups to bridal looks, our menu has everything you need.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {groups.map((g, i) => (
            <article
              key={g.title}
              className="reveal group relative overflow-hidden rounded-3xl bg-card p-7 shadow-card hover:shadow-soft transition"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-gradient-rose opacity-10 group-hover:opacity-25 transition" />
              <div className="h-14 w-14 rounded-2xl bg-gradient-rose flex items-center justify-center text-primary-foreground shadow-soft">
                <g.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-5 text-xl font-semibold">{g.title}</h3>
              <ul className="mt-4 space-y-2">
                {g.items.map((it) => (
                  <li key={it} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {it}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
