"use client";

import { UserRole } from "@prisma/client";

import { useCurrentRole } from "@/hooks/user-current-role";
import { FC } from "react";
import { FormError } from "../form-error";

interface RoleGateProps {
  children: React.ReactNode;
  allowRole: UserRole;
};

export const RoleGate: FC<RoleGateProps> = ({ allowRole, children }: RoleGateProps) => {
  const role = useCurrentRole();
  if (role !== allowRole) {
    return (
      <FormError message="You do not have permission to view this content" />
    );
  };

  return (
    <>
      {children}
    </>
  )
};
