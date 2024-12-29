"use client";

// Hooks / Packages
import React from "react";
import { Field, ErrorMessage, useFormikContext } from "formik";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, name, label, disabled, ...props }, ref) => {
    const { isSubmitting } = useFormikContext();

    return (
      <div className="mb-4">
        {label ? <label className="font-medium ">{label}</label> : null}
        <Field
          type={type}
          name={name}
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 mt-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          disabled={isSubmitting || disabled}
          ref={ref}
          {...props}
        ></Field>
        <ErrorMessage
          name={name}
          component={"small"}
          className="text-rose-500 mt-2 ms-2 text-xs "
        />
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
