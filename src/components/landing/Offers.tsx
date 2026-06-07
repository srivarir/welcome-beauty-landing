import { Crown, Gift, CalendarHeart } from "lucide-react";
import { siteConfig } from "@/config/site";

const offers = [
  {
    icon: Crown,
    badge: "Most Popular",
    title: "Bridal Package",
    price: "₹15,000",
    perks: ["Pre-bridal care", "Bridal makeup & hair", "Saree draping", "Touch-up kit"],
  },
  {
    icon: Gift,
    badge: "Limited",
    title: "Festival Offer",
    price: "₹1,999",
    perks: ["Gold facial", "Threading", "Pedicure", "Hair spa"],
  },
  {
    icon: CalendarHeart,
    badge: "Monthly",
    title: "Beauty Membership",
    price: "₹2,499",
    perks: ["2 facials", "1 hair spa", "Unlimited threading", "10% off add-ons"],
  },
];

export function Offers() {
  return (
    <section id="offers" className="py-24 sm:py-32">
      <div className="container mx-auto px-5">
        <div className="max-w-2xl mx-auto text-center reveal">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Special Offers</p>
          <h2 className="mt-3 text-4xl sm:text-5xl font-display font-bold">
            Packages made with <span className="text-gradient-rose">love</span>
          </h2>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {offers.map((o, i) => (
            <div
              key={o.title}
              className="reveal relative rounded-3xl bg-card p-8 shadow-card hover:shadow-soft hover:-translate-y-1 transition"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <span className="absolute top-5 right-5 rounded-full bg-secondary px-3 py-1 text-[11px] font-semibold text-secondary-foreground">
                {o.badge}
              </span>
              <div className="h-14 w-14 rounded-2xl bg-gradient-rose flex items-center justify-center text-primary-foreground shadow-soft">
                <o.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-5 text-2xl font-display font-semibold">{o.title}</h3>
              <p className="mt-2 text-3xl font-bold text-gradient-rose">{o.price}</p>
              <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                {o.perks.map((p) => (
                  <li key={p} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" /> {p}
                  </li>
                ))}
              </ul>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}?text=Hi%2C%20I%27m%20interested%20in%20the%20${encodeURIComponent(o.title)}`}
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex w-full justify-center items-center gap-2 rounded-full bg-gradient-rose px-5 py-3 text-sm font-semibold text-primary-foreground shadow-soft hover:opacity-90 transition"
              >
                Book This Package
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
