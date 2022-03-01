/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import { TEAM_BOARD } from 'utils/route';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getTeamArr } from '_actions/team_action';

function TeamBoard() {
  const dispatch = useDispatch();
  const { teamArray } = useSelector((state) => state.team);
  useEffect(() => {
    dispatch(getTeamArr());
  }, []);
  return (
    <ul>
      {teamArray.map(({ team_id, name }) => (
        <li key={team_id}>
          <Link to={`${TEAM_BOARD}/${team_id}`}>{name}</Link>
        </li>
      ))}
      {/* <li>
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
      </li> */}
    </ul>
  );
}

export default TeamBoard;
