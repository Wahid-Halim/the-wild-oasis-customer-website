import { getBookedDatesByCabinId, getSettings } from "../_lib/data-service";
import DateSelector from "./DateSelector";
import ReservationForm from "./ReservationForm";

const Reservation = async ({ cabin }) => {
  const [settings, bookingDates] = await Promise.all([
    getSettings(),
    getBookedDatesByCabinId(cabin?.id),
  ]);

  return (
    <div className="grid grid-cols-[1fr_600px] border border-primary-800 min-h-[400px] gap-3">
      <DateSelector
        settings={settings}
        cabin={cabin}
        bookingDates={bookingDates}
      />
      <ReservationForm cabin={cabin} />
    </div>
  );
};

export default Reservation;
