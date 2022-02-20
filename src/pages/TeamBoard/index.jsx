/* eslint-disable camelcase */
import TeamCard from 'components/TeamCard';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTeamArr } from '_actions/team_action';
import { BoardWrapper } from './style';

function TeamBoard() {
  const dispatch = useDispatch();
  const { teamArray } = useSelector((state) => state.team);
  useEffect(() => {
    dispatch(getTeamArr());
  }, []);
  console.log(teamArray);
  return (
    <BoardWrapper>
      {teamArray.length !== 0 &&
        teamArray.map((teamElement) => (
          <TeamCard key={teamElement.team_id} teamInfo={teamElement} />
        ))}
    </BoardWrapper>
  );
}

export default TeamBoard;
