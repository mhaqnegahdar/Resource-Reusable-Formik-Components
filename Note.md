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

Add the [Input.tsx](./src/components/ui/inputs/Input.tsx). With all the styling and props it needs.

### **2.3: Form Configuration**

Define a reusable form configuration object [formConfig.ts](./src/lib/forms/formConfig.ts).

Now, you can create a form configuration for any form by defining the fields and their properties.
[index.ts](./src/lib/forms/index.ts).

## **3. [Modify Input component to work with Textarea input type]**

```
 const inputType = type === "textarea" ? { as: type } : { type: type };

```

## **4. [Modify Input component to Add Select Field]**

### **4.1: Add Select Component**

```
bunx --bun shadcn@latest add select

```

### **4.2: Create SelectInput**

Add the [SelectInput.tsx](./src/components/ui/inputs/SelectInput.tsx).

## **5. [Modify Input component to Add Radio Field ]**

### **5.1: Add Select and Label Components**

```
bunx --bun shadcn@latest add label

bunx --bun shadcn@latest add radio-group



```

### **5.2: Create RadioInput**

Add the [RadioInput.tsx](./src/components/ui/inputs/RadioInput.tsx).

## **6. [Modify Input component to Add Checkbox Field]**

### **6.1: Add Checkbox Component**

```
bunx --bun shadcn@latest add checkbox

```

### **6.2: Create CheckBoxInput**

Add the [CheckBoxInput.tsx](./src/components/ui/inputs/CheckBoxInput.tsx).


## **6. [Add ComboBox Field]**

### **6.1: Add Preliminary Component**

```
bunx --bun shadcn@latest add command

bunx --bun shadcn@latest add popover


```

### **6.2: Create ComboBoxInput**

Add the [ComboBoxInput.tsx](./src/components/ui/inputs/ComboboxInput.tsx).
