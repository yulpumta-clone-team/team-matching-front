import React, { useEffect, useState } from 'react';
import UserCard from 'components/UserCard';
import UpperButton from 'components/UpperButton';
import { useDispatch, useSelector } from 'react-redux';
import Loader from 'pages/Loader';
import { getUserArr } from '_actions/user_action';
import useInfiniteScroll from 'hooks/useInfinitiScroll';

// 임시로 만든 id발급
import uuid from 'react-uuid';

import { BoardWrapper } from './style';

function UserBoard() {
  const dispatch = useDispatch();
  const { userArray } = useSelector((state) => state.user);
  const [userList, setUserList] = useState(userArray);
  const fetchData = async (page) => {
    setLoading(true);
    const { payload } = await dispatch(getUserArr(page));
    setUserList((prev) => [...prev, ...payload]);
    setLoading(false);
  };
  const [target, loading, setLoading] = useInfiniteScroll({ fetchData });
  return (
    <>
      <BoardWrapper>
        {userList.length !== 0 &&
          userList.map((userElement, idx) => (
            <UserCard key={uuid()} userInfo={{ ...userElement, idx }} />
          ))}
      </BoardWrapper>
      <div ref={target}>{loading && <Loader />}</div>
      <UpperButton />
    </>
  );
}

export default UserBoard;
