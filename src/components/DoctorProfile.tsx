"use client";

import { CLINIC_DATA } from "@/data/clinicData";
import { getPhoneCallUrl, getWhatsAppAppointmentUrl } from "@/utils/whatsapp";
import { 
  Award, 
  BookOpen, 
  CheckCircle, 
  GraduationCap, 
  Heart, 
  MessageSquare, 
  Phone, 
  ShieldCheck, 
  Stethoscope, 
  UserCheck 
} from "lucide-react";

interface DoctorProfileProps {
  onOpenBookingModal: () => void;
}

export default function DoctorProfile({ onOpenBookingModal }: DoctorProfileProps) {
  const doctor = CLINIC_DATA.doctor;

  const keyExpertise = [
    { title: "Specialized Diabetes Management", desc: "Precision insulin titration, HbA1c control, and diabetic complication prevention." },
    { title: "Hypertension & Cardiac Care", desc: "Blood pressure optimization, ECG screening, and lipid management." },
    { title: "General Outpatient Medicine", desc: "Expert treatment for seasonal fevers, viral infections, thyroid disorders, and digestive health." },
    { title: "Geriatric & Preventive Health", desc: "Comprehensive adult health assessments and elderly care monitoring." }
  ];

  return (
    <section id="doctor" className="py-16 md:py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-100/40 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider bg-teal-100 text-teal-800 border border-teal-200">
            <Stethoscope className="w-3.5 h-3.5" />
            <span>Lead Medical Practitioner</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Meet Your Trusted Doctor
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Experienced, compassionate medical care tailored to your family's health needs.
          </p>
        </div>

        {/* Doctor Card Grid */}
        <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xl overflow-hidden grid lg:grid-cols-12">
          
          {/* Doctor Image & Quick Badges Column */}
          <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 to-teal-950 p-8 text-white flex flex-col justify-between relative">
            <div className="space-y-6">
              
              {/* Photo Box */}
              <div className="relative mx-auto max-w-xs aspect-square rounded-2xl overflow-hidden border-4 border-teal-400/30 shadow-2xl">
                <img
                  src={doctor.photo}
                  alt={doctor.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 left-3 right-3 bg-slate-900/85 backdrop-blur-md px-3 py-2 rounded-xl text-center border border-white/10">
                  <p className="text-xs text-teal-300 font-bold">Registration Verified</p>
                  <p className="text-[11px] text-slate-300 font-mono">{doctor.regNumber}</p>
                </div>
              </div>

              {/* Title & Qualifications */}
              <div className="text-center space-y-1.5">
                <h3 className="text-2xl font-bold tracking-tight text-white">
                  {doctor.name}
                </h3>
                <p className="text-emerald-400 font-bold text-base">
                  {doctor.qualifications}
                </p>
                <p className="text-teal-200 text-sm font-medium">
                  {doctor.specialty}
                </p>
              </div>

              {/* Quick Info Badges */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="bg-white/10 rounded-xl p-3 backdrop-blur-sm border border-white/10 text-center">
                  <Award className="w-5 h-5 text-teal-300 mx-auto mb-1" />
                  <p className="text-xs text-slate-300 font-medium">Experience</p>
                  <p className="text-sm font-bold text-white">{doctor.experience}</p>
                </div>
                <div className="bg-white/10 rounded-xl p-3 backdrop-blur-sm border border-white/10 text-center">
                  <GraduationCap className="w-5 h-5 text-emerald-300 mx-auto mb-1" />
                  <p className="text-xs text-slate-300 font-medium">Alma Mater</p>
                  <p className="text-sm font-bold text-white">SCB / Utkal Univ</p>
                </div>
              </div>
            </div>

            {/* Languages */}
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
              <span className="flex items-center gap-1.5 font-medium">
                <BookOpen className="w-4 h-4 text-teal-300" />
                Fluent Languages:
              </span>
              <strong className="text-white font-semibold">{doctor.languages.join(" • ")}</strong>
            </div>
          </div>

          {/* Details & Clinical Expertise Column */}
          <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              
              <div>
                <h4 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-teal-600" />
                  About Dr. Raja Ram Mohan Pal
                </h4>
                <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
                  {doctor.bio}
                </p>
              </div>

              {/* Key Clinical Expertise */}
              <div>
                <h4 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <Heart className="w-4 h-4 text-rose-500" />
                  Core Areas of Specialization
                </h4>

                <div className="grid sm:grid-cols-2 gap-3">
                  {keyExpertise.map((item, idx) => (
                    <div key={idx} className="bg-teal-50/60 rounded-xl p-3.5 border border-teal-100/80">
                      <div className="flex items-start gap-2.5">
                        <CheckCircle className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                        <div>
                          <h5 className="text-sm font-bold text-slate-900">{item.title}</h5>
                          <p className="text-xs text-slate-600 mt-1 leading-normal">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* OPD Consultation Assurance */}
              <div className="bg-slate-100/80 rounded-2xl p-4 border border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold text-base shrink-0">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900">Personalized OPD Care</p>
                    <p className="text-xs text-slate-500">Every patient is given unhurried attention & detailed counseling.</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Action Bar */}
            <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={onOpenBookingModal}
                className="flex-1 py-3 px-5 bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white font-bold rounded-xl shadow-md flex items-center justify-center gap-2 transition-transform active:scale-95 text-sm"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Book Appointment with Dr. Pal</span>
              </button>

              <a
                href={getPhoneCallUrl()}
                className="py-3 px-5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold rounded-xl border border-slate-300 flex items-center justify-center gap-2 transition-colors text-sm"
              >
                <Phone className="w-4 h-4 text-teal-600" />
                <span>Call Clinic Directly</span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
