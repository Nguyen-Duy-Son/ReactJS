import React from "react";
import { useFormik } from "formik";
import axios from "axios";
const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password:""
    },

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
    axios
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName">Email:</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.firstName}
      />
      <label htmlFor="email">Password:</label>
      <input
        id="password"
        name="password"
        type="password"s
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      <button type="submit">Submit</button>
    </form>
  );
};
export default SignupForm;
