"use server";
import { isValid } from "date-fns";
import { auth, signIn, signOut } from "./auth";
import { supabase } from "./supabase";
import { revalidatePath } from "next/cache";

const nationalIdRegex = /^[a-zA-Z0-9]{6,12}$/;

function isValidNationalId(id) {
  return nationalIdRegex.test(id);
}

export const updateGuest = async (formData) => {
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
