"use client";

import { FC, ReactNode } from "react";
import { useRouter } from "next/navigation";

import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { LoginForm } from "./login-form";
import { RegisterForm } from "./register-form";

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
      <Dialog>
        <DialogTrigger asChild={asChild}>
          {children}
        </DialogTrigger>
        <DialogContent className="p-0 w-auto bg-transparent border-none">
          <LoginForm/>
        </DialogContent>
      </Dialog>
    )
  };
  
  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  );
};
