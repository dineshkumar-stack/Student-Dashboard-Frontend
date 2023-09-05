// src/components/LoginPage.js
import React, { useState } from "react";
import { useHistory } from 'react-router-dom'; // Import useHistory from react-router-dom
import { useAuth } from "../context/AuthContext";
import axios from "axios";

function LoginPage() {
  const { login } = useAuth();
  const history = useHistory(); // Create a history object to manage navigation
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to your login API
      const response = await axios.post(
        "https://student-dashboard-be.onrender.com/api/login",
        { email, password }
      );

      // Assuming your API returns a JWT token upon successful login+-
      const { token } = response.data;
      history.push('/');
      login(token);
    } catch (error) {
      console.error("Login failed:", error);
      // Handle login failure, show error messages, etc.
    }
  };

  return (
      <div>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Log In</button>
        </form>
      </div>
  );
}

export default LoginPage;
