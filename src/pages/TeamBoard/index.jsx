import React from 'react';
import PropTypes from 'prop-types';
import { TEAM_BOARD } from 'utils/route';
import { Link } from 'react-router-dom';

function TeamBoard(props) {
  return (
    <ul>
      <li>
        <Link to={`${TEAM_BOARD}/asdf`}>asdf</Link>
      </li>
      <li>
        <Link to={`${TEAM_BOARD}/ddd`}>ddd</Link>
      </li>
      <li>
        <Link to={`${TEAM_BOARD}/aaa`}>aaa</Link>
      </li>
      <li>
        <Link to={`${TEAM_BOARD}/123`}>123</Link>
      </li>
      <li>
        <Link to={`${TEAM_BOARD}/asdf`}>asdf</Link>
      </li>
    </ul>
  );
}

TeamBoard.propTypes = {};

export default TeamBoard;
