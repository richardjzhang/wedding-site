"use server";
import { sql } from "@vercel/postgres";

export async function rsvpServerAction(
  _: {
    message: string;
  },
  formData: FormData
) {
  const rsvpCode = (formData.get("code") as string).toUpperCase();

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
        "You've already RSVP'ed that you will be attending. If you need to make a change to the attendees, please contact us.",
    };
  }

  if (invitationExists.rows[0].confirmed_count === 0) {
    return {
      message:
        "You've already RSVP'ed that you can't attend. If you need to make a change, please contact us.",
    };
  }

  return {
    message: "Success",
    mainInvitee: `${invitationExists.rows[0].first_name} ${invitationExists.rows[0].last_name}`,
    additionalPeople: invitationExists.rows[0].additional_people,
    code: rsvpCode,
    cannotAttend: false,
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
  const dietaryRequirements = formData.get("dietaryRequirements") as string;
  const attendeesArray = attendees.map(String);
  const attendeesPgArray = `{${attendeesArray.join(",")}}`;
  const cannotAttend = formData.get("cannotAttend") === "on";

  if (cannotAttend) {
    try {
      await sql`
      UPDATE wedding_invitations
      SET confirmed_count = 0
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
      confirmedAttendees: [],
    };
  } else {
    try {
      await sql`
      UPDATE wedding_invitations
      SET confirmed_attendees = ${attendeesPgArray}, confirmed_count = ${attendeesArray.length}, dietary_requirements = ${dietaryRequirements}
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
}
