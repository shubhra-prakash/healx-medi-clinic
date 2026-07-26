"use client";

import { useEffect, useState } from "react";
import { getRealtimeOPDStatus, OPDStatus } from "@/utils/timing";
import { Clock } from "lucide-react";

interface TimingBadgeProps {
  showSubText?: boolean;
  className?: string;
}

export default function TimingBadge({ showSubText = false, className = "" }: TimingBadgeProps) {
  const [status, setStatus] = useState<OPDStatus | null>(null);

  useEffect(() => {
    // Initial calculation
    setStatus(getRealtimeOPDStatus());

    // Update every minute
    const interval = setInterval(() => {
      setStatus(getRealtimeOPDStatus());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  if (!status) {
    return (
      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-500 border border-slate-200 animate-pulse ${className}`}>
        <Clock className="w-3.5 h-3.5" /> Checking OPD Availability...
      </div>
    );
  }

  return (
    <div className={`inline-flex flex-col sm:flex-row sm:items-center gap-1.5 ${className}`}>
      <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold border ${status.badgeClass}`}>
        <span className="relative flex h-2.5 w-2.5">
          {status.isOpen ? (
            <>
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </>
          ) : (
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-slate-400"></span>
          )}
        </span>
        <span>{status.statusText}</span>
      </div>
      {showSubText && (
        <span className="text-xs text-slate-500 font-medium pl-1 sm:pl-0">
          {status.subText}
        </span>
      )}
    </div>
  );
}
