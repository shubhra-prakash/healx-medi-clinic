"use client";

import { getWhatsAppAppointmentUrl } from "@/utils/whatsapp";
import { MessageSquare } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-20 right-4 sm:bottom-6 sm:right-6 z-40 group">
      <a
        href={getWhatsAppAppointmentUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with HealX Medi Clinic"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-2xl shadow-emerald-500/40 transition-all transform hover:scale-110 active:scale-95"
      >
        {/* Pulsing Outer Ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500 opacity-75 animate-ping pointer-events-none" />

        {/* WhatsApp Icon */}
        <MessageSquare className="w-7 h-7 fill-current relative z-10" />

        {/* Hover Tooltip */}
        <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg pointer-events-none hidden sm:block border border-slate-700">
          💬 Book OPD on WhatsApp
        </span>
      </a>
    </div>
  );
}
