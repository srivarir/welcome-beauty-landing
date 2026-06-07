// 🌸 Single source of truth — edit these values to customise the website.
export const siteConfig = {
  name: "Welcome Beauty Parlour",
  tagline: "Enhancing Your Natural Beauty",
  shortDescription:
    "A premium local beauty parlour offering hair, skin, bridal and beauty services in a hygienic, friendly environment.",
  phone: "+91 98765 43210",
  whatsapp: "919876543210", // digits only, with country code
  email: "hello@welcomebeauty.com",
  address: "123 Main Street, Near City Mall, Your City - 560001",
  hours: "Mon – Sun · 9:00 AM – 9:00 PM",
  mapsEmbedSrc:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzE3LjgiTiA3N8KwMzUnNDAuNiJF!5e0!3m2!1sen!2sin!4v1700000000000",
  socials: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
    youtube: "https://youtube.com/",
  },
  services: [
    "Hair Cut",
    "Hair Styling",
    "Hair Coloring",
    "Hair Spa",
    "Facial",
    "Cleanup",
    "Bleach",
    "Detan",
    "Bridal Makeup",
    "Reception Makeup",
    "Engagement Makeup",
    "Pre-bridal Care",
    "Threading",
    "Waxing",
    "Pedicure",
    "Manicure",
  ] as const,
} as const;
