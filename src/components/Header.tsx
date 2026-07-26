"use client";

import { useState } from "react";
import Link from "next/link";
import { CLINIC_DATA } from "@/data/clinicData";
import TimingBadge from "./TimingBadge";
import { getPhoneCallUrl, getWhatsAppAppointmentUrl } from "@/utils/whatsapp";
import { Phone, MessageSquare, Menu, X, Cross, Calendar } from "lucide-react";

interface HeaderProps {
  onOpenBookingModal: () => void;
}

export default function Header({ onOpenBookingModal }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-teal-100/80 shadow-xs transition-all">
      {/* Top Banner for OPD & Emergency Call */}
      <div className="bg-gradient-to-r from-teal-900 via-emerald-800 to-teal-900 text-white text-xs py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 font-medium">
              <Cross className="w-3.5 h-3.5 text-teal-300 fill-teal-300" />
              <span>{CLINIC_DATA.address.landmark}, {CLINIC_DATA.address.city}</span>
            </span>
            <span className="text-teal-300/50">|</span>
            <span className="font-medium text-teal-100">
              Lead Physician: <strong className="text-white font-semibold">{CLINIC_DATA.doctor.name}</strong> ({CLINIC_DATA.doctor.qualifications})
            </span>
          </div>

          <div className="flex items-center gap-5">
            <a
              href={getPhoneCallUrl()}
              className="flex items-center gap-1.5 hover:text-teal-200 transition-colors font-semibold"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>{CLINIC_DATA.phoneDisplay}</span>
            </a>
            <span className="text-teal-300/50">|</span>
            <a
              href={getWhatsAppAppointmentUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-emerald-500 hover:bg-emerald-400 text-teal-950 font-bold px-2.5 py-0.5 rounded-full transition-colors"
            >
              <MessageSquare className="w-3 h-3 fill-current" />
              <span>Instant OPD Booking</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Brand Logo & Doctor Info */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-600 to-emerald-600 flex items-center justify-center text-white shadow-md shadow-teal-500/20 group-hover:scale-105 transition-transform">
            <Cross className="w-6 h-6 fill-white stroke-teal-600" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-xl tracking-tight text-slate-900 group-hover:text-teal-700 transition-colors">
                Heal<span className="text-teal-600">X</span>
              </span>
              <span className="bg-teal-50 text-teal-800 text-[10px] uppercase tracking-wider font-extrabold px-1.5 py-0.5 rounded border border-teal-200">
                Medi Clinic
              </span>
            </div>
            <p className="text-xs text-slate-500 font-medium line-clamp-1">
              Dr. Raja Ram Mohan Pal • BBSR
            </p>
          </div>
        </Link>

        {/* Live OPD Badge (Desktop) */}
        <div className="hidden lg:block">
          <TimingBadge showSubText={true} />
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-700">
          <a href="#doctor" className="hover:text-teal-600 transition-colors">Doctor Profile</a>
          <a href="#services" className="hover:text-teal-600 transition-colors">Services</a>
          <a href="#prescription" className="hover:text-teal-600 transition-colors">Share Prescription</a>
          <a href="#timings" className="hover:text-teal-600 transition-colors">OPD Timings</a>
          <a href="#reviews" className="hover:text-teal-600 transition-colors">Reviews</a>
          <a href="#location" className="hover:text-teal-600 transition-colors">Location</a>
        </nav>

        {/* CTA Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={getPhoneCallUrl()}
            className="hidden lg:flex items-center gap-2 text-slate-700 hover:text-teal-700 font-semibold text-sm px-3 py-2 rounded-lg hover:bg-slate-100 transition-all border border-slate-200"
          >
            <Phone className="w-4 h-4 text-teal-600" />
            <span>Call Clinic</span>
          </a>

          <button
            onClick={onOpenBookingModal}
            className="flex items-center gap-2 bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white font-semibold text-sm px-4 py-2 rounded-xl shadow-md shadow-teal-600/25 active:scale-95 transition-all"
          >
            <Calendar className="w-4 h-4" />
            <span>Book OPD Appointment</span>
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex items-center gap-2 md:hidden">
          <TimingBadge className="scale-90" />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-2 text-base font-semibold text-slate-800 pt-2">
            <a
              href="#doctor"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-100 text-slate-700"
            >
              Doctor Profile
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-100 text-slate-700"
            >
              Services & Specialties
            </a>
            <a
              href="#prescription"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-100 text-slate-700"
            >
              Direct Prescription Share
            </a>
            <a
              href="#timings"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-100 text-slate-700"
            >
              OPD Timings & Schedule
            </a>
            <a
              href="#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-100 text-slate-700"
            >
              Patient Reviews (4.9 ★)
            </a>
            <a
              href="#location"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-100 text-slate-700"
            >
              Map & Location
            </a>
          </nav>

          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBookingModal();
              }}
              className="w-full py-3 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-xl text-center flex items-center justify-center gap-2 shadow-sm"
            >
              <Calendar className="w-5 h-5" />
              Book OPD Appointment
            </button>
            <a
              href={getPhoneCallUrl()}
              className="w-full py-2.5 bg-slate-100 text-slate-800 font-semibold rounded-xl text-center flex items-center justify-center gap-2 border border-slate-200"
            >
              <Phone className="w-4 h-4 text-teal-600" />
              Call {CLINIC_DATA.phoneDisplay}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
