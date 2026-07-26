import { CLINIC_DATA } from "@/data/clinicData";

/**
 * Generates a pre-filled WhatsApp link for booking an OPD appointment
 */
export function getWhatsAppAppointmentUrl(patientName?: string, preferredDate?: string, service?: string): string {
  const number = CLINIC_DATA.whatsappNumber;
  let text = `Hello HealX Medi Clinic, I would like to book an appointment with ${CLINIC_DATA.doctor.name}.`;

  if (patientName) {
    text += `\n- Patient Name: ${patientName}`;
  }
  if (preferredDate) {
    text += `\n- Preferred Date: ${preferredDate}`;
  }
  if (service) {
    text += `\n- Service Required: ${service}`;
  }

  text += `\nPlease confirm available time slots.`;

  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}

/**
 * Generates a pre-filled WhatsApp link for Prescription & Medicine photo share
 */
export function getWhatsAppPrescriptionUrl(note?: string): string {
  const number = CLINIC_DATA.whatsappNumber;
  let text = `Hi HealX Medi Clinic, I am attaching my prescription / medicine strip photo for consultation with ${CLINIC_DATA.doctor.name}.`;
  
  if (note && note.trim().length > 0) {
    text += `\n\nPatient Note: ${note.trim()}`;
  }

  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}

/**
 * Generates direct click-to-call tel URI
 */
export function getPhoneCallUrl(): string {
  return `tel:${CLINIC_DATA.phoneRaw}`;
}
