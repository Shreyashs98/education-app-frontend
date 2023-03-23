import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";
const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    if (username.trim() !== "" && password.trim() !== "") {
      console.log(`Username: ${username}, Password: ${password}`);
      navigate("/");
    }
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Login Page</h1>
      <form className="login-form">
        <label className="login-label">
          Username:
          <br />
          <input
            className="login-input"
            placeholder="Enter Username"
            type="description"
            value={username}
            onChange={handleUsernameChange}
          />
        </label>
        <label className="login-label">
          Password:
          <br />
          <input
            className="login-input"
            placeholder="Enter Password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        
        <button className="login-button" onClick={submitHandler} type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
