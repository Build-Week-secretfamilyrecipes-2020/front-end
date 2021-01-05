import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import * as Yup from "yup";
import { formSchema } from "../validations/UserValidations";
import "./Register.css";

const Register = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
    message: "",
  });

  const changeHandler = (event) => {
    event.persist();
    const newForm = { ...form, [event.target.name]: event.target.value };
    validateChange(event);
    setForm(newForm);
    clearErrors();
  };

  const validateChange = (event) => {
    Yup.reach(formSchema, event.target.name)
      .validate(event.target.value)
      .then((valid) => {
        setErrors({ ...errors });
      })
      .catch((err) =>
        setErrors({
          ...errors,
          [event.target.name]: err.errors[0],
        })
      );
  };

  const clearErrors = () => {
    setTimeout(() => {
      console.log("trying to clear");
      setErrors({
        username: "",
        password: "",
        message: "",
      });
    }, 5000);
  };

  // http://localhost:4200/api/auth/login for POST REQUEST

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const isValid = await formSchema.isValid(form);
      if (!isValid) {
        setErrors({ ...errors, message: "Fill out form" });
        return clearErrors();
      }

      const resp = await axios.post(
        "http://localhost:4200/api/auth/register",
        form
      );
      console.log(resp.data);
    } catch (err) {
      console.log(err);
      setErrors({ ...errors, message: "Account already exists" });
      clearErrors();
    }
  };

  return (
    <div>
      <section className="register-container">
        <h1 className="title">Register</h1>
        <div className="main-container">
          <form className="form-container" onSubmit={onSubmit}>
            <div className="input-container">
              <div className="username-container">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Enter Username"
                  value={form.username}
                  onChange={changeHandler}
                />
                {errors.username.length > 0 ? (
                  <p className="error">{errors.username}</p>
                ) : null}
              </div>
              <div className="password-container">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter Password"
                  value={form.password}
                  onChange={changeHandler}
                />
                {errors.password.length > 0 ? (
                  <p className="error">{errors.password}</p>
                ) : null}
              </div>
              <button className="submit-button" type="submit">
                Register
              </button>
              {errors.message.length > 0 ? (
                <p className="error">{errors.message}</p>
              ) : null}
            </div>
          </form>
        </div>
      </section>
      <section className="bottom-container">
        <h2 className="new-here">
          Already have an account? <Link to="/login">Log in!</Link>
        </h2>
      </section>
    </div>
  );
};

export default Register;
