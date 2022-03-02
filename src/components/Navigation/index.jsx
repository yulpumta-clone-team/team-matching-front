import React from 'react';
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { HOME, LOGIN, PROFILE, SIGN_UP, TEAM_BOARD, USER_BOARD } from 'utils/route';

function Navigation() {
  const [cookies] = useCookies(['token']);
  const token = cookies?.token || null;
  return (
    <nav>
      {token ? (
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
            <Link to={PROFILE}>User Profile</Link>
          </li>
        </ul>
      ) : (
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
          <li>
            <Link to={PROFILE}>User Profile</Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navigation;
