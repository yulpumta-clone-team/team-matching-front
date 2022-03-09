import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserArr } from '_actions/user_action';
import UserCard from 'components/UserCard';
import Loader from 'pages/Loader';
import UpperButton from 'components/UpperButton';
import CheckBox from 'components/CheckBox';
import NoDataMessage from 'components/NoDataMessage';
import useInfiniteScroll from 'hooks/useInfinitiScroll';
import useScrollLock from 'hooks/useScrollLock';
import useFilter from 'hooks/useFilter';
import uuid from 'react-uuid';
import { BoardWrapper } from './style';

function UserBoard() {
  const dispatch = useDispatch();
  const { userArray } = useSelector((state) => state.user);
  const [userList, setUserList] = useState(userArray);
  const [filteredLength, setFilteredLength] = useState(0);
  const fetchData = async (page) => {
    setLoading(true);
    const { payload } = await dispatch(getUserArr(page));
    setUserList((prev) => [...prev, ...payload]);
    setLoading(false);
  };
  const [target, loading, setLoading] = useInfiniteScroll({ fetchData });
  const [checked, setChecked, handleFilter] = useFilter();
  const [setIsLock] = useScrollLock();
  useEffect(() => {
    setFilteredLength(handleFilter(userList).length);
  }, [checked, userList]);
  useEffect(() => {
    setIsLock(filteredLength === 0);
  }, [filteredLength]);
  return (
    <>
      <CheckBox checked={checked} setChecked={setChecked} />
      <BoardWrapper>
        {filteredLength === 0 ? (
          <NoDataMessage />
        ) : (
          handleFilter(userList).map((userElement, idx) => (
            <UserCard key={uuid()} userInfo={{ ...userElement, idx }} />
          ))
        )}
      </BoardWrapper>
      <div ref={target}>{loading && <Loader />}</div>
      <UpperButton />
    </>
  );
}

export default UserBoard;
