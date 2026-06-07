import { Award, Leaf, ShieldCheck, Wallet, UserCheck, Smile } from "lucide-react";

const items = [
  { icon: Award, title: "Experienced Professionals", text: "Trained beauticians who genuinely care." },
  { icon: Leaf, title: "Premium Products", text: "Trusted, skin-friendly brands only." },
  { icon: ShieldCheck, title: "Hygienic Environment", text: "Sterilised tools, single-use where it matters." },
  { icon: Wallet, title: "Affordable Packages", text: "Honest pricing with seasonal offers." },
  { icon: UserCheck, title: "Personalised Service", text: "Looks tailored to your features & lifestyle." },
  { icon: Smile, title: "Customer Satisfaction", text: "Hundreds of smiles, and counting." },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container mx-auto px-5">
        <div className="max-w-2xl mx-auto text-center reveal">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Why Choose Us</p>
          <h2 className="mt-3 text-4xl sm:text-5xl font-display font-bold">
            Reasons our clients <span className="text-gradient-rose">keep coming back</span>
          </h2>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it, i) => (
            <div
              key={it.title}
              className="reveal flex gap-4 rounded-2xl bg-card p-6 shadow-card hover:shadow-soft transition"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className="shrink-0 h-12 w-12 rounded-xl bg-secondary flex items-center justify-center text-primary">
                <it.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold">{it.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{it.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
