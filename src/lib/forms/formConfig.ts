// Hooks / Packages
import * as Yup from "yup";

// Types
import { FormikConfig } from "formik";
import { InputProps } from "@/components/ui/form/Input";

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

export type FormSubmitType<T> = FormikConfig<T>["onSubmit"];
