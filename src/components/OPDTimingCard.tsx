"use client";

import { CLINIC_DATA } from "@/data/clinicData";
import TimingBadge from "./TimingBadge";
import { getWhatsAppAppointmentUrl, getPhoneCallUrl } from "@/utils/whatsapp";
import { Clock, Calendar, Sun, Moon, AlertCircle, Phone, MessageSquare } from "lucide-react";

interface OPDTimingCardProps {
  onOpenBookingModal: () => void;
}

export default function OPDTimingCard({ onOpenBookingModal }: OPDTimingCardProps) {
  const schedule = CLINIC_DATA.schedule;

  return (
    <section id="timings" className="py-16 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider bg-teal-100 text-teal-800 border border-teal-200">
            <Clock className="w-3.5 h-3.5" />
            <span>Consultation Schedule</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            OPD Timings & Doctor Availability
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Regular morning and evening OPD sessions for working professionals and families.
          </p>
        </div>

        {/* Schedule Display Box */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
          
          {/* Header Bar with Live Badge */}
          <div className="bg-gradient-to-r from-slate-900 to-teal-950 p-6 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Calendar className="w-5 h-5 text-teal-400" />
                HealX Medi Clinic OPD Timings
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                Consultant: <strong className="text-teal-200">{CLINIC_DATA.doctor.name}</strong> ({CLINIC_DATA.doctor.qualifications})
              </p>
            </div>

            {/* Live IST Status */}
            <TimingBadge showSubText={false} className="bg-white/10 p-1.5 rounded-2xl backdrop-blur-md border border-white/10" />
          </div>

          {/* Timings Grid */}
          <div className="p-6 sm:p-8 grid md:grid-cols-2 gap-6">
            
            {/* Morning OPD Card */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50/50 rounded-2xl p-6 border border-amber-200/80 space-y-3">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-amber-800 font-extrabold text-base">
                  <Sun className="w-5 h-5 text-amber-600" />
                  Morning Session
                </span>
                <span className="bg-amber-200/80 text-amber-900 text-xs font-bold px-2.5 py-0.5 rounded-full">
                  Mon – Sat
                </span>
              </div>
              
              <div className="text-2xl font-black text-slate-900 tracking-tight">
                {schedule.morningSlot}
              </div>

              <p className="text-xs text-slate-600">
                Ideal for fasting blood sugar tests, routine checkups, and geriatric consultations.
              </p>
            </div>

            {/* Evening OPD Card */}
            <div className="bg-gradient-to-br from-indigo-50 to-teal-50/50 rounded-2xl p-6 border border-indigo-200/80 space-y-3">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-indigo-900 font-extrabold text-base">
                  <Moon className="w-5 h-5 text-indigo-600" />
                  Evening Session
                </span>
                <span className="bg-indigo-200/80 text-indigo-950 text-xs font-bold px-2.5 py-0.5 rounded-full">
                  Mon – Sat
                </span>
              </div>

              <div className="text-2xl font-black text-slate-900 tracking-tight">
                {schedule.eveningSlot}
              </div>

              <p className="text-xs text-slate-600">
                Convenient after-office consultation hours for working adults and student fever OPD.
              </p>
            </div>

          </div>

          {/* Sunday & Emergency Note */}
          <div className="bg-slate-50 border-t border-slate-200 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center shrink-0 font-bold">
                <AlertCircle className="w-5 h-5" />
              </div>
              <div className="text-center sm:text-left">
                <p className="text-xs font-bold text-slate-900">Sunday Schedule:</p>
                <p className="text-xs text-slate-600">{schedule.sunday}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onOpenBookingModal}
                className="flex-1 sm:flex-initial py-2.5 px-4 bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs rounded-xl shadow-sm flex items-center justify-center gap-2 transition-colors"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Reserve OPD Slot</span>
              </button>

              <a
                href={getPhoneCallUrl()}
                className="py-2.5 px-4 bg-white text-slate-800 font-semibold text-xs rounded-xl border border-slate-300 flex items-center justify-center gap-2 hover:bg-slate-100 transition-colors"
              >
                <Phone className="w-4 h-4 text-teal-600" />
                <span>Call Desk</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
