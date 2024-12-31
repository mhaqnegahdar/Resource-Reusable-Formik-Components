// Hooks / Packages
import React from "react";

// Components
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

// Types
import { CheckboxInputProps } from "@/lib/forms";

function CheckboxInput({
  field,
  form,
  label,
  description,
}: CheckboxInputProps) {
  const { setFieldValue } = form;

  return (
    <div className="items-top flex space-x-2">
      <Checkbox
        id={field.name}
        {...field}
        checked={field.value}
        onCheckedChange={() => {
          setFieldValue(field.name, !field.value);
        }}
      />

      <div className="grid gap-1.5 leading-none">
        <Label
          htmlFor={field.name}
          className="font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {label}
        </Label>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}

export default CheckboxInput;
