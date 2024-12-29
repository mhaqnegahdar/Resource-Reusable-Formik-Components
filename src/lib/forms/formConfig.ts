import * as Yup from "yup";
import { InputProps } from "@/components/ui/inputs/input";

export type FormFieldConfig<T> = {
  [K in keyof T]: {
    initialValue: T[K];
    validation: Yup.Schema<T[K]>;
    inputProps: Omit<InputProps, "name">;
  };
};

export type FormConfig<T extends Yup.AnyObject> = {
  initialValues: T;
  validationSchema: Yup.ObjectSchema<T>;
  fields: FormFieldConfig<T>;
};
