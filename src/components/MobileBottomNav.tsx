"use client";

import { CLINIC_DATA } from "@/data/clinicData";
import { getPhoneCallUrl, getWhatsAppAppointmentUrl } from "@/utils/whatsapp";
import { Phone, MessageSquare, Camera, Navigation } from "lucide-react";

interface MobileBottomNavProps {
  onOpenBookingModal: () => void;
}

export default function MobileBottomNav({ onOpenBookingModal }: MobileBottomNavProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-slate-900/95 backdrop-blur-lg border-t border-slate-800 py-2 px-3 md:hidden shadow-2xl">
      <div className="grid grid-cols-4 gap-1 max-w-md mx-auto">
        
        {/* 1. Call Clinic */}
        <a
          href={getPhoneCallUrl()}
          className="flex flex-col items-center justify-center py-1.5 px-1 min-h-[48px] rounded-xl text-slate-300 hover:text-white hover:bg-slate-800 transition-colors active:scale-95"
          aria-label="Call Clinic"
        >
          <Phone className="w-5 h-5 text-teal-400" />
          <span className="text-[10px] font-bold mt-1">Call Clinic</span>
        </a>

        {/* 2. WhatsApp Book */}
        <button
          onClick={onOpenBookingModal}
          className="flex flex-col items-center justify-center py-1.5 px-1 min-h-[48px] rounded-xl text-emerald-400 hover:text-emerald-300 hover:bg-slate-800 transition-colors active:scale-95"
          aria-label="Book OPD Slot"
        >
          <MessageSquare className="w-5 h-5 fill-current" />
          <span className="text-[10px] font-extrabold mt-1">WhatsApp</span>
        </button>

        {/* 3. Share Prescription */}
        <a
          href="#prescription"
          className="flex flex-col items-center justify-center py-1.5 px-1 min-h-[48px] rounded-xl text-teal-300 hover:text-white hover:bg-slate-800 transition-colors active:scale-95"
          aria-label="Share Prescription"
        >
          <Camera className="w-5 h-5 text-emerald-400" />
          <span className="text-[10px] font-bold mt-1">Share Rx</span>
        </a>

        {/* 4. Navigate */}
        <a
          href={CLINIC_DATA.mapDirectLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-1 min-h-[48px] rounded-xl text-slate-300 hover:text-white hover:bg-slate-800 transition-colors active:scale-95"
          aria-label="Get Directions"
        >
          <Navigation className="w-5 h-5 text-teal-400" />
          <span className="text-[10px] font-bold mt-1">Navigate</span>
        </a>

      </div>
    </div>
  );
}
