"use server";
import { sql } from "@vercel/postgres";

export async function addUserToWaitlist(
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
      message: "You've already RSVP'ed",
    };
  }

  console.log({
    additionalPeople: invitationExists.rows[0].additional_people,
  });

  return {
    message: "Success",
    additionalPeople: invitationExists.rows[0].additional_people,
  };
}
