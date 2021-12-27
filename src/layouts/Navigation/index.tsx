import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <ul>
      <li>
        <Link to="/">Main</Link>
      </li>
      <li>
        <Link to="/login">Log In</Link>
      </li>
      <li>
        <Link to="/signup">Sign Up</Link>
      </li>
    </ul>
  );
}

export default Navigation;
