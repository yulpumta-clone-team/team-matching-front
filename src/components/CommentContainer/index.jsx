/* eslint-disable no-shadow */
import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import Comment from 'components/Comment';
import useHandlePublishedDate from 'hooks/useHandlePublichedDate';
import { setDefaultProfileImage } from 'utils/constant';
import { CommentLi, CommentUl, RepliesUl } from './style';

function CommentContainer({ postId, comments, dispatchComment }) {
  const [handlePublishedDate] = useHandlePublishedDate();
  const [showMore, setShowMore] = useState(false);
  const handleShowMore = () => {
    setShowMore((prev) => !prev);
  };
  return (
    <CommentUl>
      {comments.map(({ replies, ...comment }) => (
        <CommentLi key={comment.id}>
          <Comment postId={postId} comment={comment} dispatchComment={dispatchComment} />
          {replies.length !== 0 && <button onClick={handleShowMore}>더보기</button>}
          {showMore && (
            <RepliesUl>
              {replies.map((comment) => (
                <CommentLi key={comment.id}>
                  <Comment postId={postId} comment={comment} dispatchComment={dispatchComment} />
                </CommentLi>
              ))}
            </RepliesUl>
          )}
        </CommentLi>
      ))}
    </CommentUl>
  );
}

CommentContainer.propTypes = {
  postId: PropTypes.number.isRequired,
  comments: PropTypes.array.isRequired,
  dispatchComment: PropTypes.object.isRequired,
};

export default memo(CommentContainer);
