"use client";

import { useState } from "react";
import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import DoctorProfile from "@/components/DoctorProfile";
import ServicesGrid from "@/components/ServicesGrid";
import PrescriptionUploader from "@/components/PrescriptionUploader";
import OPDTimingCard from "@/components/OPDTimingCard";
import Testimonials from "@/components/Testimonials";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import MobileBottomNav from "@/components/MobileBottomNav";
import AppointmentModal from "@/components/AppointmentModal";

export default function Home() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  const handleOpenBookingModal = (serviceName?: string) => {
    setSelectedService(serviceName);
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 relative selection:bg-teal-500 selection:text-white">
      {/* Top Header */}
      <Header onOpenBookingModal={() => handleOpenBookingModal()} />

      {/* Main Page Content */}
      <main className="flex-grow">
        {/* 1. Hero Section with Background Carousel & Doctor Overlay */}
        <HeroSlider onOpenBookingModal={() => handleOpenBookingModal()} />

        {/* 2. Doctor Profile Section (Dr. Raja Ram Mohan Pal) */}
        <DoctorProfile onOpenBookingModal={() => handleOpenBookingModal()} />

        {/* 3. Services & Treatment Specialties Grid */}
        <ServicesGrid onSelectService={(service) => handleOpenBookingModal(service)} />

        {/* 4. Instant Prescription & Medicine Photo Direct Share */}
        <PrescriptionUploader />

        {/* 5. OPD Timings & Real-time Availability Widget */}
        <OPDTimingCard onOpenBookingModal={() => handleOpenBookingModal()} />

        {/* 6. Patient Reviews & Trust Indicators */}
        <Testimonials />

        {/* 7. Bhubaneswar Location & Interactive Map */}
        <LocationSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

      {/* Mobile-First Sticky Bottom Navigation Bar */}
      <MobileBottomNav onOpenBookingModal={() => handleOpenBookingModal()} />

      {/* OPD Appointment Booking Modal */}
      <AppointmentModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialService={selectedService}
      />
    </div>
  );
}
