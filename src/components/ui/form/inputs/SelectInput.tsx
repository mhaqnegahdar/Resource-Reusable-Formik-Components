// Hooks / Packages
import React from "react";

// Components
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Types
import { SelectInputProps } from "@/lib/forms";

export default function SelectInput({
  field,
  form,
  data,
  defaultValue,
}: SelectInputProps) {
  const { setFieldValue } = form;

  return (
    <Select
      {...field}
      onValueChange={(value:unknown) => setFieldValue(field.name, value)}
      defaultValue={defaultValue?.toString()}
    >
      <SelectTrigger>
        <SelectValue defaultValue={defaultValue} />
      </SelectTrigger>
      <SelectContent>
        {data.map(({ value, label }) => (
          <SelectItem key={value} value={value}>
            {label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
