"use client";

import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);
  const phoneNumber = "447710274452";
  const defaultMessage = encodeURIComponent(
    "Hello Rattanawan, I would like to inquire about your hypnotherapy services."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-[90] flex items-center group">
      {/* Tooltip / Label */}
      <span
        className={`hidden sm:inline-block mr-3 px-3.5 py-1.5 rounded-full text-xs font-semibold text-white bg-[#0A192F]/90 backdrop-blur-md border border-primary/30 shadow-lg transition-all duration-300 pointer-events-none select-none ${
          isHovered
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-2"
        }`}
      >
        Chat on WhatsApp
      </span>

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Rattanawan Hypnotherapy on WhatsApp"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-[0_4px_20px_rgba(37,211,102,0.45)] hover:shadow-[0_6px_28px_rgba(37,211,102,0.65)] hover:scale-110 active:scale-95 transition-all duration-300 group-hover:bg-[#20ba59]"
      >
        {/* Subtle breathing ripple effect */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 pointer-events-none" />

        {/* WhatsApp Icon */}
        <FaWhatsapp className="w-8 h-8 relative z-10 transition-transform duration-300 group-hover:rotate-6" />
      </a>
    </div>
  );
}
