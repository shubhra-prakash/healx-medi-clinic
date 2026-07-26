"use client";

import { CLINIC_DATA, Service } from "@/data/clinicData";
import { getWhatsAppAppointmentUrl } from "@/utils/whatsapp";
import { 
  Stethoscope, 
  Activity, 
  Baby, 
  TestTube2, 
  Syringe, 
  HeartPulse, 
  CheckCircle, 
  ArrowRight,
  Sparkles
} from "lucide-react";

interface ServicesGridProps {
  onSelectService: (serviceName: string) => void;
}

export default function ServicesGrid({ onSelectService }: ServicesGridProps) {
  
  // Icon mapper helper
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "Stethoscope":
        return <Stethoscope className="w-7 h-7 text-teal-600" />;
      case "Activity":
        return <Activity className="w-7 h-7 text-emerald-600" />;
      case "Baby":
        return <Baby className="w-7 h-7 text-teal-600" />;
      case "TestTube2":
        return <TestTube2 className="w-7 h-7 text-emerald-600" />;
      case "Syringe":
        return <Syringe className="w-7 h-7 text-teal-600" />;
      case "HeartPulse":
        return <HeartPulse className="w-7 h-7 text-emerald-600" />;
      default:
        return <Stethoscope className="w-7 h-7 text-teal-600" />;
    }
  };

  return (
    <section id="services" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider bg-emerald-100 text-emerald-800 border border-emerald-200">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Comprehensive Clinical Care</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Services & Treatment Specialties
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            High-precision OPD consultations, specialized diabetic care, and rapid in-house diagnostics in Bhubaneswar.
          </p>
        </div>

        {/* Services Card Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {CLINIC_DATA.services.map((service: Service) => (
            <div
              key={service.id}
              className={`rounded-3xl p-6 sm:p-8 transition-all duration-300 flex flex-col justify-between relative group ${
                service.popular
                  ? "bg-gradient-to-b from-teal-50/90 to-emerald-50/60 border-2 border-teal-500/40 shadow-lg shadow-teal-500/10 hover:shadow-xl hover:shadow-teal-500/20"
                  : "bg-slate-50/80 border border-slate-200/90 hover:border-teal-300 hover:bg-white hover:shadow-xl hover:shadow-slate-200/60"
              }`}
            >
              {/* Popular Tag */}
              {service.popular && (
                <div className="absolute top-4 right-4 bg-teal-600 text-white text-[10px] uppercase tracking-wider font-extrabold px-3 py-1 rounded-full shadow-sm">
                  Featured Specialty
                </div>
              )}

              <div className="space-y-4">
                {/* Icon Container */}
                <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                  {renderIcon(service.iconName)}
                </div>

                {/* Title & Description */}
                <div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Service Features Checklist */}
                <ul className="space-y-2 pt-2 border-t border-slate-200/60 text-xs text-slate-700">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer with Price & Booking CTA */}
              <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between">
                {service.priceTag ? (
                  <span className="text-xs font-bold text-teal-800 bg-teal-100/80 px-2.5 py-1 rounded-lg border border-teal-200">
                    {service.priceTag}
                  </span>
                ) : (
                  <span className="text-xs font-semibold text-slate-500">
                    Daily OPD
                  </span>
                )}

                <a
                  href={getWhatsAppAppointmentUrl(undefined, undefined, service.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-teal-700 hover:text-emerald-600 transition-colors group-hover:translate-x-0.5"
                >
                  <span>Book via WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Extra Diagnostics Highlight Banner */}
        <div className="mt-12 bg-gradient-to-r from-slate-900 to-teal-950 rounded-3xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold">
              Need Instant ECG or Sugar Testing?
            </h3>
            <p className="text-slate-300 text-sm max-w-xl">
              Walk in during OPD sessions for immediate blood sugar monitoring, digital ECG printouts, and doctor consultation without prior appointment hassle.
            </p>
          </div>

          <button
            onClick={() => onSelectService("Instant Diagnostics & ECG")}
            className="shrink-0 bg-emerald-500 hover:bg-emerald-400 text-teal-950 font-bold px-6 py-3.5 rounded-2xl shadow-lg transition-transform active:scale-95 text-sm"
          >
            Inquire Diagnostic Availability
          </button>
        </div>

      </div>
    </section>
  );
}
