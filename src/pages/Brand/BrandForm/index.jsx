import React, { useEffect, useState } from "react";
import useFormErrors from "hooks/useFormErrors";
import { validations } from "./validations";
import FormActions from "components/FormActions";
import InputText from "components/InputText";

function BrandForm({ brand, onSubmit, onCancel }) {

  const [name, setName] = useState("");
  const [errors, validateFields, canSubmit] = useFormErrors(validations);

  useEffect(() => {
    if (brand.name) {
      setName(brand.name)
    }
  }, [brand])

  const handleSubmit = event => {
    event.preventDefault();
    if (canSubmit()) {
      onSubmit(name);
    }
  };

  return (
    <form name="brand-form" aria-label="brand form" onSubmit={handleSubmit}>
      <InputText
        label="Marca"
        name="name"
        id="name"
        value={name}
        onChange={setName}
        fullWidth
        required
        margin="normal"
        error={!errors.name.isValid}
        helperText={errors.name.text}
        onBlur={validateFields}
      />
      <FormActions onCancel={onCancel} isEdit={brand && brand.name} />
    </form>
  );
}

export default BrandForm;
