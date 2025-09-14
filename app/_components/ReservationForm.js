"use client";

import { differenceInDays } from "date-fns";
import { useReservation } from "../_context/ReservationContext";
import { createBooking } from "../_lib/action";
import Button from "./Button";

function ReservationForm({ cabin, user }) {
  const { range, resetRange } = useReservation();

  const { maxCapaciy, regularPrice, discount, id } = cabin;

  const startDate = range.from;
  const endDate = range.to;

  const numNights = differenceInDays(endDate, startDate);

  const cabinPrice = numNights * (regularPrice - discount);

  const bookingData = {
    startDate,
    endDate,
    numNights,
    cabinPrice,
    cabinId: id,
  };

  const createBookingWithData = createBooking.bind(null, bookingData);

  return (
    <div className="scale-[1.01] basis-[300px] w-full max-w-sm mx-auto lg:mx-0">
      <div className="bg-primary-800 text-primary-300 px-4 sm:px-8 lg:px-16 py-2 flex justify-between items-center text-sm sm:text-base">
        <p>Logged in as</p>

        <div className="flex gap-2 sm:gap-4 items-center">
          <img
            // Important to display google profile images
            referrerPolicy="no-referrer"
            className="h-6 sm:h-8 rounded-full"
            src={user.image}
            alt={user.name}
          />

          <p className="hidden sm:inline">{user.name}</p>
        </div>
      </div>

      <form
        action={async function (formData) {
          createBookingWithData(formData);
          resetRange();
        }}
        className="bg-primary-900 py-6 sm:py-8 lg:py-10 px-4 sm:px-8 lg:px-16 text-base sm:text-lg flex gap-4 sm:gap-5 flex-col"
      >
        <div className="space-y-2">
          <label htmlFor="numGuests">How many guests?</label>
          <select
            name="numGuests"
            id="numGuests"
            className="px-3 sm:px-5 py-2 sm:py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm text-sm sm:text-base"
            required
          >
            <option value="" key="">
              Select number of guests...
            </option>
            {Array.from({ length: maxCapaciy }, (_, i) => i + 1).map((x) => (
              <option value={x} key={x}>
                {x} {x === 1 ? "guest" : "guests"}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="observations">
            Anything we should know about your stay?
          </label>
          <textarea
            name="observations"
            id="observations"
            className="px-3 sm:px-5 py-2 sm:py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm text-sm sm:text-base"
            placeholder="Any pets, allergies, special requirements, etc.?"
            rows="3"
          />
        </div>

        <div className="flex justify-end items-center gap-4 sm:gap-6">
          {!(startDate && endDate) ? (
            <p className="text-primary-300 text-sm sm:text-base">
              Start by selecting dates
            </p>
          ) : (
            <Button pendingText="Reserving...">Reserve now</Button>
          )}
        </div>
      </form>
    </div>
  );
}

export default ReservationForm;
