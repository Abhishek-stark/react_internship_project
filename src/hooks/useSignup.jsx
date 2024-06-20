import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useSignup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    checked: false,
    guestname: "",
    age: 0,
    modal: false,
  });

  const { name, email, guestname, age, checked } = formData;

  useEffect(() => {
    if (localStorage.getItem("data")) localStorage.clear();
  }, []);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.type === "checkbox" ? !checked : e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("data", JSON.stringify(formData));

    navigate("/pop-up/", { state: { show: true } });
  };

  return { onSubmit, onChange, formData };
};

export default useSignup;
