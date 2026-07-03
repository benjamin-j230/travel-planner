import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login clicked", { email, password });
    alert("Login Successful (demo)");
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="title">AI Travel Planner</h1>
        <p className="subtitle">Plan your perfect journey ✈️</p>

        <form onSubmit={handleLogin} className="login-form">
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Login</button>
        </form>

        <p className="bottom-text">
          Don’t have an account? <span>Sign up</span>
        </p>
      </div>
    </div>
  );
};

export default Login;