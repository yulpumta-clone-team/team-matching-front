import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from '@components/Navigation';
import Login from '@pages/LogIn';
import Main from '@pages/Main';
import SingUp from '@pages/SignUp';

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
