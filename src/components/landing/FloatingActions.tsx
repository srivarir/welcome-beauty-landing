import { useEffect, useState } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

export function FloatingActions() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <a
        href={`https://wa.me/${siteConfig.whatsapp}?text=Hi%2C%20I%27d%20like%20to%20book%20an%20appointment`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full bg-[oklch(0.7_0.18_145)] text-white flex items-center justify-center shadow-soft animate-pulse-soft hover:scale-105 transition"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
      {show && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="fixed bottom-24 right-6 z-40 h-12 w-12 rounded-full bg-card border border-border text-primary flex items-center justify-center shadow-card hover:shadow-soft transition"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </>
  );
}
