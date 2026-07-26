"use client";

import { useState, FormEvent } from "react";
import { CLINIC_DATA } from "@/data/clinicData";
import { getWhatsAppAppointmentUrl } from "@/utils/whatsapp";
import { X, Calendar, User, MessageSquare, Stethoscope, CheckCircle2 } from "lucide-react";

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export default function AppointmentModal({ isOpen, onClose, initialService }: AppointmentModalProps) {
  const [patientName, setPatientName] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const [selectedService, setSelectedService] = useState(initialService || "General Medicine OPD");

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const url = getWhatsAppAppointmentUrl(patientName, preferredDate, selectedService);
    window.open(url, "_blank");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      
      {/* Modal Card */}
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative overflow-hidden space-y-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-teal-100 text-teal-800">
            <Stethoscope className="w-3.5 h-3.5" />
            <span>Instant OPD Booking</span>
          </div>
          <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
            Book OPD Appointment
          </h3>
          <p className="text-xs text-slate-500">
            Consulting Physician: <strong className="text-slate-800">{CLINIC_DATA.doctor.name}</strong> ({CLINIC_DATA.doctor.qualifications})
          </p>
        </div>

        {/* Booking Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Patient Name */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Patient Name *
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                required
                placeholder="e.g. Ramesh Kumar Mohanty"
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:border-teal-600 focus:bg-white transition-colors text-slate-900"
              />
            </div>
          </div>

          {/* Preferred Date */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Preferred Date *
            </label>
            <div className="relative">
              <Calendar className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="date"
                required
                value={preferredDate}
                onChange={(e) => setPreferredDate(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:border-teal-600 focus:bg-white transition-colors text-slate-900"
              />
            </div>
          </div>

          {/* Service Category */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Select Service / Specialty
            </label>
            <select
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:border-teal-600 focus:bg-white transition-colors text-slate-900"
            >
              {CLINIC_DATA.services.map((s) => (
                <option key={s.id} value={s.title}>
                  {s.title}
                </option>
              ))}
            </select>
          </div>

          {/* OPD Slot Notice */}
          <div className="bg-emerald-50 rounded-xl p-3 border border-emerald-200 text-xs text-emerald-800 flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span>OPD Hours: Morning 9 AM – 1 PM | Evening 5 PM – 9 PM (Mon-Sat). Your booking request will be confirmed instantly on WhatsApp.</span>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3.5 px-6 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-extrabold text-sm rounded-xl shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2.5 transition-transform active:scale-98 cursor-pointer"
          >
            <MessageSquare className="w-5 h-5 fill-current" />
            <span>Confirm & Open WhatsApp</span>
          </button>
        </form>

      </div>
    </div>
  );
}
