/* eslint-disable no-shadow */
import React, { memo, useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import useInput from 'hooks/useInput';
import useHandlePublishedDate from 'hooks/useHandlePublichedDate';
import { setDefaultProfileImage } from 'utils/constant';
import { ButtonContainer, CommentLi } from './style';

function Comment({ postId, comment, dispatchComment }) {
  const { myData } = useSelector((state) => state.auth);
  const { id, nickname, content, createdAt, updatedAt, user_id, isSecret, img } = comment;
  const [editValue, editValueHandler, setEditValue] = useInput('');
  const [activeEditForm, setActiveEditForm] = useState(null);
  const [handlePublishedDate] = useHandlePublishedDate(updatedAt);
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
    <div>
      {isSecret && !isMine ? (
        <CommentLi>비밀댓글입니다.</CommentLi>
      ) : (
        <CommentLi>
          <img src={setDefaultProfileImage(img)} alt={`${nickname} profile`} />
          <div>
            <h3>{nickname}</h3>
            <span>{content}</span>
            <span>{handlePublishedDate()}</span>
          </div>
          {isMine && (
            <ButtonContainer>
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
            </ButtonContainer>
          )}
        </CommentLi>
      )}
    </div>
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
    createdAt: PropTypes.string.isRequired,
    updatedAt: PropTypes.string.isRequired,
    isSecret: PropTypes.bool.isRequired,
    replies: PropTypes.array.isRequired,
    img: PropTypes.string,
  }).isRequired,
};

export default memo(Comment);
