"use client";

// Components
import FormContainer from "@/components/containers/FormContainer";

import SubmitButton from "./components/SubmitButton";

// Constants
import { createFormInputs, signUpFormConfig } from "@/lib/forms";

export default function Home() {

  const { initialValues, fields,validationSchema } = signUpFormConfig;
  // console.log(initialValues)
  console.log(validationSchema)
  return (
    <main className="min-h-screen py-8">
      <section className="max-w-2xl w-full mx-auto">
        <h1 className="mb-6 text-2xl md:text-3xl lg:text-4xl font-bold">
          {" "}
          SignUp Form
        </h1>
        <FormContainer
          initialValues={initialValues}
          // validationSchema={validationSchema}}
          onSubmit={async (): Promise<boolean> => {
            await new Promise((resolve) => {
              setTimeout(() => {
                return resolve(true);
              }, 2000);
            });

            return true;
          }}
        >
          {createFormInputs(fields)}
          <SubmitButton />
        </FormContainer>
      </section>{" "}
    </main>
  );
}
