"use server";

import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";
import { getVerificationTokenByToken } from "@/data/verification-token";

export const newVerficationEmail = async (token:string) => {
  const existingToken = await getVerificationTokenByToken(token);

  if (!existingToken) {
    return { error: "Token does not exist" }
  };

  const hasExpired = new Date(existingToken?.expires) < new Date();

  if (hasExpired) {
    return { error: "Token has expired" }
  };

  const existingUser = await getUserByEmail(existingToken?.email);

  if (!existingUser) {
    return { error: "Email does not exist" }
  };

  // if user email is verified then it's not going to update emailVerified again instead send a success message of "User is already verfied!"
  if (existingUser && existingUser?.emailVerified) {
    return { success: "User is already verified" }
  };

  await db.user?.update({
    where: { id: existingUser?.id },
    data: { 
      emailVerified: new Date(),
      email: existingToken?.email,
    }
  });
  
  return { success: "Email verified!" };
};