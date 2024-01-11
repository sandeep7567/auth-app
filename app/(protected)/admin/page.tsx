"use client";

import { UserRole } from "@prisma/client";

import { RoleGate } from "@/components/auth/role-gate";
import { FormSuccess } from "@/components/form-success";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { toast } from "sonner";
import { admin } from "@/actions/admins";

const AdminPage = () => {
  const onServerActionClick = () => {
    ;(async () => {
      const data = await admin();
      if (data?.error) {
        toast?.error(data?.error);
      }
      if (data?.success) {
        toast?.success(data?.success);
      }
    })();
  };

  const onApiRouteClick = () => {
    fetch(`api/admin`).then((res) => {
      if (res.ok) {
        toast.success("Allowed Api Route");
      } else {
        toast.error("Forbidden!");
      }
    });
  };

  return (
    <Card className="w-[600px]">
      <CardHeader>
        <p className="text-2xl font-medium text-center">Admin</p>
      </CardHeader>

      <CardContent className="space-y-4">
        <RoleGate allowRole={UserRole?.ADMIN}>
          <FormSuccess message="You are allowed to see this content" />
        </RoleGate>

        <div className="flex flex-row justify-between items-center rounded-lg border p-3 shadow-sm">
          <p className="text-sm font-medium">Admin only API (Client) Route</p>
          <Button onClick={onApiRouteClick}>Click to test</Button>
        </div>

        <div className="flex flex-row justify-between items-center rounded-lg border p-3 shadow-sm">
          <p className="text-sm font-medium">Admin only Server Route</p>
          <Button onClick={onServerActionClick}>Click to test</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AdminPage;
