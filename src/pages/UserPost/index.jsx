/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useParams, useNavigate } from 'react-router-dom';
import MarkdownViewer from 'components/MdViewer';
import { useDispatch, useSelector } from 'react-redux';
import { getTeamArr, getTeamDetail } from '_actions/team_action';
import Loader from 'pages/Loader';
import { Board, Button, Box, Box2, Box3 } from './styleu';

const userElement = {
  name: '홍길동',
  content:
    '# 임시 데이터\n# 이런식으로하면 됩니다.\n\n### 알겠습니다\n\n안녕하세요. **프론트**입니다.',
  session: 'string',
  img: 'string',
  read: 'int',
  job: 'string',
  comment_cnt: 0,
  like_cnt: 0,
  createdAt: 'time',
  updatedAt: 'time',
  comment: [],
};
function UserPost(props) {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onClickback = () => {
    navigate(-1);
  };
  // const { teamElement } = useSelector((state) => state.team);
  const { id } = useParams();
  useEffect(() => {
    dispatch(getTeamDetail(id));
  }, []);
  if (!userElement) {
    return <Loader />;
  }
  const {
    name,
    content,
    session,
    img,
    read,
    job,
    comment_cnt,
    like_cnt,
    createdAt,
    updatedAt,
    comment,
  } = userElement;
  return (
    <div>
      <button onClick={onClickback}>back</button>
      <Board>
        <Box3>{img}</Box3>
        <Box2>
          <MarkdownViewer mdValue={content} />
        </Box2>
        <div>
          <p>user 아이디 : {userId}</p>
          <p>이름 : {name}</p>
        </div>
        <Box2>좋아요 개수 : {like_cnt}</Box2>
      </Board>
      <Link to="./edit" state={{ userId, content, name, img, like_cnt }}>
        <Button>Edit</Button>
      </Link>
    </div>
  );
}

UserPost.propTypes = {};

export default UserPost;
