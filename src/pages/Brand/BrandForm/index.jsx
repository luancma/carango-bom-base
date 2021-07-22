import React, { useState } from "react";
import useFormErrors from "hooks/useFormErrors";
import { validations } from "./validations";
import FormActions from "components/FormActions";
import InputText from "components/InputText";
import { useFetchBrand } from "../hooks/useFetchBrand";

function BrandForm({ brand, onSubmit, onCancel }) {
  const [name, setName] = useState("");

  const [errors, validateFields, canSubmit] = useFormErrors(validations);

  const handleSubmit = event => {
    event.preventDefault();
    if (canSubmit()) {
      onSubmit(name);
    }
  };

  const handlerName = () => {
    return !!brand && brand.name ? brand.name : name
  }

  return (
    <form name="brand-form" aria-label="brand form" onSubmit={handleSubmit}>
      <InputText
        label="Marca"
        name="name"
        id="name"
        value={handlerName()}
        onChange={setName}
        fullWidth
        required
        margin="normal"
        error={!errors.name.isValid}
        helperText={errors.name.text}
        onBlur={validateFields}
      />
      <FormActions onCancel={onCancel} />
    </form>
  );
}

export default BrandForm;
