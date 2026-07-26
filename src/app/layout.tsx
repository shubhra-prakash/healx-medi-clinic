import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["400", "500", "600", "700", "800"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "HealX Medi Clinic Bhubaneswar | Dr. Raja Ram Mohan Pal (MD Utkal)",
  description: "Premier OPD Medical Clinic & Diagnostic Center in Bhubaneswar led by Dr. Raja Ram Mohan Pal (MBBS, MD Utkal). Specialized in Diabetes, General OPD, Pathology, ECG, and Family Care. Book OPD appointment on WhatsApp.",
  keywords: [
    "HealX Medi Clinic",
    "Bhubaneswar doctor",
    "Dr Raja Ram Mohan Pal",
    "Medicine Specialist Bhubaneswar",
    "Diabetologist Bhubaneswar",
    "OPD clinic Patia",
    "Clinic Jayadev Vihar",
    "ECG testing Bhubaneswar",
    "Pathology lab Bhubaneswar",
    "WhatsApp OPD booking"
  ],
  authors: [{ name: "HealX Medi Clinic" }],
  openGraph: {
    title: "HealX Medi Clinic Bhubaneswar | Dr. Raja Ram Mohan Pal",
    description: "World-Class Healthcare, Close to Home. Book OPD Consultation & Share Prescriptions on WhatsApp.",
    siteName: "HealX Medi Clinic",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${plusJakartaSans.variable} font-sans bg-slate-50 text-slate-900 antialiased selection:bg-teal-500 selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
