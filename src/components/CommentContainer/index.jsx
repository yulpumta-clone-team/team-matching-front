/* eslint-disable camelcase */
import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Comment from 'components/Comment';
import { CommentUl } from './style';

function CommentContainer({ postId, comments, dispatchComment }) {
  return (
    <CommentUl>
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          postId={postId}
          comment={comment}
          dispatchComment={dispatchComment}
        />
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
