/* eslint-disable no-shadow */
import React, { memo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import useHandlePublishedDate from 'hooks/useHandlePublichedDate';
import { setDefaultProfileImage } from 'utils/constant';
import { ButtonContainer, Content } from './style';

function Comment({ postId, comment, dispatchComment }) {
  const { myData } = useSelector((state) => state.auth);
  const { id, nickname, content, users_like, updatedAt, user_id, isSecret, img, parent_id } =
    comment;
  const [activeEditCommentId, setActiveEditCommentId] = useState(null);
  const [showReplyBox, setShowReplyBox] = useState(false);
  const [handlePublishedDate] = useHandlePublishedDate();
  const {
    register,
    handleSubmit,
    setValue,
    setError,
    formState: { errors },
    // watch,
  } = useForm({
    defaultValues: {
      editContent: content,
      replyContent: '',
    },
  });
  const isMine = myData.user_id === user_id;
  const deleteComment = ({ id }) => {
    dispatchComment.deleteComment({ id, postId });
  };
  const activeTargetEditForm = ({ id }) => {
    setActiveEditCommentId(id);
  };
  const editComment = ({ editContent }) => {
    // 서버랑 연결한 후에 comment 제외해야함.
    dispatchComment.patchComment({ postId, id, editContent, comment });
    setActiveEditCommentId(null);
    setValue('editContent', '');
  };
  const handleSecret = ({ id }) => {
    dispatchComment.handleSecret({ id });
  };
  const handleReply = () => {
    setShowReplyBox((prev) => !prev);
  };
  const postReply = ({ replyContent }) => {
    dispatchComment.postReply({ id, content: replyContent });
  };
  return (
    <div>
      {isSecret && !isMine ? (
        <span>비밀댓글입니다.</span>
      ) : (
        <>
          <img src={setDefaultProfileImage(img)} alt={`${nickname} profile`} />
          <Content>
            <h3>{nickname}</h3>
            <span>{content}</span>
            <span>{handlePublishedDate(updatedAt)}</span>
            <button onClick={handleReply}>대댓글남기기</button>
            {showReplyBox && (
              <form
                style={{ display: 'flex', flexDirection: 'column' }}
                onSubmit={handleSubmit(postReply)}
              >
                <input
                  {...register('replyContent', {
                    required: '내용을 입력해주세요.',
                  })}
                  placeholder="댓글을 입력하세요."
                />
                <span>{errors?.editContent?.message}</span>
                <span>{errors?.extraError?.message}</span>
                <button type="submit">작성</button>
              </form>
            )}
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
                {activeEditCommentId !== id && (
                  <button
                    onClick={() => {
                      activeTargetEditForm({ id });
                    }}
                  >
                    수정
                  </button>
                )}
              </ButtonContainer>
            )}
            {activeEditCommentId === id && (
              <form
                style={{ display: 'flex', flexDirection: 'column' }}
                onSubmit={handleSubmit(editComment)}
              >
                <input
                  {...register('editContent', {
                    required: '내용을 입력해주세요.',
                  })}
                  placeholder="댓글을 입력하세요."
                />
                <span>{errors?.editContent?.message}</span>
                <span>{errors?.extraError?.message}</span>
                <button type="submit">작성</button>
              </form>
            )}
          </Content>
        </>
      )}
    </div>
  );
}

Comment.propTypes = {
  postId: PropTypes.number.isRequired,
  dispatchComment: PropTypes.object.isRequired,
  comment: PropTypes.shape({
    id: PropTypes.string.isRequired,
    parent_id: PropTypes.string,
    user_id: PropTypes.number.isRequired,
    nickname: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    updatedAt: PropTypes.string.isRequired,
    isSecret: PropTypes.bool.isRequired,
    users_like: PropTypes.array.isRequired,
    img: PropTypes.string,
  }).isRequired,
};

export default memo(Comment);
