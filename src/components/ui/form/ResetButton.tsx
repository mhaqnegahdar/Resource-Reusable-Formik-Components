"use client";

// Hooks / Packages
import { useFormikContext } from "formik";
import React from "react";

// Components
import { Button } from "@/components/ui/button";

function ResetButton({ title = "Reset" }: { title?: string }) {
  const { dirty } = useFormikContext();

  return (
    <Button type="reset" disabled={!dirty}>
      {title}
    </Button>
  );
}

export default ResetButton;
