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
    validation: Yup.number().min(1).max(120).required("Age is required"),
    inputProps: { type: "number", label: "Age" },
  },
  dateOfBirth: {
    initialValue: "",
    validation: Yup.string().required("Date of Birth is required"),
    inputProps: { type: "date", label: "Date of Birth" },
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
  degree: {
    initialValue: "",
    validation: Yup.string().required("Degree is required"),
    inputProps: {
      label: "Degree",
      type: "combobox",
      data: [
        { value: "High School", label: "High School" },
        { value: "Associate's", label: "Associate's" },
        { value: "Bachelor's", label: "Bachelor's" },
        { value: "Master's", label: "Master's" },
        { value: "Doctorate", label: "Doctorate" },
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
  profileUrl: {
    initialValue: "",
    validation: Yup.string().required("Profile Image is required"),
    inputProps: {
      label: "Profile Image",
      type: 'image',
    },
  },
  disclaimer: {
    initialValue: false,
    validation: Yup.bool().oneOf([true], "You must accept the disclaimer"),
    inputProps: {
      label: "Disclaimer",
      type: "checkbox",
      description:
        "I confirm that I have read and accept the terms & conditions",
    },
  },
});
