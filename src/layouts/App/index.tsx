import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../../pages/LogIn";
import Main from "../../pages/Main";
import SingUp from "../../pages/SignUp";
import Navigation from "../Navigation";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SingUp />} />
      </Routes>
    </Router>
  );
}

export default App;
