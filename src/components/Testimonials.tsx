"use client";

import { CLINIC_DATA, Review } from "@/data/clinicData";
import { Star, ShieldCheck, Quote, CheckCircle2, ThumbsUp } from "lucide-react";

export default function Testimonials() {
  const rating = CLINIC_DATA.rating;
  const reviews = CLINIC_DATA.reviews;

  return (
    <section id="reviews" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          
          {/* Rating Summary Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 text-amber-900 border border-amber-200 text-xs font-bold shadow-xs">
            <div className="flex items-center text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>
            <span>{rating.score} out of 5.0 Rating</span>
            <span className="text-slate-400">•</span>
            <span className="text-amber-800 font-semibold">Google Verified</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Patient Stories & Ratings
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Read authentic feedback from patients across Bhubaneswar praising Dr. Raja Ram Mohan Pal and HealX Medi Clinic.
          </p>
        </div>

        {/* Patient Review Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {reviews.map((rev: Review) => (
            <div
              key={rev.id}
              className="bg-slate-50/80 rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-teal-600/10 pointer-events-none" />

              <div className="space-y-4">
                
                {/* Rating Stars & Date */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs text-slate-400 font-medium">{rev.date}</span>
                </div>

                {/* Comment */}
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              {/* Author & Location Footer */}
              <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                    <span>{rev.author}</span>
                    {rev.verified && (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" aria-label="Verified Patient" />
                    )}
                  </h3>
                  <p className="text-xs text-slate-500">{rev.location}</p>
                </div>

                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-teal-700 bg-teal-50 px-2.5 py-1 rounded-lg border border-teal-100">
                  <ThumbsUp className="w-3 h-3" /> Verified Patient
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges Bar */}
        <div className="mt-12 bg-teal-50/60 rounded-3xl p-6 border border-teal-100 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <p className="text-2xl font-black text-teal-900">4.9 ★</p>
            <p className="text-xs text-slate-600 font-medium">Google Rating</p>
          </div>
          <div>
            <p className="text-2xl font-black text-emerald-800">15+ Yrs</p>
            <p className="text-xs text-slate-600 font-medium">Clinical Excellence</p>
          </div>
          <div>
            <p className="text-2xl font-black text-teal-900">&lt; 15 Mins</p>
            <p className="text-xs text-slate-600 font-medium">Average OPD Wait</p>
          </div>
          <div>
            <p className="text-2xl font-black text-emerald-800">100%</p>
            <p className="text-xs text-slate-600 font-medium">Sanitized & Clean</p>
          </div>
        </div>

      </div>
    </section>
  );
}
