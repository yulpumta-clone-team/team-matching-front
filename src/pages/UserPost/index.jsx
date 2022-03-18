/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import Loader from 'pages/Loader';
import MarkdownViewer from 'components/MdViewer';
import CommentContainer from 'components/CommentContainer';
import useInput from 'hooks/useInput';
import { getUserDetail } from '_actions/user_action';
import { handleComment } from 'utils/handleComment';
import { USER } from 'utils/constant';
import { Board, Button, Box, Box2, Box3 } from './styleu';

function UserPost() {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const dispatchComment = handleComment(USER, dispatch);
  const navigate = useNavigate();
  const [commentValue, commentHander, setCommentValue] = useInput('');
  const onClickback = () => {
    navigate(-1);
  };
  const { myData } = useSelector((state) => state.auth);
  const { targetUser } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(getUserDetail(Number(userId)));
  }, [dispatch, userId]);
  const onSubmit = (event) => {
    event.preventDefault();
    if (!myData) {
      alert('로그인을 먼저해주세요');
    } else {
      const newCommentData = {
        content: commentValue,
        user_id: myData.user_id,
        nickname: myData.nickname,
        isSecret: false,
      };
      dispatchComment.postComment(newCommentData);
      setCommentValue('');
    }
  };
  if (!targetUser) {
    return <Loader />;
  }
  const {
    user_id,
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
    comments,
  } = targetUser;
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
        <form onSubmit={onSubmit}>
          <input value={commentValue} onChange={commentHander} placeholder="댓글을 입력하세요." />
          <button type="submit">작성</button>
        </form>
        <CommentContainer postId={user_id} comments={comments} dispatchComment={dispatchComment} />
      </Board>
    </div>
  );
}

UserPost.propTypes = {};

export default UserPost;
