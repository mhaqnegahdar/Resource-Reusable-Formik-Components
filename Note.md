# **Step by Step Guide**

## **1. Form Container**

install formik and create a reusable formik container.

### **1.1: Install Formik**

```
bun i formik
```

### **1.1: Create the Form Container**

Look at [ForContainer.tsx](./src/components/containers/FormContainer.tsx) for more details.

## **2. Building the Input Component and Utility Functions**

Use formik's Field component to create a simple text field.
To maintain consistensy all over the project, We are going to have a single object for all the forms fields, initialValues and validations and we are going to use that object to map and create the fields.

### **2.1: Directory Structure**

```
/lib/form/
  index.ts
  formConfig.ts
  formUtils.ts

/components/inputs/
  Input.tsx
  DatepickerInput.tsx
  ImageInput.tsx
  RadioInput.tsx
  .
  .
```

### **2.4: Create the main Input**

Create the [Input.tsx](./src/components/ui/inputs/Input.tsx). With all the styling and props it needs. "At this time `<Field>` has no childern"

### **2.3: Form Configuration**

Define all the types needed in [formConfig.ts](./src/lib/forms/formConfig.ts).

### **2.3: Form Utilites**

Define functionalities needed in [formUtils.tsx](./src/lib/forms/formUtils.tsx).

##### Functions

- createFormConfig: Recieves an array of form fields and generates a form configuration object. containing initialValues, validationSchema and fields array.

- createFormInputs: Iterates over the fields array and creates the form fields.

Now, you can create a form configuration for any form by defining the fields and their properties.

[index.ts](./src/lib/forms/index.ts).

```tsx
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
```

Defining schemas, initialValues, and inputProps in a single object helps maintain consistency and reduces the possiblity to run into unwanted behaviour and errors. This approach prevents issues such as misspelling field names in the initialValues object or validation schema.



## **3 Create other types of fields**

- [SelectInput](./src/components/ui/inputs/SelectInput.tsx)
- [RadioInput](./src/components/ui/inputs/RadioInput.tsx)
- [CheckboxInput](./src/components/ui/inputs/CheckboxInput.tsx)
- [ComboBoxInput](./src/components/ui/inputs/ComboboxInput.tsx)
- [DatepickerInput](./src/components/ui/inputs/DatepickerInput.tsx).

### **3.1: Modify Input component to work with Textarea input type**
```tsx
 const inputType = type === "textarea" ? { as: type } : { type: type };


 <Field
          {...inputType}
          name={name}
          ...
```

### **3.2: Modify Input component for each input type**

Add each fields to the fields switch case within the `<Field>` component.

```tsx
    {["select","radio","checkbox","combobox","date","image",
          ].includes(type)
            ? ({ field, form, meta }: FieldProps) => {
                switch (type) {
                  case "select":
                  case "radio":
                  case "checkbox":
                  case "combobox":
                  case "date":
                  case "image":
              }
            : null}
```
