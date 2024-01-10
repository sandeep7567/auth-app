"use client";

import { FC, useCallback, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import { BeatLoader } from "react-spinners";
import { CardWrapper } from "@/components/auth/card-wrapper";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";

import { newVerficationEmail } from "@/actions/new-verification";

const NewVerificationForm = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  const searchParams = useSearchParams();
  const token = searchParams?.get("token");
  const onSubmit = useCallback(() => {
    if (!token) {
      setError("missing token!");
      return;
    };
    newVerficationEmail(token)
      .then((data) => {
        setSuccess(data?.success);
        setError(data?.error);
      })
      .catch(() => {
        setError("Something went wrong!");
      });
  }, [token]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);
  
  return (
    <CardWrapper
      headerLabel="Confirming your Verification"
      backButtonHref="/auth/login"
      backButtonLabel="Back to login"
    >
      <div className="flex justify-center items-center">
        {!error && !success && <BeatLoader />}
        <FormSuccess message={success} />
        {!success && 
        <FormError message={error} />
        }
      </div>
    </CardWrapper>
  );
};

export default NewVerificationForm;
