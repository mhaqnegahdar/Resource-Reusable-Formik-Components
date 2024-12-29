"use client";
import { Button } from "@/components/ui/button";
import { useFormikContext } from "formik";
import React from "react";

function SubmitButton() {
  const { isSubmitting } = useFormikContext();

  return (
    <Button type="submit" disabled={isSubmitting}>
      SubmitButton
    </Button>
  );
}

export default SubmitButton;
