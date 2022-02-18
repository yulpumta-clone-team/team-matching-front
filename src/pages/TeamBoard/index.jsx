import React, { useCallback, useEffect } from 'react';
import { TEAM_BOARD } from 'utils/route';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getTeamArr, getTeamDetail } from '_actions/team_action';

function TeamBoard() {
  const dispatch = useDispatch();
  const { teamArray } = useSelector((state) => state.team);
  useEffect(() => {
    dispatch(getTeamArr());
  }, []);
  console.log(teamArray);
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

export default TeamBoard;
