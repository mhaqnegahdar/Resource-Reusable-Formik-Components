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
      <section className="max-w-2xl w-full mx-auto">
        <h1 className="mb-6 text-2xl md:text-3xl lg:text-4xl font-bold">
          {" "}
          SignUp Form
        </h1>
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
