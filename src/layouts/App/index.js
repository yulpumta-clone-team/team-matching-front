import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "components/Navigation";
import Login from "pages/Login";
import Main from "pages/Main";
import SignUp from "pages/SignUp";

function App() {
  useEffect(() => {
    fetch("/test")
      .then((response) => response.json())
      .then((response) => console.log(response));
  }, []);
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
