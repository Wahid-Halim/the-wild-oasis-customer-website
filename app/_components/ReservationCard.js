import { PencilSquareIcon } from "@heroicons/react/24/solid";
import { format, formatDistance, isPast, isToday, parseISO } from "date-fns";
import DeleteReservation from "@/app/_components/DeleteReservation";
import Image from "next/image";
import Link from "next/link";

// Safe helper function
export const formatDistanceFromNow = (dateStr) => {
  if (!dateStr) return "Invalid date";

  try {
    return formatDistance(parseISO(dateStr), new Date(), {
      addSuffix: true,
    }).replace("about ", "");
  } catch {
    return "Invalid date";
  }
};

function ReservationCard({ booking, onDelete }) {
  const {
    id,
    guestId,
    startDate,
    endDate,
    numNights,
    totalPrice,
    numGuests,
    status,
    created_at,
    cabins: { name, image },
  } = booking;

  return (
    <div className="flex flex-col  md:flex-row border border-primary-800 ">
      <div className="relative h-48 sm:h-32 sm:aspect-square">
        <Image
          src={image}
          alt={`Cabin ${name}`}
          className="object-cover md:border-r border-primary-800"
          fill
        />
      </div>

      <div className="flex-grow px-4 md:px-6 py-3 flex flex-col">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-0">
          <h3 className="text-lg md:text-xl font-semibold">
            {numNights} nights in Cabin {name}
          </h3>
          {startDate && isPast(new Date(startDate)) ? (
            <span className="bg-yellow-800 text-yellow-200 h-6 md:h-7 px-2 md:px-3 uppercase text-xs font-bold flex items-center rounded-md self-start md:self-auto">
              past
            </span>
          ) : (
            <span className="bg-green-800 text-green-200 h-6 md:h-7 px-2 md:px-3 uppercase text-xs font-bold flex items-center rounded-md self-start md:self-auto">
              upcoming
            </span>
          )}
        </div>

        <p className="text-md md:text-base lg:text-lg text-primary-300 mt-2 md:mt-0">
          {startDate
            ? `${format(new Date(startDate), "EEE, MMM dd yyyy")} (${
                isToday(new Date(startDate))
                  ? "Today"
                  : formatDistanceFromNow(startDate)
              }) — ${
                endDate
                  ? format(new Date(endDate), "EEE, MMM dd yyyy")
                  : "Unknown end date"
              }`
            : "Unknown reservation date"}
        </p>

        <div className="flex flex-col md:flex-row gap-2 md:gap-5 mt-auto items-start md:items-baseline">
          <div className="flex items-center gap-2 md:gap-5">
            <p className="text-lg md:text-xl font-semibold text-accent-400">
              ${totalPrice}
            </p>
            <p className="text-primary-300 hidden md:inline">&bull;</p>
            <p className="text-md md:text-base lg:text-lg text-primary-300">
              {numGuests} guest{numGuests > 1 && "s"}
            </p>
          </div>
          <p className="text-xs md:text-md text-primary-400 md:ml-auto">
            Booked{" "}
            {created_at
              ? format(new Date(created_at), "EEE, MMM dd yyyy, p")
              : "Unknown date"}
          </p>
        </div>
      </div>

      <div className="flex flex-row md:flex-col border-t md:border-t-0 md:border-l border-primary-800 w-full md:w-[100px]">
        {startDate && !isPast(new Date(startDate)) ? (
          <>
            <Link
              href={`/account/reservations/edit/${id}`}
              className="group flex items-center justify-center md:justify-start gap-2 uppercase text-xs font-bold text-primary-300 border-r md:border-r-0 md:border-b border-primary-800 flex-grow md:flex-grow px-3 py-3 md:py-0 hover:bg-accent-600 transition-colors hover:text-primary-900"
            >
              <PencilSquareIcon className="h-4 w-4 md:h-5 sm:w-5 text-primary-600 group-hover:text-primary-800 transition-colors" />
              <span className="mt-0 sm:mt-1">Edit</span>
            </Link>
            <DeleteReservation bookingId={id} onDelete={onDelete} />
          </>
        ) : null}
      </div>
    </div>
  );
}

export default ReservationCard;
