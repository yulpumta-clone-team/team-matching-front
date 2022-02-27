/* eslint-disable camelcase */
import TeamCard from 'components/TeamCard';
import UpperButton from 'components/UpperButton';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTeamArr } from '_actions/team_action';
import Loader from 'pages/Loader';

// 임시로 만든 id발급
import uuid from 'react-uuid';

import { BoardWrapper } from './style';

function TeamBoard() {
  const dispatch = useDispatch();
  const { teamArray } = useSelector((state) => state.team);
  const target = useRef(null);
  // const [count, setCount] = useState(1);
  const [loading, setLoading] = useState(false);
  const [teamList, setTeamList] = useState(teamArray);
  let page = 1;
  const fetchData = async () => {
    // console.log(count);
    const { payload } = await dispatch(getTeamArr(page));
    setTeamList((prev) => [...prev, ...payload]);
  };
  const fetchMore = useCallback(async () => {
    setLoading(true);
    // setCount((prev) => prev + 1);
    page += 1;
    await fetchData();
    setLoading(false);
  }, [page]);

  // useEffect(() => {
  //   fetchData();
  // }, []); // count

  const handleObsever = useCallback(
    async ([entry], observer) => {
      if (!entry.isIntersecting) {
        console.log('화면에서 제외됨');
        return;
      }
      console.log('화면에서 노출됨', page);
      observer.unobserve(entry.target);
      await fetchMore();
      observer.observe(target.current);
    },
    [loading, target],
  );

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };
    let observer;
    if (!loading && target.current) {
      observer = new IntersectionObserver(handleObsever, option);
      observer.observe(target.current);
    }
    return () => observer.current && observer.disconnect();
  }, [target.current]);
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
