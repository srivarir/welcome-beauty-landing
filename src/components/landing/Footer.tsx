import { Instagram, Facebook, Youtube, Phone, MapPin } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-5 py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <h3 className="text-2xl font-display font-bold text-gradient-rose">{siteConfig.name}</h3>
          <p className="mt-3 text-sm text-background/70">{siteConfig.shortDescription}</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-background/90">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm text-background/70">
            {["About", "Services", "Gallery", "Offers", "Contact"].map((l) => (
              <li key={l}><a className="hover:text-primary transition" href={`#${l.toLowerCase()}`}>{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-background/90">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-background/70">
            <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 text-primary" /> {siteConfig.phone}</li>
            <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" /> {siteConfig.address}</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-background/90">Follow Us</h4>
          <div className="mt-4 flex gap-3">
            {[
              { href: siteConfig.socials.instagram, Icon: Instagram, label: "Instagram" },
              { href: siteConfig.socials.facebook, Icon: Facebook, label: "Facebook" },
              { href: siteConfig.socials.youtube, Icon: Youtube, label: "YouTube" },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="h-10 w-10 rounded-full bg-background/10 hover:bg-gradient-rose flex items-center justify-center transition"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-background/10">
        <div className="container mx-auto px-5 py-5 text-center text-xs text-background/60">
          © {year} {siteConfig.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
