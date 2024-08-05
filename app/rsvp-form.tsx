"use client";

import {
  rsvpServerAction,
  confirmAttendeesServerAction,
} from "./server-actions";
import { useFormStatus, useFormState } from "react-dom";
import { Checkbox } from "@/components/ui/checkbox";
import { classNames } from "@/utils/classnames";

const initialRSVPState = {
  message: "",
  additionalPeople: [],
  mainInvitee: "",
  code: "",
};

const initialAdditionalPeopleState = {
  message: "",
  confirmedAttendees: [],
};

function RSVPButton() {
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

function SubmitAttendeesButton() {
  const { pending } = useFormStatus();

  return (
    <button
      className="mt-5 px-16 py-2 rounded bg-transparent text-slate-800 border border-slate-800 w-full"
      type="submit"
      disabled={pending}
    >
      {pending ? "Confirming..." : "Submit"}
    </button>
  );
}

function confirmationMessage(
  mainInvitee: string,
  confirmedAttendees: string[]
) {
  const isMainInviteeConfirmed = confirmedAttendees.includes(mainInvitee);
  const otherAttendeesCount = confirmedAttendees.length - 1;
  const othersText = otherAttendeesCount === 1 ? "" : "s";

  if (isMainInviteeConfirmed) {
    return confirmedAttendees.length === 1
      ? `You're locked in for the wedding ${mainInvitee}. We'll see you there!`
      : `You're locked in for the wedding ${mainInvitee} with ${otherAttendeesCount} other${othersText}. We'll see you there!`;
  } else {
    return confirmedAttendees.length === 1
      ? `Shame we won't see you there ${mainInvitee}! But we've locked in ${confirmedAttendees[0]} for the wedding. We're looking forward to seeing them!`
      : `Shame we won't see you there ${mainInvitee}! But we've locked in ${otherAttendeesCount} other${othersText} for the wedding. We're looking forward to seeing them!`;
  }
}

export function RSVPForm() {
  const [rsvpState, rsvpFormAction] = useFormState(
    rsvpServerAction,
    initialRSVPState
  );
  const [additionalPeopleState, setAdditionalPeopleFormAction] = useFormState(
    confirmAttendeesServerAction,
    initialAdditionalPeopleState
  );

  const showInitialForm = !rsvpState.message.includes("Success");
  const showAdditionalPeopleForm =
    rsvpState.message.includes("Success") &&
    !additionalPeopleState.message.includes("Success");
  const showSuccessMessage =
    additionalPeopleState.message.includes("Success") &&
    additionalPeopleState?.confirmedAttendees !== undefined;
  return (
    <div className="my-auto flex flex-col justify-center w-[316px]">
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
                placeholder="Code from invitation"
                aria-label="RSVP Code"
                required
              />
            </div>
            <RSVPButton />
            <p
              className={classNames(
                "text-sm text-green-400",
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
            Hi {rsvpState.mainInvitee}! Who else is coming?
          </h2>
          <form
            className="flex flex-col space-y-3"
            action={setAdditionalPeopleFormAction}
          >
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
            {rsvpState.additionalPeople.map((person: string, index: number) => (
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
            ))}
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
            {confirmationMessage(
              rsvpState.mainInvitee,
              additionalPeopleState.confirmedAttendees
            )}
          </p>
        </div>
      )}
    </div>
  );
}
