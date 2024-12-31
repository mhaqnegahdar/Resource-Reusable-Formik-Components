"use client";

// Components
import FormContainer from "@/components/containers/FormContainer";
import ResetButton from "@/components/ui/form/ResetButton";
import SubmitButton from "../components/ui/form/SubmitButton";

// Utils & Types
import {
  createFormInputs,
  FormSubmitType,
  signUpFormConfig,
  submitFormData,
} from "@/lib/forms";

export default function Home() {
  const { initialValues, fields, validationSchema } = signUpFormConfig;

  const onSubmit: FormSubmitType<typeof initialValues> = async (
    values: typeof initialValues,
    { setSubmitting, resetForm }
  ) => {
    try {
      setSubmitting(true);

      // Simulate a delay for form submission
      await new Promise((resolve) => setTimeout(resolve, 2000));

      await submitFormData(values);

      // Reset the form on success
      resetForm();

      // Show success message
      alert("Form submitted successfully!");
    } catch (error) {
      // Handle errors
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting the form.");
    } finally {
      // Ensure isSubmitting is set to false after submission is complete
      setSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen py-8">
      <section className="max-w-2xl w-full mx-auto px-4">
        <div className="space-y-0.5 border-b border-gray-200 pb-4 mb-4">
          <h2 className="text-2xl font-bold tracking-tight">Sign Up </h2>
          <p className="text-muted-foreground">
            Please fill out the form below to sign up.
          </p>
        </div>
        <FormContainer
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {/* Creating all the form fields */}
          {createFormInputs(fields)}
          <div className="flex gap-4">
            <SubmitButton />
            <ResetButton />
          </div>
        </FormContainer>
      </section>{" "}
    </main>
  );
}
