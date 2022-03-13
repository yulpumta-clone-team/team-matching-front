/* eslint-disable no-shadow */
import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import useInput from 'hooks/useInput';
import { useDispatch } from 'react-redux';
import { deleteUserComment, patchUserComment } from '_actions/user_action';

function Comment({ comment }) {
  const dispatch = useDispatch();
  const { comment_id, nickname, content, createdAt } = comment;
  const [editValue, editValueHandler, setEditValue] = useInput('');
  const [activeEditForm, setActiveEditForm] = useState(null);
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
  return (
    <li>
      <h3>{nickname}</h3>
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
  );
}

Comment.propTypes = {
  comment: PropTypes.shape({
    user_id: PropTypes.number.isRequired,
    comment_id: PropTypes.string.isRequired,
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
