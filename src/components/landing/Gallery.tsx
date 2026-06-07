import { useState } from "react";
import { X } from "lucide-react";
import bridal from "@/assets/gallery-bridal.jpg";
import facial from "@/assets/gallery-facial.jpg";
import hair from "@/assets/gallery-hair.jpg";
import nails from "@/assets/gallery-nails.jpg";
import wax from "@/assets/gallery-wax.jpg";
import bride2 from "@/assets/gallery-bride2.jpg";

const images = [
  { src: bridal, alt: "Makeup palette and brushes" },
  { src: hair, alt: "Hair styling" },
  { src: facial, alt: "Spa treatment" },
  { src: nails, alt: "Rose gold manicure" },
  { src: bride2, alt: "Bridal look" },
  { src: wax, alt: "Spa hygiene" },
];

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-muted/40">
      <div className="container mx-auto px-5">
        <div className="max-w-2xl mx-auto text-center reveal">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Gallery</p>
          <h2 className="mt-3 text-4xl sm:text-5xl font-display font-bold">
            A glimpse of our <span className="text-gradient-rose">work</span>
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`reveal group relative overflow-hidden rounded-2xl shadow-card focus:outline-none focus:ring-2 focus:ring-primary ${
                i === 0 ? "row-span-2 col-span-2 md:col-span-1 md:row-span-2" : ""
              }`}
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover aspect-square group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/15 transition" />
            </button>
          ))}
        </div>
      </div>

      {active !== null && (
        <div
          onClick={() => setActive(null)}
          className="fixed inset-0 z-50 bg-foreground/80 backdrop-blur-sm flex items-center justify-center p-4 animate-float-up"
        >
          <button
            className="absolute top-5 right-5 h-10 w-10 rounded-full bg-card/90 flex items-center justify-center"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
          <img
            src={images[active].src}
            alt={images[active].alt}
            className="max-h-[85vh] max-w-[95vw] rounded-2xl shadow-soft"
          />
        </div>
      )}
    </section>
  );
}
