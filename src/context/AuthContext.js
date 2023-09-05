// src/context/AuthContext.js
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  // Function to set the user as authenticated and store the token
  const login = (token) => {
    // You can decode the token or store it as is, depending on your needs
    // Here, we'll just store it as is for simplicity
    setCurrentUser({ token });
  };

  const logout = () => {
    // Remove the user and token on logout
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
