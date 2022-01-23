import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "components/Navigation";
import Login from "pages/Login";
import Main from "pages/Main";
import SignUp from "pages/SignUp";
import Auth from "hoc/auth";

const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Auth SpecificComponent={Main} option={true} />} />
        <Route path="/login" element={<Auth SpecificComponent={Login} option={true} />} />
        <Route path="/signup" element={<Auth SpecificComponent={SignUp} option={true} />} />
      </Routes>
    </Router>
  );
};

export default App;
