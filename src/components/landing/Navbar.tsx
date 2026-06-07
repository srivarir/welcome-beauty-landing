import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#offers", label: "Offers" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-background/85 backdrop-blur-md shadow-card" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between px-5 py-4">
        <a href="#home" className="flex items-center gap-2">
          <span className="text-2xl font-display font-bold text-gradient-rose">
            {siteConfig.name.split(" ")[0]}
          </span>
          <span className="hidden sm:inline text-sm tracking-wide text-muted-foreground">
            Beauty Parlour
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href={`tel:${siteConfig.phone}`}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-rose px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft hover:opacity-90 transition"
          >
            <Phone className="h-4 w-4" /> Call Now
          </a>
        </div>

        <button
          className="md:hidden p-2 rounded-lg hover:bg-accent/40"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border">
          <div className="container mx-auto px-5 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2 text-base font-medium text-foreground/80 hover:text-primary"
              >
                {l.label}
              </a>
            ))}
            <a
              href={`tel:${siteConfig.phone}`}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-rose px-5 py-3 text-sm font-semibold text-primary-foreground"
            >
              <Phone className="h-4 w-4" /> Call Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
