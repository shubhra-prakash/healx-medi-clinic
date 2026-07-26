export interface Doctor {
  name: string;
  title: string;
  qualifications: string;
  specialty: string;
  subSpecialty: string;
  experience: string;
  regNumber: string;
  languages: string[];
  photo: string;
  bio: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  features: string[];
  priceTag?: string;
  popular?: boolean;
}

export interface Review {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
}

export interface TimingSlot {
  day: string;
  morning: string;
  evening: string;
}

export const CLINIC_DATA = {
  name: "HealX Medi Clinic",
  tagline: "World-Class Healthcare, Close to Home",
  subTagline: "Bhubaneswar's Trusted OPD & Diagnostic Center for Comprehensive Family Medicine and Diabetes Care.",
  phoneDisplay: "+91 63726 96818",
  phoneRaw: "6372696818",
  whatsappNumber: "916372696818",
  email: "care@healxclinic.com",
  address: {
    line1: "Plot No. 142/A, KIIT - Patia Main Road",
    landmark: "Near Jayadev Vihar / Patia Square",
    city: "Bhubaneswar",
    state: "Odisha",
    pincode: "751024",
    full: "Plot No. 142/A, KIIT - Patia Main Road, Near Jayadev Vihar Square, Bhubaneswar, Odisha 751024"
  },
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59868.51347608149!2d85.78783424863283!3d20.325516999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909a202c34057%3A0xf659a7ffec4101e4!2sBhubaneswar%2C%20Odisha!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  mapDirectLink: "https://maps.google.com/?q=Bhubaneswar+Odisha+Jayadev+Vihar",
  
  doctor: {
    name: "Dr. Raja Ram Mohan Pal",
    title: "Senior Consultant Physician & Diabetologist",
    qualifications: "MBBS, MD (Utkal)",
    specialty: "Medicine Specialist & Diabetologist",
    subSpecialty: "Diabetes Management, General Medicine, Hypertension & Metabolic Disorders",
    experience: "15+ Years Clinical Practice",
    regNumber: "OMC 48291 (Odisha Medical Council)",
    languages: ["English", "Odia", "Hindi"],
    photo: "/images/dr-raja-ram-mohan-pal.jpg",
    bio: "Dr. Raja Ram Mohan Pal is a renowned Medicine Specialist and Diabetologist in Bhubaneswar with over 15 years of clinical excellence. Trained at SCB Medical College (Utkal University), he specializes in comprehensive diabetes management, cardiovascular prevention, complex adult illnesses, and holistic outpatient care."
  } as Doctor,

  schedule: {
    weekdays: "Monday – Saturday",
    morningSlot: "9:00 AM – 1:00 PM",
    eveningSlot: "5:00 PM – 9:00 PM",
    sunday: "Emergency & Prior Booking Only",
    morningStart: { hour: 9, minute: 0 },
    morningEnd: { hour: 13, minute: 0 },
    eveningStart: { hour: 17, minute: 0 },
    eveningEnd: { hour: 21, minute: 0 },
  },

  rating: {
    score: 4.9,
    totalReviews: 240,
    googleVerified: true
  },

  heroImages: [
    {
      url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1600&auto=format&fit=crop",
      title: "Ultra-Modern Clean Reception & Lounge",
      caption: "Spacious, sanitized waiting area designed for patient comfort and minimal wait time."
    },
    {
      url: "/images/dr-raja-ram-mohan-pal.jpg",
      title: "Dr. Raja Ram Mohan Pal's Consultation Chamber",
      caption: "Consultation chamber equipped for comprehensive evaluation by Dr. Raja Ram Mohan Pal."
    },
    {
      url: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1600&auto=format&fit=crop",
      title: "Advanced In-House Diagnostics & ECG",
      caption: "Instant digital blood testing, Sugar monitoring, ECG, and rapid pathology reports."
    },
    {
      url: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1600&auto=format&fit=crop",
      title: "Minor Procedure Room & Emergency Aid",
      caption: "Emergency first aid, IV fluid therapy, wound dressing, and nebulization setup."
    }
  ],

  services: [
    {
      id: "general-opd",
      title: "General Medicine & OPD",
      description: "Expert evaluation and treatment for acute fever, viral infections, hypertension, thyroid, and chronic illness management.",
      iconName: "Stethoscope",
      features: ["Comprehensive physical exam", "BP & vitals tracking", "Personalized diet guidance"],
      priceTag: "Consultation ₹400",
      popular: true
    },
    {
      id: "diabetes-care",
      title: "Specialized Diabetes Care",
      description: "Complete diabetic management by Dr. Raja Ram Mohan Pal (MD Utkal). Includes HbA1c profiling, neuropathy screening, and insulin adjustment.",
      iconName: "Activity",
      features: ["HbA1c & Blood Glucose", "Diabetic Foot & Eye Check", "Custom Insulin Regimens"],
      priceTag: "Diabetic Special",
      popular: true
    },
    {
      id: "pediatrics",
      title: "Pediatric & Family Healthcare",
      description: "Gentle healthcare for children and adolescents including growth monitoring, seasonal illness treatment, and pediatric advice.",
      iconName: "Baby",
      features: ["Growth & Weight Charting", "Pediatric OPD Consultation", "Nutritional Counseling"]
    },
    {
      id: "diagnostics",
      title: "Pathology & Instant Diagnostics",
      description: "In-house rapid blood testing, sugar profile, lipid panel, thyroid profile, and digital ECG with instant digital reporting.",
      iconName: "TestTube2",
      features: ["Digital ECG Report", "Fast Blood Sampling", "Home Sample Collection"]
    },
    {
      id: "minor-procedures",
      title: "Minor Procedures & Daycare",
      description: "Immediate first-aid care, nebulization for asthma/cough, IV drip administration, surgical wound dressing, and suture removal.",
      iconName: "Syringe",
      features: ["Nebulization & Inhaler care", "IV Hydration Drips", "Hygienic Wound Dressing"]
    },
    {
      id: "health-packages",
      title: "Executive Health Checkups",
      description: "Preventive health screening packages tailored for adults and senior citizens to catch underlying issues early.",
      iconName: "HeartPulse",
      features: ["Full Body Screening", "Comprehensive Blood Panel", "Doctor Consultation Included"],
      priceTag: "From ₹999"
    }
  ] as Service[],

  reviews: [
    {
      id: "rev-1",
      author: "Priyabrata Mohanty",
      location: "Patia, Bhubaneswar",
      rating: 5,
      date: "2 weeks ago",
      comment: "Dr. Raja Ram Mohan Pal is exceptionally patient and accurate with diagnosis. He explained my father's diabetes medication so clearly. Cleanliness of HealX Medi Clinic is 10/10!",
      verified: true
    },
    {
      id: "rev-2",
      author: "Sunita Das",
      location: "Jayadev Vihar, Bhubaneswar",
      rating: 5,
      date: "1 month ago",
      comment: "Best OPD clinic near Jayadev Vihar! Received instant blood test reports and nebulization treatment for my son. Highly recommended doctor with very reasonable fees.",
      verified: true
    },
    {
      id: "rev-3",
      author: "Soumya Ranjan Nayak",
      location: "Chandrasekharpur, Bhubaneswar",
      rating: 5,
      date: "3 weeks ago",
      comment: "Very smooth experience! Sent my mother's prescription via WhatsApp prior to arrival and didn't have to wait in line. Dr. Pal's treatment worked like magic.",
      verified: true
    },
    {
      id: "rev-4",
      author: "Ananya Patnaik",
      location: "Khandagiri, Bhubaneswar",
      rating: 5,
      date: "2 months ago",
      comment: "Extremely professional clinic environment. Proper air conditioning, sanitized seats, and polite staff. Dr. Raja Ram Mohan Pal MD is our go-to family doctor in BBSR.",
      verified: true
    }
  ] as Review[]
};
