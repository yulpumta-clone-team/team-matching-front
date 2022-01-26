import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { USER_BOARD } from 'utils/route';

function UserBoard(props) {
  return (
    <ul>
      <li>
        <Link to={`${USER_BOARD}/asdf`}>asdf</Link>
      </li>
      <li>
        <Link to={`${USER_BOARD}/ddd`}>ddd</Link>
      </li>
      <li>
        <Link to={`${USER_BOARD}/aaa`}>aaa</Link>
      </li>
      <li>
        <Link to={`${USER_BOARD}/123`}>123</Link>
      </li>
      <li>
        <Link to={`${USER_BOARD}/asdf`}>asdf</Link>
      </li>
    </ul>
  );
}

UserBoard.propTypes = {};

export default UserBoard;
