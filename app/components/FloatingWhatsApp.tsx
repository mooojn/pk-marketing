"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/923706037115"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-[90] group"
    >
      <span
        className="pointer-events-none absolute inset-0 -z-10 rounded-full opacity-60 blur-md animate-pulse"
        style={{ background: "rgba(37, 211, 102, 0.45)" }}
        aria-hidden="true"
      />
      <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white shadow-[0_12px_30px_rgba(18,140,126,0.4)] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-[0_18px_36px_rgba(18,140,126,0.48)]">
        <FaWhatsapp className="h-5 w-5 shrink-0" />
      </span>
    </a>
  );
}
