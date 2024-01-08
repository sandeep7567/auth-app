"use server";

import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { LoginSchema } from "@/schemas";

import { signIn } from "@/auth";
import * as z from "zod";
import { AuthError } from "next-auth";

export const AuthProviderLoginIn = async (provider: "github" | "google") => {
  try {
    await signIn(provider, {
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    })
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error?.type) {
        case "CallbackRouteError":
          return { error: "Invalid crendentials" }
        default:
          return { error: "Something went wrong!" }
      }
    }

    throw error;
  };
};