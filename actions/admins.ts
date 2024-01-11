"use server";

import { currentRole } from "@/lib/auth";
import { UserRole } from "@prisma/client";
import { error } from "console";

export const admin = async () => {
  const role = await currentRole();

  if (role === UserRole?.ADMIN) {
    return { success: "Allow Server Action!" };
  };

  return { error: "Forbidden Server Action!" }
};