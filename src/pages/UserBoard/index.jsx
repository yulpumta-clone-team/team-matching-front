import React, { useEffect, useState } from 'react';
import UserCard from 'components/UserCard';
import UpperButton from 'components/UpperButton';
import { useDispatch, useSelector } from 'react-redux';
import Loader from 'pages/Loader';
import { getUserArr } from '_actions/user_action';
import useInfiniteScroll from 'hooks/useInfinitiScroll';
import useFilter from 'hooks/useFilter';
import CheckBox from 'components/CheckBox';
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
  const [checked, setChecked, handleFilter] = useFilter();
  return (
    <>
      <CheckBox checked={checked} setChecked={setChecked} />
      <BoardWrapper>
        {handleFilter(userList).length !== 0 &&
          handleFilter(userList).map((userElement, idx) => (
            <UserCard key={uuid()} userInfo={{ ...userElement, idx }} />
          ))}
      </BoardWrapper>
      <div ref={target}>{loading && <Loader />}</div>
      <UpperButton />
    </>
  );
}

export default UserBoard;

const filterObj = {
  100: 'front',
  101: 'react',
  102: 'js',
  103: 'ts',
  104: 'vue',
  200: 'back',
  201: 'nodejs',
  202: 'java',
  203: 'spring',
  300: 'design',
  301: 'xd',
  302: 'figma',
};
