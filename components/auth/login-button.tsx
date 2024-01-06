"use client";

import { FC, ReactNode } from "react";
import { useRouter } from "next/navigation";

interface LoginButtonProps {
  children: ReactNode;
  mode?: "redirect" | "modal";
  asChild?: boolean;
}

export const LoginButton: FC<LoginButtonProps> = ({
  children,
  mode = "redirect",
  asChild,
}: LoginButtonProps) => {
  const router = useRouter();
  const onClick = () => {
    router.push("/auth/login");
  };


  if (mode === "modal") {
    return (
      <span>
        TODO: Implement modal;
      </span>
    )
  }

  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  );
};
