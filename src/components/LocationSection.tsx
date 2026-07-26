"use client";

import { CLINIC_DATA } from "@/data/clinicData";
import { MapPin, Navigation, Phone, Clock, Building2, CheckCircle2 } from "lucide-react";
import { getPhoneCallUrl } from "@/utils/whatsapp";

export default function LocationSection() {
  const address = CLINIC_DATA.address;

  return (
    <section id="location" className="py-16 md:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider bg-teal-100 text-teal-800 border border-teal-200">
            <MapPin className="w-3.5 h-3.5" />
            <span>Clinic Address & Directions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Conveniently Located in Bhubaneswar
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Easily accessible from Jayadev Vihar, Patia, Chandrasekharpur, and KIIT Campus corridor.
          </p>
        </div>

        {/* Location Layout Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Address & Landmark Details Card */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              
              {/* Address Header */}
              <div className="flex items-start gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-teal-600 text-white flex items-center justify-center shrink-0 shadow-md">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    HealX Medi Clinic
                  </h3>
                  <p className="text-xs font-bold text-teal-700 uppercase tracking-wider mt-0.5">
                    Dr. Raja Ram Mohan Pal (MD Utkal)
                  </p>
                </div>
              </div>

              {/* Address Details */}
              <div className="space-y-3 text-sm text-slate-700 border-t border-slate-100 pt-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-semibold">{address.line1}</strong>
                    <p className="text-slate-600">{address.landmark}</p>
                    <p className="text-slate-600">{address.city}, {address.state} - {address.pincode}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-teal-600 shrink-0" />
                  <a href={getPhoneCallUrl()} className="font-semibold text-slate-900 hover:text-teal-600 transition-colors">
                    {CLINIC_DATA.phoneDisplay}
                  </a>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-semibold text-slate-900">Daily OPD Hours:</span>
                    <span className="text-xs text-slate-600">Morning: 9:00 AM - 1:00 PM | Evening: 5:00 PM - 9:00 PM</span>
                  </div>
                </div>
              </div>

              {/* Clinic Amenities / Accessibility */}
              <div className="bg-teal-50/70 rounded-2xl p-4 border border-teal-100 space-y-2 text-xs">
                <p className="font-bold text-teal-900">Clinic Accessibility & Amenities:</p>
                <div className="grid grid-cols-2 gap-2 text-slate-700">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    Ample Parking Space
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    Wheelchair Accessible
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    Air Conditioned Waiting
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    Pharmacy Adjacent
                  </span>
                </div>
              </div>

            </div>

            {/* Direct Directions Button */}
            <a
              href={CLINIC_DATA.mapDirectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-6 bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white font-bold rounded-2xl shadow-md flex items-center justify-center gap-2 transition-transform active:scale-98 text-sm"
            >
              <Navigation className="w-5 h-5" />
              <span>Get Live Directions on Google Maps</span>
            </a>
          </div>

          {/* Embedded Google Map Frame */}
          <div className="lg:col-span-7 bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-xl min-h-[380px] relative">
            <iframe
              src={CLINIC_DATA.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "380px" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="HealX Medi Clinic Google Maps Location"
              className="w-full h-full"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
