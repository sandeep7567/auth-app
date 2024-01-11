"use client";

import { UserInfo } from "@/components/user-info";
import { useCurrentUser } from "@/hooks/user-current-user";

const ClientPage = () => {
  const user = useCurrentUser();
  return (
    <UserInfo user={user} label={"Server component rendering"} />
  );
};

export default ClientPage;
