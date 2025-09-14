"use client";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { format } from "date-fns";
import { useReservation } from "@/app/_context/ReservationContext";

const ReservationReminder = () => {
  const { range, resetRange } = useReservation();

  if (!range.from || !range.to) return null;

  return (
    <div className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 py-3 sm:py-5 px-4 sm:px-6 lg:px-8 rounded-full bg-accent-500 text-primary-800 text-sm sm:text-base font-semibold shadow-xl shadow-slate-900 flex gap-4 sm:gap-6 lg:gap-8 items-center max-w-[calc(100vw-2rem)] sm:max-w-none">
      <p className="text-center sm:text-left">
        <span>👋</span> Don&apos;t forget to reserve your dates{" "}
        <br className="hidden sm:block" /> from{" "}
        {format(new Date(range.from), "MMM dd yyyy")} to{" "}
        {format(new Date(range.to), "MMM dd yyyy")}
      </p>
      <button
        className="rounded-full p-1 hover:bg-accent-600 transition-all flex-shrink-0"
        onClick={resetRange}
      >
        <XMarkIcon className="h-4 w-4 sm:h-5 sm:w-5" />
      </button>
    </div>
  );
};

export default ReservationReminder;
