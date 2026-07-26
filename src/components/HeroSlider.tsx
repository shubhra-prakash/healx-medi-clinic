"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CLINIC_DATA } from "@/data/clinicData";
import { getPhoneCallUrl, getWhatsAppAppointmentUrl } from "@/utils/whatsapp";
import TimingBadge from "./TimingBadge";
import { 
  MessageSquare, 
  Phone, 
  ChevronLeft, 
  ChevronRight, 
  Star, 
  CheckCircle2, 
  Award, 
  MapPin, 
  UserCheck
} from "lucide-react";

interface HeroSliderProps {
  onOpenBookingModal: () => void;
}

export default function HeroSlider({ onOpenBookingModal }: HeroSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto transition every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % CLINIC_DATA.heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % CLINIC_DATA.heroImages.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + CLINIC_DATA.heroImages.length) % CLINIC_DATA.heroImages.length);
  };

  return (
    <section className="relative w-full min-h-[580px] lg:min-h-[660px] flex items-center bg-slate-900 overflow-hidden text-white">
      {/* Background Image Carousel with Overlay */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${CLINIC_DATA.heroImages[currentIndex].url})` }}
          />
        </AnimatePresence>

        {/* Gradient Overlays for High Contrast & Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-900/40" />
      </div>

      {/* Manual Slider Navigation Arrows (Desktop) */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-slate-900/50 hover:bg-teal-600 text-white backdrop-blur-md transition-colors hidden md:flex items-center justify-center border border-white/10"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-slate-900/50 hover:bg-teal-600 text-white backdrop-blur-md transition-colors hidden md:flex items-center justify-center border border-white/10"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Hero Content Overlay Card */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 w-full">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Tagline & Info Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Live Availability Badge & Location Pill */}
            <div className="flex flex-wrap items-center gap-3">
              <TimingBadge />
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-teal-200 border border-white/20 backdrop-blur-md">
                <MapPin className="w-3.5 h-3.5 text-teal-400" />
                <span>Patia / Jayadev Vihar, Bhubaneswar</span>
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                World-Class Healthcare, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-emerald-300 to-emerald-400">
                  Close to Home.
                </span>
              </h1>
              <p className="text-slate-200 text-base sm:text-lg max-w-2xl font-light leading-relaxed">
                Experience compassionate, evidence-based outpatient medical care led by <strong className="font-semibold text-white">Dr. Raja Ram Mohan Pal</strong> (MBBS, MD Utkal). Specialized treatment for Diabetes, General Medicine, ECG, and pathology testing in Bhubaneswar.
              </p>
            </div>

            {/* Direct CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onOpenBookingModal}
                className="flex items-center justify-center gap-2.5 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-teal-950 font-bold px-6 py-3.5 rounded-2xl shadow-xl shadow-emerald-500/20 active:scale-95 transition-all text-base"
              >
                <MessageSquare className="w-5 h-5 fill-current" />
                <span>Book OPD Appointment</span>
              </button>

              <a
                href={getPhoneCallUrl()}
                className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3.5 rounded-2xl border border-white/20 backdrop-blur-md transition-all text-base"
              >
                <Phone className="w-5 h-5 text-teal-300" />
                <span>Call: {CLINIC_DATA.phoneDisplay}</span>
              </a>
            </div>

            {/* Quick Trust Highlights */}
            <div className="pt-4 border-t border-white/10 grid grid-cols-3 gap-2 sm:gap-4 max-w-xl text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-slate-300 font-medium">15+ Yrs Exp.</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-teal-400 shrink-0" />
                <span className="text-slate-300 font-medium">MD (Utkal) Specialist</span>
              </div>
              <div className="flex items-center gap-2">
                <UserCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-slate-300 font-medium">Minimal Wait Time</span>
              </div>
            </div>
          </div>

          {/* Lead Doctor Foreground Glassmorphism Card */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900/70 border border-teal-500/30 rounded-3xl p-6 backdrop-blur-xl shadow-2xl shadow-teal-950/50 relative overflow-hidden group">
              
              {/* Decorative Glow */}
              <div className="absolute -right-12 -bottom-12 w-40 h-40 bg-teal-500/20 rounded-full blur-3xl group-hover:bg-teal-400/30 transition-colors pointer-events-none" />

              {/* Card Header Tag */}
              <div className="flex items-center justify-between mb-4">
                <span className="bg-teal-500/20 text-teal-300 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-teal-500/30">
                  Lead Consultant Physician
                </span>
                
                {/* Rating Badge */}
                <div className="flex items-center gap-1 text-amber-400 text-xs font-bold bg-amber-400/10 px-2.5 py-1 rounded-full border border-amber-400/20">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span>4.9 (240+ Reviews)</span>
                </div>
              </div>

              {/* Doctor Details */}
              <div className="flex items-start gap-4 mb-4">
                <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-teal-400/40 shrink-0 shadow-md">
                  <img
                    src={CLINIC_DATA.doctor.photo}
                    alt={CLINIC_DATA.doctor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {CLINIC_DATA.doctor.name}
                  </h3>
                  <p className="text-teal-300 text-sm font-semibold">
                    {CLINIC_DATA.doctor.qualifications}
                  </p>
                  <p className="text-slate-300 text-xs mt-0.5">
                    {CLINIC_DATA.doctor.specialty}
                  </p>
                  <p className="text-slate-400 text-[11px] mt-1 font-mono">
                    Reg: {CLINIC_DATA.doctor.regNumber}
                  </p>
                </div>
              </div>

              <p className="text-slate-300 text-xs line-clamp-3 leading-relaxed border-t border-white/10 pt-3">
                {CLINIC_DATA.doctor.bio}
              </p>

              {/* Quick WhatsApp Share Button on Doctor Card */}
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                <div className="text-xs text-slate-400">
                  <span>Languages: </span>
                  <strong className="text-slate-200">{CLINIC_DATA.doctor.languages.join(", ")}</strong>
                </div>
                <a
                  href={getWhatsAppAppointmentUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 fill-current" />
                  <span>WhatsApp Doctor</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Slide Indicators */}
        <div className="mt-8 flex items-center justify-between">
          <div className="text-xs font-mono text-slate-400">
            <span>Slide {currentIndex + 1} of {CLINIC_DATA.heroImages.length}: </span>
            <strong className="text-teal-300 font-sans">{CLINIC_DATA.heroImages[currentIndex].title}</strong>
          </div>

          <div className="flex items-center gap-2">
            {CLINIC_DATA.heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "w-8 bg-emerald-400" : "w-2 bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
