"use client";
import FormContainer from "@/components/containers/FormContainer";

export default function Home() {
  return (
    <main className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <section className="max-w-7xl w-full mx-auto">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
          {" "}
          First Form
        </h1>
        <FormContainer initialValues={{}} onSubmit={() => {}}>
            <input type="text" name="name" />
            <button type="submit"> Submit</button>
        </FormContainer>
      </section>{" "}
    </main>
  );
}
