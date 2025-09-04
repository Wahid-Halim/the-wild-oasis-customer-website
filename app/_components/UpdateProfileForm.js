"use client";

import { useState } from "react";
import Image from "next/image";
import { updateGuest } from "../_lib/action";
import { useFormStatus } from "react-dom";
import SpinnerMini from "./SpinnerMini";
import Button from "./Button";

const UpdateProfileForm = ({ children, guest }) => {
  const [count, setCount] = useState(false);

  const { fullName, email, nationality, nationalID, countryFlag } = guest;

  return (
    <form
      action={updateGuest}
      className="bg-primary-900 py-8 px-12 text-lg flex gap-6 flex-col"
    >
      <div className="space-y-2">
        <label htmlFor="fullName">Full name</label>
        <input
          name="fullName"
          defaultValue={fullName}
          id="fullName"
          disabled
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="email">Email address</label>
        <input
          name="email"
          defaultValue={email}
          id="email"
          disabled
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
        />
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label htmlFor="nationality">Where are you from?</label>
          {/* Fixed: Use width/height instead of fill */}
          <Image
            src={countryFlag}
            alt="Country flag"
            width={20}
            height={15}
            className="rounded-sm object-cover"
          />
        </div>

        {children}
      </div>

      <div className="space-y-2">
        <label htmlFor="nationalID">National ID number</label>
        <input
          defaultValue={nationalID}
          id="nationalID"
          name="nationalID"
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
        />
      </div>

      <div className="flex justify-end items-center gap-6">
        <Button pendingText={"Updating..."}>Update profile</Button>
      </div>
    </form>
  );
};

export default UpdateProfileForm;
