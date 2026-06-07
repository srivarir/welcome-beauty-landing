import { useState, type FormEvent } from "react";
import { Phone, MapPin, Clock, MessageCircle, Mail, CalendarDays } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    time: "",
  });

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = `Appointment Request from ${form.name}`;
    const body = [
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Service: ${form.service}`,
      `Preferred Time: ${form.time}`,
    ].join("\n");
    window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

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
          {/* Contact cards */}
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

          {/* Appointment form */}
          <div className="reveal">
            <div className="rounded-3xl bg-card p-8 shadow-card">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-xl bg-gradient-rose flex items-center justify-center text-primary-foreground shadow-soft">
                  <CalendarDays className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold">Book an Appointment</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="appt-name" className="block text-sm font-medium text-muted-foreground mb-1.5">Full Name</label>
                  <input
                    id="appt-name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="appt-phone" className="block text-sm font-medium text-muted-foreground mb-1.5">Phone Number</label>
                  <input
                    id="appt-phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div>
                  <label htmlFor="appt-service" className="block text-sm font-medium text-muted-foreground mb-1.5">Service</label>
                  <select
                    id="appt-service"
                    required
                    value={form.service}
                    onChange={(e) => setForm((f) => ({ ...f, service: e.target.value }))}
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
                  >
                    <option value="" disabled>Select a service</option>
                    {siteConfig.services.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="appt-time" className="block text-sm font-medium text-muted-foreground mb-1.5">Preferred Time</label>
                  <input
                    id="appt-time"
                    type="text"
                    required
                    value={form.time}
                    onChange={(e) => setForm((f) => ({ ...f, time: e.target.value }))}
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
                    placeholder="e.g. Tomorrow 2 PM"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-xl bg-gradient-rose py-3.5 text-sm font-semibold text-primary-foreground shadow-soft hover:shadow-lg transition"
                >
                  Request Appointment via Email
                </button>
                <p className="text-xs text-center text-muted-foreground">
                  We'll confirm your booking as soon as we receive your request.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
