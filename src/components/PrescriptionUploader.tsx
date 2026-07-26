"use client";

import { useState, ChangeEvent } from "react";
import { getWhatsAppPrescriptionUrl } from "@/utils/whatsapp";
import { CLINIC_DATA } from "@/data/clinicData";
import { 
  Camera, 
  UploadCloud, 
  MessageSquare, 
  FileText, 
  CheckCircle2, 
  Sparkles, 
  ShieldAlert,
  ArrowRight,
  RefreshCw
} from "lucide-react";

export default function PrescriptionUploader() {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [patientNote, setPatientNote] = useState<string>("");

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedImage(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleReset = () => {
    setSelectedImage(null);
    setPreviewUrl(null);
    setPatientNote("");
  };

  const handleSendToWhatsApp = () => {
    const url = getWhatsAppPrescriptionUrl(patientNote);
    window.open(url, "_blank");
  };

  return (
    <section id="prescription" className="py-16 bg-gradient-to-b from-teal-900 via-teal-950 to-slate-950 text-white relative overflow-hidden">
      
      {/* Subtle Background Elements */}
      <div className="absolute top-1/2 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-emerald-400/20 text-emerald-300 border border-emerald-400/30 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Instant Digital Consultation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Upload Prescription & Medicine Photo
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto font-light">
            Snap a picture of your existing prescription or medicine strip to instantly share with <strong className="text-white font-semibold">Dr. Raja Ram Mohan Pal</strong> via WhatsApp.
          </p>
        </div>

        {/* Prescription Uploader Card */}
        <div className="max-w-3xl mx-auto bg-slate-900/80 border border-teal-500/30 rounded-3xl p-6 sm:p-10 backdrop-blur-xl shadow-2xl">
          
          {/* File Selector Dropzone */}
          {!previewUrl ? (
            <div className="border-2 border-dashed border-teal-500/40 hover:border-emerald-400 rounded-2xl p-8 sm:p-12 text-center transition-all bg-teal-950/20 group">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
                id="prescription-file-input"
              />
              
              <label
                htmlFor="prescription-file-input"
                className="cursor-pointer flex flex-col items-center justify-center space-y-4"
              >
                <div className="w-20 h-20 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center group-hover:scale-110 transition-transform border border-emerald-400/30 shadow-lg">
                  <UploadCloud className="w-10 h-10" />
                </div>

                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                    Tap to Snap or Select Image
                  </h3>
                  <p className="text-slate-400 text-sm">
                    Supports camera photos, JPG, PNG, or scanned PDFs
                  </p>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    <Camera className="w-3.5 h-3.5" />
                    Open Camera
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-white/10 text-slate-300 border border-white/20">
                    <FileText className="w-3.5 h-3.5" />
                    Browse Files
                  </span>
                </div>
              </label>
            </div>
          ) : (
            /* Image Selected Preview State */
            <div className="space-y-6 animate-in fade-in duration-300">
              
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Prescription Photo Attached</span>
                </div>
                <button
                  onClick={handleReset}
                  className="flex items-center gap-1 text-xs text-slate-400 hover:text-white transition-colors"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Choose Different Photo</span>
                </button>
              </div>

              <div className="grid sm:grid-cols-12 gap-6 items-center">
                {/* Thumbnail Preview */}
                <div className="sm:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden border-2 border-teal-400/40 shadow-xl bg-slate-950">
                  <img
                    src={previewUrl}
                    alt="Prescription preview"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-slate-900/90 text-slate-300 text-[10px] px-2 py-0.5 rounded font-mono">
                    {selectedImage?.name}
                  </div>
                </div>

                {/* Patient Note Field */}
                <div className="sm:col-span-7 space-y-3">
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                    Add Note / Special Query for Dr. Pal (Optional)
                  </label>
                  <textarea
                    rows={3}
                    value={patientNote}
                    onChange={(e) => setPatientNote(e.target.value)}
                    placeholder="e.g. Need refill for diabetes medicine / experiencing mild headache..."
                    className="w-full bg-slate-950/80 border border-teal-500/30 rounded-xl p-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400 transition-colors"
                  />
                </div>
              </div>
            </div>
          )}

          {/* How It Works & Action Trigger */}
          <div className="mt-8 pt-6 border-t border-white/10 space-y-6">
            
            {/* Step Indicators */}
            <div className="grid grid-cols-3 gap-2 text-center text-xs">
              <div className="bg-white/5 rounded-xl p-2.5 border border-white/5">
                <span className="block font-bold text-emerald-400">1. Select Photo</span>
                <span className="text-[11px] text-slate-400">Prescription / Strip</span>
              </div>
              <div className="bg-white/5 rounded-xl p-2.5 border border-white/5">
                <span className="block font-bold text-teal-300">2. Launch WhatsApp</span>
                <span className="text-[11px] text-slate-400">Pre-filled prompt</span>
              </div>
              <div className="bg-white/5 rounded-xl p-2.5 border border-white/5">
                <span className="block font-bold text-emerald-400">3. Send & Consult</span>
                <span className="text-[11px] text-slate-400">Dr. Pal Reviews</span>
              </div>
            </div>

            {/* Direct Send CTA Button */}
            <button
              onClick={handleSendToWhatsApp}
              className="w-full py-4 px-6 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-teal-950 font-extrabold text-base rounded-2xl shadow-xl shadow-emerald-500/25 flex items-center justify-center gap-3 transition-transform active:scale-98 cursor-pointer"
            >
              <MessageSquare className="w-6 h-6 fill-current" />
              <span>Send Prescription via WhatsApp ({CLINIC_DATA.phoneDisplay})</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            {/* Privacy Disclaimer */}
            <p className="text-center text-[11px] text-slate-400 flex items-center justify-center gap-1.5">
              <ShieldAlert className="w-3.5 h-3.5 text-teal-400 shrink-0" />
              <span>Your medical records & prescription photos are strictly confidential and shared directly with HealX Medi Clinic staff.</span>
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
