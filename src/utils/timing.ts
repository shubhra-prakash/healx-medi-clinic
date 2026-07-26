export interface OPDStatus {
  isOpen: boolean;
  isMorningSession: boolean;
  isEveningSession: boolean;
  statusText: string;
  subText: string;
  badgeClass: string;
}

/**
 * Calculates real-time OPD status for HealX Medi Clinic based on Indian Standard Time (IST)
 */
export function getRealtimeOPDStatus(): OPDStatus {
  // Get current UTC time
  const now = new Date();
  
  // Convert to IST (UTC + 5:30)
  const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
  const istOffset = 5.5 * 60 * 60 * 1000;
  const istDate = new Date(utc + istOffset);

  const dayOfWeek = istDate.getDay(); // 0 = Sun, 1 = Mon, ..., 6 = Sat
  const hour = istDate.getHours();
  const minute = istDate.getMinutes();
  const currentMinutes = hour * 60 + minute;

  // Schedule thresholds in minutes
  const morningStart = 9 * 60;   // 09:00 AM (540 mins)
  const morningEnd = 13 * 60;    // 01:00 PM (780 mins)
  const eveningStart = 17 * 60;  // 05:00 PM (1020 mins)
  const eveningEnd = 21 * 60;    // 09:00 PM (1260 mins)

  // Sunday
  if (dayOfWeek === 0) {
    return {
      isOpen: false,
      isMorningSession: false,
      isEveningSession: false,
      statusText: "Closed Today (Sunday)",
      subText: "Emergency / Prior Appointment Only. Reopens Mon 9:00 AM",
      badgeClass: "bg-rose-500/10 text-rose-700 border-rose-200"
    };
  }

  // Weekdays (Mon - Sat)
  const isMorning = currentMinutes >= morningStart && currentMinutes < morningEnd;
  const isEvening = currentMinutes >= eveningStart && currentMinutes < eveningEnd;

  if (isMorning) {
    return {
      isOpen: true,
      isMorningSession: true,
      isEveningSession: false,
      statusText: "Open Now • Morning OPD Active",
      subText: "Dr. Raja Ram Mohan Pal Available (Closes 1:00 PM)",
      badgeClass: "bg-emerald-500/15 text-emerald-700 border-emerald-300 shadow-sm animate-pulse-subtle"
    };
  }

  if (isEvening) {
    return {
      isOpen: true,
      isMorningSession: false,
      isEveningSession: true,
      statusText: "Open Now • Evening OPD Active",
      subText: "Dr. Raja Ram Mohan Pal Available (Closes 9:00 PM)",
      badgeClass: "bg-emerald-500/15 text-emerald-700 border-emerald-300 shadow-sm animate-pulse-subtle"
    };
  }

  // Afternoon break (1:00 PM to 5:00 PM)
  if (currentMinutes >= morningEnd && currentMinutes < eveningStart) {
    return {
      isOpen: false,
      isMorningSession: false,
      isEveningSession: false,
      statusText: "Mid-Day Break",
      subText: "Next OPD Session starts at 5:00 PM Today",
      badgeClass: "bg-amber-500/15 text-amber-700 border-amber-300"
    };
  }

  // Late night / Early morning before 9 AM
  if (currentMinutes < morningStart) {
    return {
      isOpen: false,
      isMorningSession: false,
      isEveningSession: false,
      statusText: "Closed for the Night",
      subText: "Morning OPD Session opens at 9:00 AM",
      badgeClass: "bg-slate-500/15 text-slate-700 border-slate-300"
    };
  }

  // After 9 PM
  return {
    isOpen: false,
    isMorningSession: false,
    isEveningSession: false,
    statusText: "Closed for Today",
    subText: "Opens tomorrow at 9:00 AM",
    badgeClass: "bg-slate-500/15 text-slate-700 border-slate-300"
  };
}
