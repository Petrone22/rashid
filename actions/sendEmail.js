"use server";

import { Resend } from "resend";

import { validateString } from "@/lib/utils";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData) => {
  const message = formData.get("message");
  const senderEmail = formData.get("senderEmail");

  if (!validateString(senderEmail)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message)) {
    return {
      error: "Invalid message",
    };
  }

  try {
    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "urdeath76@gmail.com",
      reply_to: senderEmail,
      subject: "message from my Contact Form",
      text: message,
    });
  } catch (error) {
    console.log(error);
    return {
      error: error.message,
    };
  }
};
