import { Heart, ShieldCheck, Sparkles, Tag } from "lucide-react";

const points = [
  { icon: Heart, title: "Experienced Beauticians", text: "A skilled team with years of hands-on experience." },
  { icon: ShieldCheck, title: "Hygienic Environment", text: "Sanitised tools and a fresh, spotless space every visit." },
  { icon: Sparkles, title: "Friendly Local Service", text: "Personal attention with the warmth of your neighbourhood." },
  { icon: Tag, title: "Affordable Pricing", text: "Premium care that fits beautifully into your budget." },
];

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-muted/40">
      <div className="container mx-auto px-5">
        <div className="max-w-2xl mx-auto text-center reveal">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">About Us</p>
          <h2 className="mt-3 text-4xl sm:text-5xl font-display font-bold">
            Where every visit feels like <span className="text-gradient-rose">self-care</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Welcome Beauty Parlour is your friendly neighbourhood salon, blending traditional
            care with modern techniques. From everyday grooming to your big day, we make sure
            you leave glowing.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {points.map((p, i) => (
            <div
              key={p.title}
              className="reveal rounded-2xl bg-card p-6 shadow-card hover:shadow-soft hover:-translate-y-1 transition"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="h-12 w-12 rounded-xl bg-gradient-rose flex items-center justify-center text-primary-foreground shadow-soft">
                <p.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
