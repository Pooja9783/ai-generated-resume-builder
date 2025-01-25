import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const loginSchema = Yup.object().shape({
  username: Yup.string().min(5, "Too Short !").required("Username is Required"),
  email: Yup.string().email("Invalid Email").required("Email is Required"),
  password: Yup.string().min(5, "Too Short !").required("Password is Required"),
});

const Login = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values, actions) => {
      console.log(JSON.stringify(values));
      actions.resetForm();
    },
  });

  return (
    <div className="flex-col justify-center">
      <p className="text-center">Login</p>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="username">UserName</label>
          <input
            id="username"
            name="username"
            type="text"
            placeholder="Please Enter Username"
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            style={{ display: "block", width: "auto" }}
          />
          {formik.touched.username && formik.errors.username && (
            <div style={{ color: "red" }}>{formik.errors.username}</div>
          )}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Please Enter Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            style={{ display: "block", width: "auto" }}
          />
          {formik.touched.email && formik.errors.email && (
            <div style={{ color: "red" }}>{formik.errors.email}</div>
          )}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Please Enter Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            style={{ display: "block", width: "auto" }}
          />
          {formik.touched.password && formik.errors.password && (
            <div style={{ color: "red" }}>{formik.errors.password}</div>
          )}
        </div>
        <Link to="/home">
          <button
            type="submit"
            className="bg-slate-900 text-red-50 rounded-md p-1 m-1"
          >
            Submit
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Login;
