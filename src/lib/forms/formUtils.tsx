// Hooks / Packages
import * as Yup from "yup";

// Components
import { Input } from "@/components/ui/form/Input";

// Types
import { FormConfig, FormFieldConfig } from "./formConfig";
import { FormikValues } from "formik";

export const createFormConfig = <T extends Yup.AnyObject>(
  fields: FormFieldConfig<T>
): FormConfig<T> => {
  const initialValues = {} as T;
  const validationSchema: Record<
    keyof T,
    Yup.Schema<T[keyof T]>
  > = {} as Record<keyof T, Yup.Schema<T[keyof T]>>;

  for (const key in fields) {
    initialValues[key] = fields[key].initialValue;
    validationSchema[key] = fields[key].validation;
  }

  return {
    initialValues,
    validationSchema: Yup.object(
      validationSchema
    ) as unknown as Yup.ObjectSchema<T>,
    fields,
  };
};

export const createFormInputs = <T extends Yup.AnyObject>(
  formFieldsMapping: FormFieldConfig<T>
) =>
  Object.entries(formFieldsMapping).map(([name, props]) => {
    const { inputProps } = props;

    return <Input key={name} {...inputProps} name={name} />;
  });

export const submitFormData = async (values: FormikValues) => {
  // Simulate sending data to the server
  console.log("Form data:", values);
  // Replace with actual API call
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate success or failure
      const success = Math.random() > 0.5;
      if (success) {
        resolve("Form data sent successfully");
      } else {
        reject(new Error("Failed to send form data"));
      }
    }, 1000);
  });
};
