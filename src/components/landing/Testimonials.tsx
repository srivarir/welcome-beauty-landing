import { Star } from "lucide-react";

const reviews = [
  { name: "Priya S.", role: "Bride", rating: 5, text: "My bridal makeup was a dream! Everyone kept asking who did it. Highly recommend." },
  { name: "Anita R.", role: "Regular client", rating: 5, text: "I've been coming here for years. Always clean, always friendly, always perfect." },
  { name: "Meera K.", role: "Skincare client", rating: 5, text: "My skin has never looked better. The facials are absolutely worth it." },
  { name: "Divya P.", role: "Reception look", rating: 5, text: "So patient and creative. The reception look was elegant and exactly what I wanted." },
];

export function Testimonials() {
  return (
    <section className="py-24 sm:py-32 bg-muted/40">
      <div className="container mx-auto px-5">
        <div className="max-w-2xl mx-auto text-center reveal">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Testimonials</p>
          <h2 className="mt-3 text-4xl sm:text-5xl font-display font-bold">
            Loved by our <span className="text-gradient-rose">clients</span>
          </h2>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reviews.map((r, i) => (
            <figure
              key={r.name}
              className="reveal rounded-2xl bg-card p-6 shadow-card hover:shadow-soft transition flex flex-col"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="flex gap-0.5 text-primary">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 text-sm text-foreground/80 italic flex-1">"{r.text}"</blockquote>
              <figcaption className="mt-5 pt-4 border-t border-border">
                <div className="font-semibold">{r.name}</div>
                <div className="text-xs text-muted-foreground">{r.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
