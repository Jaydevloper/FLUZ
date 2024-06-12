import { useState } from "react";

const useForm = () => {
  const [fields, setFields] = useState({});
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };

  return { handleChange, fields };
};

export default useForm;
