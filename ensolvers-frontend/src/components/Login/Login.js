import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { baseApiUrl } from "../../utils/utils";
import StyledLogin from "./Login.styled";

const Login = ({ logged, setLogged }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (event) => {
    event.preventDefault();
    const loginParams = {
      user: {
        email,
        password,
      },
    };
    axios
      .post(`${baseApiUrl}/login`, loginParams)
      .then((res) => {
        window.localStorage.setItem("loggedUser", JSON.stringify(res.data));
        setLogged(true);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  if (logged === true) {
    return <Redirect to='/' />;
  }

  return (
    <StyledLogin>
      <div className='login'>
        <h2>Log In</h2>
        <form
          onSubmit={(e) => {
            login(e);
          }}
        >
          <input
            className='email-input'
            type='text'
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder='email'
            required
          />
          <input
            className='password-input'
            type='password'
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder='password'
            required
          />
          <button className='login-btn' type='submit'>
            Log in
          </button>
        </form>
      </div>
    </StyledLogin>
  );
};

export default Login;
