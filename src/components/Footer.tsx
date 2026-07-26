"use client";

import { CLINIC_DATA } from "@/data/clinicData";
import { getPhoneCallUrl, getWhatsAppAppointmentUrl } from "@/utils/whatsapp";
import { Cross, Phone, MessageSquare, MapPin, Clock, ShieldCheck, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs pt-16 pb-24 md:pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-slate-800">
          
          {/* Brand & Doctor */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-teal-600 flex items-center justify-center text-white font-bold">
                <Cross className="w-5 h-5 fill-white stroke-teal-600" />
              </div>
              <span className="font-extrabold text-xl text-white tracking-tight">
                Heal<span className="text-teal-400">X</span> Medi Clinic
              </span>
            </div>

            <p className="text-slate-400 leading-relaxed">
              {CLINIC_DATA.subTagline}
            </p>

            <div className="pt-2 text-slate-300 space-y-1">
              <p className="font-bold text-white text-sm">{CLINIC_DATA.doctor.name}</p>
              <p className="text-teal-400 font-semibold">{CLINIC_DATA.doctor.qualifications}</p>
              <p className="text-xs text-slate-400">{CLINIC_DATA.doctor.specialty}</p>
              <p className="text-[11px] font-mono text-slate-500">Reg: {CLINIC_DATA.doctor.regNumber}</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              Quick Navigation
            </h3>
            <ul className="space-y-2 text-slate-300">
              <li><a href="#doctor" className="hover:text-teal-400 transition-colors">Doctor Profile</a></li>
              <li><a href="#services" className="hover:text-teal-400 transition-colors">Services & OPD</a></li>
              <li><a href="#prescription" className="hover:text-teal-400 transition-colors">Share Prescription</a></li>
              <li><a href="#timings" className="hover:text-teal-400 transition-colors">OPD Timings</a></li>
              <li><a href="#reviews" className="hover:text-teal-400 transition-colors">Patient Reviews</a></li>
              <li><a href="#location" className="hover:text-teal-400 transition-colors">Clinic Location</a></li>
            </ul>
          </div>

          {/* OPD Schedule */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-teal-400" />
              OPD Hours (IST)
            </h3>
            <div className="space-y-2 text-slate-300">
              <div>
                <p className="font-bold text-white">Monday – Saturday:</p>
                <p className="text-xs text-teal-300">Morning: {CLINIC_DATA.schedule.morningSlot}</p>
                <p className="text-xs text-teal-300">Evening: {CLINIC_DATA.schedule.eveningSlot}</p>
              </div>
              <div className="pt-2 border-t border-slate-800">
                <p className="font-bold text-white">Sunday:</p>
                <p className="text-xs text-rose-400">{CLINIC_DATA.schedule.sunday}</p>
              </div>
            </div>
          </div>

          {/* Contact & Map Button */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-teal-400" />
              Contact & Address
            </h3>
            <div className="space-y-2 text-slate-300">
              <p>{CLINIC_DATA.address.full}</p>
              <p className="font-semibold text-white pt-1">
                Phone: <a href={getPhoneCallUrl()} className="text-teal-400 hover:underline">{CLINIC_DATA.phoneDisplay}</a>
              </p>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href={getWhatsAppAppointmentUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-4 bg-emerald-500 hover:bg-emerald-400 text-teal-950 font-bold rounded-xl text-center flex items-center justify-center gap-2 transition-colors"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>WhatsApp Desk</span>
              </a>
            </div>
          </div>

        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 space-y-4">
          <div className="bg-slate-900/60 rounded-2xl p-4 border border-slate-800/80 text-[11px] text-slate-400 leading-relaxed flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
            <p>
              <strong>Medical Disclaimer:</strong> The content provided on this website is for informational purposes and OPD booking convenience only. In case of life-threatening medical emergencies, please visit the nearest hospital casualty emergency department immediately or call emergency medical services (108).
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-slate-500 text-[11px] pt-2">
            <p>© {new Date().getFullYear()} HealX Medi Clinic, Bhubaneswar. All rights reserved.</p>
            <p className="flex items-center gap-1">
              <span>Crafted with</span>
              <Heart className="w-3.5 h-3.5 text-rose-500 fill-current" />
              <span>for Healthcare in Odisha</span>
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
