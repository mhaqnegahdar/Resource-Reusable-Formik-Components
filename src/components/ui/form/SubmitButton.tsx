"use client";
// Hooks / Packages
import { useFormikContext } from "formik";
import React from "react";

// Components
import { Button } from "@/components/ui/button";

function SubmitButton({ title = "Submit" }: { title?: string }) {
  const { isSubmitting, dirty, isValid } = useFormikContext();

  return (
    <Button type="submit" disabled={!isValid || !dirty || isSubmitting}>
      {title}
    </Button>
  );
}

export default SubmitButton;
