import React, { useState } from "react";

interface stateProps {
  name: string;
  telefono: string;
  email: string;
  consulta: string;
}

const useForm = () => {
  const [values, setValues] = useState<stateProps>({
    name: "",
    telefono: "",
    email: "",
    consulta: "",
  });

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  return {
    values,
    handleChange,
  };
};

export default useForm;
