"use client";

import React from "react";
import { Form, Formik, FormikConfig } from "formik";

interface FormContainerProps extends FormikConfig<Record<string, unknown>> {
  children: React.ReactNode;
}

const FormContainer: React.FC<FormContainerProps> = ({
  initialValues,
  onSubmit,
  children,
  ...formikProps
}: FormContainerProps) => {
  return (
    <Formik
      {...formikProps}
      initialValues={initialValues || {}}
      onSubmit={onSubmit}
    >
      <Form>{children}</Form>
    </Formik>
  );
};

export default FormContainer;
