export * from "./formConfig";
export * from "./formUtils";
import * as Yup from "yup";

import { createFormConfig } from "./formUtils";

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

  gender: {
    initialValue: "",
    validation: Yup.string().required("Gender is required"),
    inputProps: {
      label: "Gender",
      type: "select",
      data: [
        { value: "Male", label: "Male" },
        { value: "Female", label: "Female" },
        { value: "Non-Binary", label: "Non-Binary" },
      ],
    },
  },

  email: {
    initialValue: "",
    validation: Yup.string()
      .email("Invalid Email")
      .required("Email is required"),
    inputProps: { type: "email", label: "Email" },
  },
  communication: {
    initialValue: "Email",
    validation: Yup.string().required("Communication method is required"),
    inputProps: {
      label: "Communication Method",
      type: "radio",
      className: "grid-cols-3",
      data: [
        { value: "Email", label: "Email" },
        { value: "SMS", label: "SMS" },
        { value: "Both", label: "Both" },
      ],
    },
  },
  dateOfBirth: {
    initialValue: "",
    validation: Yup.string().required("Date of Birth is required"),
    inputProps: { type: "date", label: "Date of Birth" },
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
    validation: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("You must confirm the password"),
    inputProps: { type: "password", label: "Password Confirm" },
  },
  description: {
    initialValue: "",
    validation: Yup.string().required("Description is required"),
    inputProps: {
      label: "Description",
      type: "textarea",
    },
  },
});
