"use client";

import { FC } from "react";
import { Button } from "@/components/ui/button";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

interface SocialProps {}

export const Social: FC<SocialProps> = ({}: SocialProps) => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");
  console.log(callbackUrl);

  const onClick = (provider: "google" | "github") => {
    signIn(provider, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT,
    });
  };

  return (
    <div className="flex items-center w-full gap-x-2">
      <Button
        size={"lg"}
        className="w-full"
        variant={"outline"}
        onClick={() => onClick("google")}
      >
        <FcGoogle />
      </Button>
      <Button
        size={"lg"}
        className="w-full"
        variant={"outline"}
        onClick={() => onClick("github")}
      >
        <FaGithub />
      </Button>
    </div>
  );
};
