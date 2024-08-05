"use server";
import { sql } from "@vercel/postgres";

export async function rsvpServerAction(
  _: {
    message: string;
  },
  formData: FormData
) {
  const rsvpCode = formData.get("code") as string;

  const invitationExists = await sql`
    SELECT * FROM wedding_invitations WHERE rsvp_code = ${rsvpCode}
  `;

  if (invitationExists.rows.length === 0) {
    return {
      message: "Invalid RSVP code",
    };
  }

  if (invitationExists.rows[0].confirmed_attendees !== null) {
    return {
      message:
        "You've already RSVP'ed. If you need to make a change to your booking, please contact Annie or Richard!",
    };
  }

  return {
    message: "Success",
    mainInvitee: invitationExists.rows[0].first_name,
    additionalPeople: invitationExists.rows[0].additional_people,
    code: rsvpCode,
  };
}

export async function confirmAttendeesServerAction(
  _: {
    message: string;
  },
  formData: FormData
) {
  const attendees = formData.getAll("attendee");
  const code = formData.get("code") as string;
  const attendeesArray = attendees.map(String);
  const attendeesPgArray = `{${attendeesArray.join(",")}}`;

  try {
    await sql`
    UPDATE wedding_invitations
    SET confirmed_attendees = ${attendeesPgArray}, confirmed_count = ${attendeesArray.length}
    WHERE rsvp_code = ${code}
  `;
  } catch (error) {
    console.log({ error });
    return {
      message: "Error",
    };
  }

  return {
    message: "Success",
    confirmedAttendees: attendeesArray,
  };
}
