/* eslint-disable no-shadow */
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MarkdownViewer from 'components/MdViewer';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteUserComment,
  getUserDetail,
  patchUserComment,
  postUserComment,
} from '_actions/user_action';
import Loader from 'pages/Loader';
import useInput from 'hooks/useInput';
import dayjs from 'dayjs';
import { Board, Button, Box, Box2, Box3 } from './styleu';

function UserPost() {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [commentValue, commentHander, setCommentValue] = useInput('');
  const [editValue, editValueHandler, setEditValue] = useInput('');
  const [activeEditForm, setActiveEditForm] = useState(null);
  const [isSecretComment, setIsSecretComment] = useState(false);
  const onClickback = () => {
    navigate(-1);
  };
  const { myData } = useSelector((state) => state.auth);
  const { targetUser } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(getUserDetail(userId));
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
      dispatch(postUserComment(newCommentData));
      setCommentValue('');
    }
  };
  const deleteComment = ({ comment_id }) => {
    dispatch(deleteUserComment({ comment_id }));
  };
  const activeTargetEditForm = ({ comment_id, content }) => {
    setActiveEditForm(comment_id);
    setEditValue(content);
  };
  const editComment = ({ event, comment_id }) => {
    event.preventDefault();
    dispatch(patchUserComment({ comment_id, editValue }));
    setActiveEditForm(null);
  };

  if (!targetUser) {
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
        {comments.map(({ comment_id, nickname, content, createdAt }) => (
          <li key={comment_id}>
            <span>{nickname}</span>
            <br />
            <span>{content}</span>
            <br />
            <span>{dayjs(createdAt).format('YYYY년MM월DD일 HH시mm분ss초')}</span>
            <button
              onClick={() => {
                deleteComment({ comment_id });
              }}
            >
              삭제
            </button>
            <button
              onClick={() => {
                activeTargetEditForm({ comment_id, content });
              }}
            >
              수정
            </button>
            {activeEditForm === comment_id && (
              <form
                onSubmit={(event) => {
                  editComment({ event, comment_id });
                }}
              >
                <input value={editValue} onChange={editValueHandler} />
                <button type="submit">수정완료</button>
              </form>
            )}
          </li>
        ))}
      </Board>
    </div>
  );
}

UserPost.propTypes = {};

export default UserPost;
