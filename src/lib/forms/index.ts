export * from './formConfig';
export * from './formUtils';
import * as Yup from 'yup';

import { createFormConfig } from './formUtils';


export const signUpFormConfig = createFormConfig({
    name: {
      initialValue: "",
      validation: Yup.string().required("Name is required"),
      inputProps: { type: "text", label: "Name" },
    },
    age: {
      initialValue: 0,
      validation: Yup.number().required("Age is required"),
      inputProps: { type: "number", label: "Age" },
    },
    email: {
      initialValue: "",
      validation: Yup.string().email("Invalid Email").required("Email is required"),
      inputProps: { type: "email", label: "Email" },
    },
    password: {
      initialValue: "",
      validation: Yup.string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters"),
      inputProps: { type: "password", label: "Password" },
    },
    confirmPassword: {
      initialValue: "",
      validation: Yup.string().oneOf(
        [Yup.ref("password")],
        "Passwords must match"
      ).required('You must confirm the password'),
      inputProps: { type: "password", label: "Password Confirm" },
    },
    dateOfBirth: {
      initialValue: "",
      validation: Yup.string().required("Date of Birth is required"),
      inputProps: { type: "date", label: "Date of Birth" },
    },
  });

  