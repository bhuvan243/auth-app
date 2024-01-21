import React, { useState } from "react";
import "./loginPage.css";

const LoginPage = () => {
    
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  async function validateUser(e) {
    e.preventDefault();
    /////////////////////
    await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: `${username}`,
        password: `${password}`,
      }),
    })
      .then((res) => res.json())
      .then((data) => localStorage.setItem("id", data.id))
      .catch((err) => console.log(err));
      console.log("data fetched successfully");
  }

  return (
    <div className="page">
      <div className="login-form">
        <span className="welcome-text">Welcome back! 👋</span>
        <span className="sign-in-text">Sign in to your account</span>
        <form onSubmit={validateUser}>
          <label>Your email</label>
          <input
            type="text"
            placeholder="Enter username"
            onChange={(e) => setUserName(e.target.value)}
          />
          <label>Your password</label>
          <input
            type="password"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">CONTINUE</button>
        </form>
        <a className="forget-password">Forget your password?</a>
      </div>
      <div className="sign-up-text">
        Don’t have an account? <a>Sign up</a>
      </div>
    </div>
  );
};

export default LoginPage;
