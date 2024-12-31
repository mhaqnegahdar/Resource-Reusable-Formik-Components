// Hooks / Packages
import * as Yup from "yup";

// Types
import { FieldProps, FormikConfig } from "formik";
import { HTMLInputTypeAttribute } from "react";
import {
  CloudinaryUploadWidgetInfo,
  CloudinaryUploadWidgetResults,
} from "next-cloudinary";

type CustomInputTypeAttribute =
  | "textarea"
  | "combobox"
  | HTMLInputTypeAttribute;

// Inputs
export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  name: string;
  label?: string;
  type: CustomInputTypeAttribute;
  className?: string;
  disabled?: boolean;

  data?: Array<{ value: string; label: string }>;

  description?: string;
}

export interface SelectInputProps extends FieldProps {
  data: Array<{ value: string; label: string }>;
  defaultValue: string;
  className?: string;
}
export interface CheckboxInputProps extends FieldProps {
  defaultValue: string;
  className?: string;
  label: string;
  description?: string;
}

export interface ImageInputProps extends FieldProps {
  disabled: boolean;
  multiChoice?: boolean;
}

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

// Type Gaurd
export function isCloudinaryUploadResult(
  result: CloudinaryUploadWidgetResults
): result is CloudinaryUploadWidgetResults & {
  info: CloudinaryUploadWidgetInfo;
} {
  return (
    result.info != null &&
    typeof result.info === "object" &&
    result.info.secure_url != null
  );
}
