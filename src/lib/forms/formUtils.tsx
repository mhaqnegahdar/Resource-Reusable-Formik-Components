import * as Yup from "yup";
import { FormConfig, FormFieldConfig } from "./formConfig";
import { Input } from "@/components/ui/inputs/input";

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
