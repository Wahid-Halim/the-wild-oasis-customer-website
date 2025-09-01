import { getBookedDatesByCabinId, getCabin } from "@/app/_lib/data-service";

export const GET = async (request, { params }) => {
  const { cabinId } = await params;

  try {
    const [cabin, bookedDates] = await Promise.all([
      getCabin(cabinId),
      getBookedDatesByCabinId(cabinId),
    ]);
    return Response.json({ cabin, bookedDates });
  } catch (err) {
    return Response.json({ message: "Cabin not found" });
  }
};
// export const POST = async () => {}
