"use client";

import { useState } from "react";
import {
  rsvpServerAction,
  confirmAttendeesServerAction,
} from "./server-actions";
import { useFormStatus, useFormState } from "react-dom";
import { Checkbox } from "@/components/ui/checkbox";
import { classNames } from "@/utils/classnames";
import { useSearchParams } from "next/navigation";

const initialRSVPState = {
  message: "",
  additionalPeople: [],
  mainInvitee: "",
  code: "",
  cannotAttend: false,
};

const initialAdditionalPeopleState = {
  message: "",
  confirmedAttendees: [],
};

function RSVPButton() {
  const { pending } = useFormStatus();

  return (
    <button
      className="mt-5 px-16 py-2 rounded bg-pink-400 text-white border hover:bg-transparent hover:text-pink-400 hover:border-pink-300 w-full"
      type="submit"
      disabled={pending}
    >
      {pending ? "RSVPing..." : "Submit"}
    </button>
  );
}

function SubmitAttendeesButton() {
  const { pending } = useFormStatus();

  return (
    <button
      className="mt-8 px-16 py-2 rounded text-white border bg-pink-400 hover:bg-transparent hover:text-pink-400 hover:border-pink-300 w-full"
      type="submit"
      disabled={pending}
    >
      {pending ? "Confirming..." : "Submit"}
    </button>
  );
}

function confirmationMessage(confirmedAttendees: string[]) {
  if (confirmedAttendees.length > 0) {
    return "We can't wait to see you there. Thank you for coming to our special day!";
  }

  return "Sorry to hear you can't make it. We'll miss you!";
}

export function RSVPForm() {
  const searchParams = useSearchParams();
  const [rsvpState, rsvpFormAction] = useFormState(
    rsvpServerAction,
    initialRSVPState
  );
  const [additionalPeopleState, setAdditionalPeopleFormAction] = useFormState(
    confirmAttendeesServerAction,
    initialAdditionalPeopleState
  );
  const [rsvpCode, setRsvpCode] = useState(searchParams.get("code") || "");

  const showInitialForm = !rsvpState.message.includes("Success");
  const showAdditionalPeopleForm =
    rsvpState.message.includes("Success") &&
    !additionalPeopleState.message.includes("Success");
  const showSuccessMessage =
    additionalPeopleState.message.includes("Success") &&
    additionalPeopleState?.confirmedAttendees !== undefined;
  return (
    <div className="my-auto flex flex-col justify-center max-w-full md:w-[316px]">
      {showInitialForm && (
        <>
          <h3 className="text-4xl mb-4 font-bellefair text-center">
            Enter your RSVP Code
          </h3>
          <form className="flex flex-col items-center" action={rsvpFormAction}>
            <div className="border-b border-slate-900 py-2 w-full">
              <input
                className="mt-2 appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text"
                name="code"
                value={rsvpCode}
                onChange={(e) => setRsvpCode(e.target.value)}
                placeholder="Code from invitation"
                aria-label="RSVP Code"
                required
              />
            </div>
            <RSVPButton />
            <p
              className={classNames(
                "text-sm text-slate-400",
                rsvpState.message && "mt-3",
                rsvpState.message.includes("Invalid") ? "mt-3 text-red-400" : ""
              )}
            >
              {rsvpState.message}
            </p>
          </form>
        </>
      )}
      {showAdditionalPeopleForm && (
        <div>
          <h2 className="text-4xl mb-4 font-bellefair text-center">
            Please confirm who&apos;s coming and any dietary requirements
          </h2>
          <form
            className="flex flex-col"
            action={setAdditionalPeopleFormAction}
          >
            <div className="flex flex-col space-y-3">
              <div className="flex items-top space-x-2">
                <Checkbox
                  id={rsvpState.mainInvitee}
                  name="attendee"
                  value={rsvpState.mainInvitee}
                />
                <div className="grid gap-1.5 leading-none">
                  <label
                    htmlFor={rsvpState.mainInvitee}
                    className="font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {rsvpState.mainInvitee}
                  </label>
                </div>
              </div>
              {rsvpState.additionalPeople &&
                rsvpState.additionalPeople.map(
                  (person: string, index: number) => (
                    <div
                      key={`${person}-${index}`}
                      className="items-top flex space-x-2"
                    >
                      <Checkbox
                        id={`${person}-${index}`}
                        name="attendee"
                        value={person}
                      />
                      <div className="grid gap-1.5 leading-none">
                        <label
                          htmlFor={`${person}-${index}`}
                          className="font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {person}
                        </label>
                      </div>
                    </div>
                  )
                )}
            </div>
            <div className="py-2 w-full mt-5">
              <h2 className="text-xl font-bellefair">Dietary Requirements</h2>
              <input
                className="mt-2 appearance-none bg-transparent border border-slate-500 w-full text-gray-700 mr-3 py-4 px-6 leading-tight focus:outline-none rounded"
                type="text"
                name="dietaryRequirements"
                placeholder="Nut allergy for person 1 etc."
                aria-label="Dietary Requirements"
              />
            </div>
            <div className="flex items-center justify-center my-6">
              <div className="border-b border-slate-500 w-full" />
              <div className="mx-2 text-slate-500">OR</div>
              <div className="border-b border-slate-500 w-full" />
            </div>
            <div className="flex items-top space-x-2">
              <Checkbox id="cannot-attend" name="cannotAttend" />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="cannot-attend"
                  className="font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {rsvpState.additionalPeople ? "We" : "I"} won&apos;t be able
                  to make it
                </label>
              </div>
            </div>

            <SubmitAttendeesButton />
            <input type="hidden" name="code" value={rsvpState.code} />
          </form>
        </div>
      )}
      {showSuccessMessage && (
        <div>
          <h2 className="text-4xl mb-4 font-bellefair text-center">
            Thanks for confirming!
          </h2>
          <p className="text-slate-800 text-center text-lg">
            {confirmationMessage(additionalPeopleState.confirmedAttendees)}
          </p>
        </div>
      )}
    </div>
  );
}
