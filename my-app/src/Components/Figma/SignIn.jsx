import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import "../../css/SignIn.scss";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const SignIn = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      axios
        .post("https://test-react.agiletech.vn/auth/login", values)
        .then((res) => {
          if (res.status === 201 && !res.data.code) {
             const accessToken = res.data.access_token;
             localStorage.setItem("accessToken", accessToken);
            alert("Login success");
            navigate("/Home-SignIn");
          } else {
            console.log(res.data.code);
            alert("Login failed");
            navigate("/");
          }
        })
        .catch((err) => {
          console.log(err);
          alert("Login failed");
          navigate("/");
        });
    },
  });

  return (
    <div className="SignIn">
      <p>SignIn</p>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="SignIn">Username</label>
        <input
          id="username"
          name="username"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.username}
        />
        {formik.touched.username && formik.errors.username ? (
          <div className="error text-red-500">{formik.errors.username}</div>
        ) : null}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignIn;
