// src/components/Register.jsx
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Register = ({ goToLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("All fields are required");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.find((u) => u.email === email)) {
      setError("User already exists");
      return;
    }

    users.push({
      email,
      password,
      user_id: uuidv4(),
    });

    localStorage.setItem("users", JSON.stringify(users));
    alert("Registration successful");
    goToLogin();
  };

  return (
    <div className="card">
      <h2>Create Account</h2>
      <form onSubmit={handleRegister}>
        <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="error">{error}</p>}
        <button>Create Account</button>
      </form>
      <p>
        Already registered?{" "}
        <span className="link" onClick={goToLogin}>
          Login
        </span>
      </p>
    </div>
  );
};

export default Register;
