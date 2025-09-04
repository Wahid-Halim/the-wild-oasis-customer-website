"use server";
import { se } from "date-fns/locale";
import { auth, signIn, signOut } from "./auth";
import { supabase } from "./supabase";
import { revalidatePath } from "next/cache";
import { getBookings } from "./data-service";
import { redirect } from "next/navigation";

export const editReservation = async (formData) => {
  const bookingId = Number(formData.get("bookingId"));
  const session = await auth();
  if (!session) throw new Error("You must be logged In!");

  const guestBookings = await getBookings(session.user.guestId);

  const guestBookingsIds = guestBookings.map((booking) => booking.id);

  if (!guestBookingsIds.includes(bookingId))
    throw new Error("Your are not allowed to update this booking");

  const updateData = {
    numGuests: Number(formData.get("numGuests")),
    observations: formData.get("observations").slice(1, 1000),
  };

  const { error } = await supabase
    .from("bookings")
    .update(updateData)
    .eq("id", bookingId)
    .select()
    .single();

  if (error) {
    throw new Error("Booking could not be updated");
  }

  revalidatePath("/account/reservations");
  revalidatePath(`/account/reservations/edit/${bookingId}`);
  redirect("/account/reservations");
};

export const deleteReservation = async (bookingId) => {
  const session = await auth();
  if (!session) throw new Error("You must be logged In!");

  const guestBookings = await getBookings(session.user.guestId);

  const guestBookingsIds = guestBookings.map((booking) => booking.id);

  if (!guestBookingsIds.includes(bookingId))
    throw new Error("Your are not allowed to delete this booking");

  const { error } = await supabase
    .from("bookings")
    .delete()
    .eq("id", bookingId);

  if (error) {
    throw new Error("Booking could not be deleted");
  }

  revalidatePath("/account/reservations");
};

export const updateGuest = async (formData) => {
  // range between 6,12 and valid id
  const nationalIdRegex = /^[a-zA-Z0-9]{6,12}$/;

  function isValidNationalId(id) {
    return nationalIdRegex.test(id);
  }

  const session = await auth();

  if (!session) throw new Error("You must be logged In!");
  const nationalID = formData.get("nationalID");
  const [nationality, countryFlag] = formData.get("nationality").split("%");

  if (!isValidNationalId(nationalID))
    throw new Error("please enter  a valid national Id");

  const updateData = { nationality, nationalID, countryFlag };

  const { data, error } = await supabase
    .from("guests")
    .update(updateData)
    .eq("id", session.user.guestId);

  if (error) {
    throw new Error("Guest could not be updated");
  }

  revalidatePath("/account/profile");
};

export const signInAction = async () => {
  await signIn("google", { redirectTo: "/account" });
};

export const signOutAction = async () => {
  await signOut({ redirectTo: "/" });
};
