"use client";

// Hooks / Packages
import React from "react";
import { Field, ErrorMessage, useFormikContext, FieldProps } from "formik";

// Utils
import { cn } from "@/lib/utils";
import { InputProps } from "@/lib/forms";
import SelectInput from "./SelectInput";

/**
 * Input component
 *
 * This component is used to handle almost all types of inputs and textareas.
 * It is a reusable component that can be used to render different types of
 * input fields and textareas with consistent styling and behavior.
 *
 * @param {InputProps} props - The props for the component.
 * @param {string} props.className - The class name for the input field.
 * @param {CustomInputTypeAttribute} props.type - The type of the input field.
 * @param {string} props.name - The name of the input field.
 * @param {string} props.label - The label for the input field.
 * @param {boolean} props.disabled - Whether the input field is disabled.
 * @param {Array} props.data - An array of objects for field options
 * @param {React.Ref<HTMLInputElement>} ref - The ref for the input field.
 * @returns {JSX.Element} - The rendered input component.
 */
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, name, label, disabled, data, ...props }, ref) => {
    const { isSubmitting } = useFormikContext();

    const inputType = type === "textarea" ? { as: type } : { type: type };

    return (
      <div className="mb-4">
        {label ? <label className="font-medium ">{label}</label> : null}
        <Field
          {...inputType}
          name={name}
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 mt-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            type === "textarea" ? "h-32" : "",
            className
          )}
          disabled={isSubmitting || disabled}
          ref={ref}
          {...props}
        >
          {["select"].includes(type)
            ? ({ field, form, meta }: FieldProps) => {
                switch (type) {
                  case "select":
                    return (
                      <SelectInput
                        field={field}
                        form={form}
                        meta={meta}
                        data={data || []}
                        defaultValue={field.value || ""}
                      />
                    );
                }
              }
            : null}
        </Field>
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
