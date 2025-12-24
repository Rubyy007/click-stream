// src/App.jsx
import React, { useState } from "react";
import Register from "./components/Register";
import Login from "./components/Login";
import Whiteboard from "./components/Whiteboard";

const App = () => {
  const [page, setPage] = useState("register"); 
  // always start from register

  if (page === "register") {
    return <Register goToLogin={() => setPage("login")} />;
  }

  if (page === "login") {
    return <Login onLogin={() => setPage("whiteboard")} />;
  }

  return <Whiteboard />;
};

export default App;
