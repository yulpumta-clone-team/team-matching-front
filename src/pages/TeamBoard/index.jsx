import React, { useState } from 'react';
import TeamCard from 'components/TeamCard';
import UpperButton from 'components/UpperButton';
import { useDispatch, useSelector } from 'react-redux';
import { getTeamArr } from '_actions/team_action';
import Loader from 'pages/Loader';
import useInfiniteScroll from 'hooks/useInfinitiScroll';

// 임시로 만든 id발급
import uuid from 'react-uuid';

import { BoardWrapper } from './style';

function TeamBoard() {
  const dispatch = useDispatch();
  const { teamArray } = useSelector((state) => state.team);
  const [teamList, setTeamList] = useState(teamArray);
  const fetchData = async () => {
    const { payload } = await dispatch(getTeamArr(page));
    setTeamList((prev) => [...prev, ...payload]);
  };
  const [page, target, loading] = useInfiniteScroll({ fetchData });

  return (
    <>
      <BoardWrapper>
        {teamList.length !== 0 &&
          teamList.map((teamElement, idx) => (
            <TeamCard key={uuid()} teamInfo={{ ...teamElement, idx }} />
          ))}
      </BoardWrapper>
      <div ref={target}>{loading && <Loader />}</div>
      <UpperButton />
    </>
  );
}

export default TeamBoard;
