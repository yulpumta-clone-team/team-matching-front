/* eslint-disable camelcase */
import TeamCard from 'components/TeamCard';
import UpperButton from 'components/UpperButton';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTeamArr } from '_actions/team_action';
import useInfiniteScroll from 'hooks/useInfinitiScroll';

// 임시로 만든 id발급
import uuid from 'react-uuid';

import { BoardWrapper } from './style';

function TeamBoard() {
  const dispatch = useDispatch();
  const { teamArray } = useSelector((state) => state.team);
  const page = useInfiniteScroll();
  const fetchMore = () => {
    dispatch(getTeamArr({ body: 'temp' }, page));
  };
  useEffect(() => {
    dispatch(getTeamArr());
  }, []);
  useEffect(() => {
    fetchMore();
  }, [page]);
  // console.log(teamArray);
  return (
    <BoardWrapper>
      {teamArray.length !== 0 &&
        teamArray.map((teamElement) => <TeamCard key={uuid()} teamInfo={teamElement} />)}
      <UpperButton />;
    </BoardWrapper>
  );
}

export default TeamBoard;
