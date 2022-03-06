import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTeamArr } from '_actions/team_action';
import Loader from 'pages/Loader';
import TeamCard from 'components/TeamCard';
import UpperButton from 'components/UpperButton';
import CheckBox from 'components/CheckBox';
import NoDataMessage from 'components/NoDataMessage';
import useInfiniteScroll from 'hooks/useInfinitiScroll';
import useFilter from 'hooks/useFilter';
import uuid from 'react-uuid';

import { BoardWrapper } from './style';

function TeamBoard() {
  const dispatch = useDispatch();
  const { teamArray } = useSelector((state) => state.team);
  const [teamList, setTeamList] = useState(teamArray);
  const fetchData = async (page) => {
    setLoading(true);
    const { payload } = await dispatch(getTeamArr(page));
    setTeamList((prev) => [...prev, ...payload]);
    setLoading(false);
  };
  const [target, loading, setLoading] = useInfiniteScroll({ fetchData });
  const [checked, setChecked, handleFilter] = useFilter();
  return (
    <>
      <CheckBox checked={checked} setChecked={setChecked} />
      <BoardWrapper>
        {handleFilter(teamList).length === 0 ? (
          <NoDataMessage isLock={handleFilter(teamList).length === 0} />
        ) : (
          handleFilter(teamList).map((teamElement, idx) => (
            <TeamCard key={uuid()} teamInfo={{ ...teamElement, idx }} />
          ))
        )}
      </BoardWrapper>
      <div ref={target}>{loading && <Loader />}</div>
      <UpperButton />
    </>
  );
}

export default TeamBoard;
