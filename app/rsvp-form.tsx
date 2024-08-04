"use client";

import { addUserToWaitlist } from "./utils";
import { useFormStatus, useFormState } from "react-dom";
import { classNames } from "@/utils/classnames";

const initialState = {
  message: "",
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      className="mt-5 px-16 py-2 rounded bg-transparent text-slate-800 border border-slate-800 w-full"
      type="submit"
      disabled={pending}
    >
      {pending ? "RSVPing..." : "Submit"}
    </button>
  );
}

export function RSVPForm() {
  const [state, formAction] = useFormState(addUserToWaitlist, initialState);

  return (
    <form className="flex flex-col items-center" action={formAction}>
      <div className="border-b border-slate-900 py-2 w-full">
        <input
          className="mt-2 appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          name="code"
          placeholder="Code from invitation"
          aria-label="RSVP Code"
          required
        />
      </div>
      <SubmitButton />
      <p
        className={classNames(
          "text-sm text-green-400",
          state?.message && "mt-3",
          state?.message.includes("Invalid") ? "mt-3 text-red-400" : ""
        )}
      >
        {state?.message}
      </p>
    </form>
  );
}
