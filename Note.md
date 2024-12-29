# **Step by Step Guide**

## **1. [Form Container]**

install formik and create a reusable formik container.

### **1.1: Create a Form Container**

```
bun i formik
```

Look at [ForContainer.tsx](./src/components/containers/FormContainer.tsx) for more details.

## **2. [Building the Input Component and Utility Functions]**

Use formik's Field component to create a simple text field.
To maintain consistensy all over the project, We are going to have a single object for all the forms fields, initialValues and validations and we are going to use that object to map and create the fields.

### **2.1: Directory Structure**

```
/lib/form/
  index.ts
  formConfig.ts
  formUtils.ts
  input.tsx
```

### **2.4: Create the Input**

Add the [Input.tsx](./src/components/ui/inputs/input.tsx). With all the styling and props it needs.

### **2.3: Form Configuration**

Define a reusable form configuration object [formConfig.ts](./src/lib/forms/formConfig.ts).

Now, you can create a form configuration for any form by defining the fields and their properties.
[index.ts](./src/lib/forms/index.ts).
