/* eslint-disable camelcase */
import TeamCard from 'components/TeamCard';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTeamArr } from '_actions/team_action';

function TeamBoard() {
  const dispatch = useDispatch();
  const { teamArray } = useSelector((state) => state.team);
  useEffect(() => {
    dispatch(getTeamArr());
  }, []);
  console.log(teamArray);
  return (
    <ul>
      {teamArray.length !== 0 &&
        teamArray.map((teamElement) => {
          console.log(teamElement);
          return <TeamCard teamInfo={teamElement} />;
        })}
    </ul>
  );
}

export default TeamBoard;
