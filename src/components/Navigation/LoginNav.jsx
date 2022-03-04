import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { HOME, PROFILE, TEAM_BOARD, USER_BOARD } from 'utils/route';

function LoginNav({ myData }) {
  console.log('Login naviogation:', myData);
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
        <Link to={PROFILE}>User Profile</Link>
      </li>
    </ul>
  );
}

LoginNav.propTypes = {
  myData: PropTypes.shape({
    nickname: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  }).isRequired,
};

export default LoginNav;
