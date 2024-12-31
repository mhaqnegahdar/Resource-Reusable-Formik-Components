// Hooks / Packages
import React from "react";

// Components
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

// Types
import { SelectInputProps } from "@/lib/forms";

function RadioInput({
  field,
  form,
  data,
  defaultValue,
  className,
}: SelectInputProps) {
  const { setFieldValue } = form;


  return (
    <RadioGroup
      onValueChange={(value) => setFieldValue(field.name, value)}
      className={className}
      defaultValue={defaultValue}

    >
      {data?.map(({ value, label }) => (
        <div key={value} className="flex items-center space-x-2">
          <RadioGroupItem value={value} id={`${field.name}-${value}`} />
          <Label htmlFor={`${field.name}-${value}`}>{label}</Label>
        </div>
      ))}
    </RadioGroup>
  );
}

export default RadioInput;
