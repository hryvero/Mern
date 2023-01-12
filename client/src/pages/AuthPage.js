import React, { useState, useEffect } from "react";
import { useHttp } from "../hooks/http.hook";
import { useMessage } from "../hooks/message.hook";

export const AuthPage = () => {
  const { loading, request, error, clearError } = useHttp();
  const [form, setForm] = useState({ email: "", password: "" });
  const message = useMessage();

  useEffect(() => {
    message(error);
    clearError();
  }, [error, message, clearError]);

  useEffect(() => {
    window.M.updateTextFields();
  }, []);

  const changeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const registerHandler = async () => {
    try {
      const data = await request("/auth/register", "POST", { ...form });
      message(data.message);
      console.log(data);
    } catch (error) {}
  };

  const loginHandler = async () => {
    try {
      const data = await request("/auth/login", "POST", { ...form });
      message(data.message);
      console.log(data);
    } catch (error) {}
  };
  // const postData = async (url = "", data = {}) => {
  //   // Default options are marked with *
  //   const response = await fetch("/auth/register", {
  //     method: "POST", // *GET, POST, PUT, DELETE, etc.

  //     headers: {
  //       "Content-Type": "application/json",
  //     },

  //     body: JSON.stringify({ ...form }), // body data type must match "Content-Type" header
  //   });

  //   return response.json("Ok"); // parses JSON response into native JavaScript objects
  // };

  return (
    <div className="row">
      <div className="col s6 offset-s3">
        <h3>Скороти посиланя</h3>
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">Авторизація</span>
            <div>
              <div className="input-field ">
                <input
                  placeholder="Введіть email"
                  id="email"
                  type="text"
                  name="email"
                  value={form.email}
                  onChange={changeHandler}
                  className="white-input"
                />
                <label className="label-form" htmlFor="first_name">
                  Email
                </label>
              </div>
              <div className="input-field ">
                <input
                  placeholder="Введіть пароль"
                  id="password"
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={changeHandler}
                  className="white-input"
                />
                <label className="label-form" htmlFor="last_name">
                  Password
                </label>
              </div>
            </div>
          </div>
          <div className="card-action">
            <button
              className="btn yellow darken-1 "
              style={{ marginRight: 10 }}
              disabled={loading}
              onClick={() => registerHandler()}
            >
              Реєстрація
            </button>
            <button
              className="btn orange darken-1"
              disabled={loading}
              onClick={() => loginHandler()}
            >
              Вхід
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
