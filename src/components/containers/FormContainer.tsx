"use client";
// Hooks / Packages
import React from "react";
import { Form, Formik, FormikConfig, FormikValues } from "formik";

// Types
import { FormSubmitType } from "@/lib/forms";

interface FormContainerProps<T extends FormikValues> extends FormikConfig<T> {
  children: React.ReactNode;
  onSubmit: FormSubmitType<T>;
  title: string;
  descriptin?: string;
}

/**
 * FormContainer component
 *
 * This component is a wrapper around the Formik component from the formik library.
 * It provides a reusable form container that can be used to handle form state,
 * validation, and submission. The component accepts FormikConfig properties and
 * additional props to render child components within the form.
 *
 * @param {FormContainerProps<T extends FormikValues>} props - The props for the component.
 * @param {T} props.initialValues - The initial values of the form.
 * @param {FormSubmitType<T>} props.onSubmit - The function to handle form submission.
 * @param {React.ReactNode} props.children - The child components to be rendered within the form.
 * @param {FormikConfig<T>} props.formikProps - The additional Formik configuration properties.
 * @returns {JSX.Element} - The rendered form container.
 */
const FormContainer = <T extends FormikValues>({
  initialValues,
  onSubmit,
  children,
  title,
  descriptin,
  ...formikProps
}: FormContainerProps<T>) => {
  return (
    <>
      <div className="space-y-0.5 border-b border-gray-200 pb-4 mb-4">
        <h2 className="text-2xl font-bold tracking-tight">{title} </h2>
        <p className="text-muted-foreground">{descriptin}</p>
      </div>
      <Formik
        {...formikProps}
        initialValues={initialValues || {}}
        onSubmit={onSubmit}
      >
        <Form>{children}</Form>
      </Formik>
    </>
  );
};

export default FormContainer;
