"use server";

import * as z from "zod";

import { ResetSchema } from "@/schemas";
import { getUserByEmail } from "@/data/user";

import { generatePasswordResetToken } from "@/lib/token";
import { sendPasswordResetEmail } from "@/lib/mail";

export const reset = async (values: z.infer<typeof ResetSchema>) => {
  const validatedFields = ResetSchema.safeParse(values);

  if (!validatedFields?.success) {
    return { error: "Invalid email" }
  };

  const { email } = validatedFields.data;

  const existingUser = await getUserByEmail(email);

  if (!existingUser) {
    return { error: "Email not found" };
  };

  // TODO: Generate token and send email;
  const passwordResetToken = await generatePasswordResetToken(email);

  // mail sending
  await sendPasswordResetEmail(passwordResetToken?.email, passwordResetToken?.token);

  return { success: "Reset email sent" };

};