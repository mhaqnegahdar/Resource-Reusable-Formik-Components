import { SelectInputProps } from "@/lib/forms";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../select";

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
      onValueChange={(value) => setFieldValue(field.name, value)}
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
