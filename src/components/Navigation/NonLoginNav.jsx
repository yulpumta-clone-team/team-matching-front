import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { HOME, LOGIN, PROFILE, SIGN_UP, TEAM_BOARD, USER_BOARD } from 'utils/route';

function NonLoginNav() {
  return (
    <ul>
      <li>
        <Link to={HOME}>Main</Link>
      </li>
      <li>
        <Link to={USER_BOARD}>User Board</Link>
      </li>
      <li>
        <Link to={TEAM_BOARD}>Team Board</Link>
      </li>
      <li>
        <Link to={LOGIN}>Log In</Link>
      </li>
      <li>
        <Link to={SIGN_UP}>Sign Up</Link>
      </li>
    </ul>
  );
}

export default NonLoginNav;
