import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTeamArr } from '_actions/team_action';
import Loader from 'pages/Loader';
import TeamCard from 'components/TeamCard';
import UpperButton from 'components/UpperButton';
import CheckBox from 'components/CheckBox';
import NoDataMessage from 'components/NoDataMessage';
import useInfiniteScroll from 'hooks/useInfinitiScroll';
import useScrollLock from 'hooks/useScrollLock';
import useFilter from 'hooks/useFilter';
import useOrder from 'hooks/useOrder';
import uuid from 'react-uuid';

import { BoardWrapper } from './style';

function TeamBoard() {
  const dispatch = useDispatch();
  const { teamArray } = useSelector((state) => state.team);
  const [teamList, setTeamList] = useState(teamArray);
  const [filteredLength, setFilteredLength] = useState(0);
  const fetchData = async (page) => {
    setLoading(true);
    const { payload } = await dispatch(getTeamArr(page));
    setTeamList((prev) => [...prev, ...payload]);
    setLoading(false);
  };
  const [target, loading, setLoading] = useInfiniteScroll({ fetchData });
  const [checked, setChecked, handleFilter] = useFilter();
  const [likeOrder, setLikeOrder, handleOrder] = useOrder();
  const [setIsLock] = useScrollLock();
  useEffect(() => {
    setFilteredLength(handleFilter(teamList).length);
  }, [checked, teamList]);
  useEffect(() => {
    setIsLock(filteredLength === 0);
  }, [filteredLength]);
  return (
    <>
      <CheckBox
        checked={checked}
        setChecked={setChecked}
        likeOrder={likeOrder}
        setLikeOrder={setLikeOrder}
      />
      <BoardWrapper>
        {filteredLength === 0 ? (
          <NoDataMessage />
        ) : (
          handleOrder(teamList, handleFilter).map((teamElement) => (
            <TeamCard key={uuid()} teamInfo={{ ...teamElement }} />
          ))
        )}
      </BoardWrapper>
      <div ref={target}>{loading && <Loader />}</div>
      <UpperButton />
    </>
  );
}

export default TeamBoard;
