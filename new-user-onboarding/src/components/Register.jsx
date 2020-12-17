import React, { useState, useEffect } from "react";
import "./Register.css";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const changeHandler = (event) => {
    let newForm = setForm({ ...form, [event.target.name]: event.target.value });

    setForm(newForm);
  };

  return (
    <div>
      <section className="register-container">
        <h1 className="title">Register</h1>
        <div className="main-container">
          <form className="form-container">
            <div className="input-container">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter Name"
                value={form.name}
                onChange={changeHandler}
              />
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="inbox@mail.com"
                value={form.email}
                onChange={changeHandler}
              />
              <label htmlFor="password">Password</label>
              <input
                type="text"
                name="password"
                id="password"
                placeholder="Enter Password"
                value={form.password}
                onChange={changeHandler}
              />
              <button className="submit-button">Submit</button>
            </div>
          </form>
        </div>
      </section>
      <section className="bottom-container">
        <h2>New here? Sign up!</h2>
      </section>
    </div>
  );
};

export default Register;
