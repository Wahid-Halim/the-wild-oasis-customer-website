import Button from "@/app/_components/Button";
import { editReservation } from "@/app/_lib/action";
import { getBooking, getCabin } from "@/app/_lib/data-service";

const Page = async ({ params }) => {
  const { id } = await params;

  const { numGuests, observations, cabinId } = await getBooking(id);
  const { maxCapaciy } = await getCabin(cabinId);

  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-7">
        Edit Reservation #{id}
      </h2>

      <form
        className="bg-primary-900 py-8 px-12 text-lg flex gap-6 flex-col"
        action={editReservation}
      >
        <input type="hidden" value={id} name="bookingId" />
        <div className="space-y-2">
          <label htmlFor="numGuests">How many guests?</label>
          <select
            defaultValue={numGuests}
            name="numGuests"
            id="numGuests"
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
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
            defaultValue={observations}
            name="observations"
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
          />
        </div>

        <div className="flex justify-end items-center gap-6">
          <Button pendingText={"Updating..."}>Update Reservation</Button>
        </div>
      </form>
    </div>
  );
};

export default Page;
