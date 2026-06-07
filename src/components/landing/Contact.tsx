import { Phone, MapPin, Clock, MessageCircle, Mail } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32 bg-muted/40">
      <div className="container mx-auto px-5">
        <div className="max-w-2xl mx-auto text-center reveal">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Contact</p>
          <h2 className="mt-3 text-4xl sm:text-5xl font-display font-bold">
            Let's get you <span className="text-gradient-rose">glowing</span>
          </h2>
          <p className="mt-6 text-muted-foreground">
            Walk in, call, or message us on WhatsApp — we'd love to hear from you.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-2 gap-8">
          <div className="reveal grid sm:grid-cols-2 gap-5">
            <a href={`tel:${siteConfig.phone}`} className="rounded-2xl bg-card p-6 shadow-card hover:shadow-soft transition flex gap-4">
              <div className="h-12 w-12 rounded-xl bg-secondary flex items-center justify-center text-primary"><Phone className="h-6 w-6" /></div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Call us</div>
                <div className="font-semibold mt-0.5">{siteConfig.phone}</div>
              </div>
            </a>
            <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noreferrer" className="rounded-2xl bg-card p-6 shadow-card hover:shadow-soft transition flex gap-4">
              <div className="h-12 w-12 rounded-xl bg-secondary flex items-center justify-center text-primary"><MessageCircle className="h-6 w-6" /></div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">WhatsApp</div>
                <div className="font-semibold mt-0.5">Chat with us</div>
              </div>
            </a>
            <div className="rounded-2xl bg-card p-6 shadow-card flex gap-4">
              <div className="h-12 w-12 rounded-xl bg-secondary flex items-center justify-center text-primary"><MapPin className="h-6 w-6" /></div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Address</div>
                <div className="font-semibold mt-0.5">{siteConfig.address}</div>
              </div>
            </div>
            <div className="rounded-2xl bg-card p-6 shadow-card flex gap-4">
              <div className="h-12 w-12 rounded-xl bg-secondary flex items-center justify-center text-primary"><Clock className="h-6 w-6" /></div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Hours</div>
                <div className="font-semibold mt-0.5">{siteConfig.hours}</div>
              </div>
            </div>
            <a href={`mailto:${siteConfig.email}`} className="sm:col-span-2 rounded-2xl bg-card p-6 shadow-card hover:shadow-soft transition flex gap-4">
              <div className="h-12 w-12 rounded-xl bg-secondary flex items-center justify-center text-primary"><Mail className="h-6 w-6" /></div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Email</div>
                <div className="font-semibold mt-0.5">{siteConfig.email}</div>
              </div>
            </a>
          </div>

          <div className="reveal rounded-3xl overflow-hidden shadow-card aspect-square lg:aspect-auto lg:min-h-[420px]">
            <iframe
              src={siteConfig.mapsEmbedSrc}
              title="Location map"
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
