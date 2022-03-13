/* eslint-disable no-shadow */
import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import useInput from 'hooks/useInput';
import { useSelector } from 'react-redux';

function Comment({ postId, comment, dispatchComment }) {
  const { myData } = useSelector((state) => state.auth);
  const { id, nickname, content, createdAt, updatedAt, user_id, isSecret } = comment;
  const [editValue, editValueHandler, setEditValue] = useInput('');
  const [activeEditForm, setActiveEditForm] = useState(null);
  const isMine = myData.user_id === user_id;
  const deleteComment = ({ id }) => {
    dispatchComment.deleteComment({ id });
  };
  const activeTargetEditForm = ({ id, content }) => {
    setActiveEditForm(id);
    setEditValue(content);
  };
  const editComment = ({ event, id }) => {
    event.preventDefault();
    dispatchComment.patchComment({ id, editValue });
    setActiveEditForm(null);
  };
  const handleSecret = ({ id }) => {
    dispatchComment.handleSecret({ id });
  };
  return (
    <li>
      <h3>{nickname}</h3>
      <span>{content}</span>
      <br />
      {updatedAt ? (
        <span>{dayjs(updatedAt).format('YYYY년MM월DD일 HH시mm분ss초')}</span>
      ) : (
        <span>{dayjs(createdAt).format('YYYY년MM월DD일 HH시mm분ss초')}</span>
      )}
      {isMine && (
        <div>
          <button
            onClick={() => {
              handleSecret({ id });
            }}
          >
            {isSecret ? '공개' : '비밀'}
          </button>
          <button
            onClick={() => {
              deleteComment({ id });
            }}
          >
            삭제
          </button>
          <button
            onClick={() => {
              activeTargetEditForm({ id, content });
            }}
          >
            수정
          </button>
          {activeEditForm === id && (
            <form
              onSubmit={(event) => {
                editComment({ event, id });
              }}
            >
              <input value={editValue} onChange={editValueHandler} />
              <button type="submit">수정완료</button>
            </form>
          )}
        </div>
      )}
    </li>
  );
}

Comment.propTypes = {
  postId: PropTypes.number.isRequired,
  dispatchComment: PropTypes.object.isRequired,
  comment: PropTypes.shape({
    id: PropTypes.string.isRequired,
    user_id: PropTypes.number.isRequired,
    nickname: PropTypes.string.isRequired,
    isLike: PropTypes.bool.isRequired,
    content: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    updatedAt: PropTypes.string.isRequired,
    isSecret: PropTypes.bool.isRequired,
    replies: PropTypes.array.isRequired,
  }).isRequired,
};

export default memo(Comment);
