import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from 'components/Navigation';
import Login from 'pages/Login';
import Main from 'pages/Main';
import SignUp from 'pages/SignUp';
import Auth from 'hoc/auth';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Auth SpecificComponent={Main} option />} />
        <Route path="/login" element={<Auth SpecificComponent={Login} option />} />
        <Route path="/signup" element={<Auth SpecificComponent={SignUp} option />} />
      </Routes>
    </Router>
  );
}

export default App;
