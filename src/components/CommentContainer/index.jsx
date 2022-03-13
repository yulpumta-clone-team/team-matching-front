import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Comment from 'components/Comment';

function CommentContainer({ postId, comments, dispatchComment }) {
  return (
    <ul>
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          postId={postId}
          comment={comment}
          dispatchComment={dispatchComment}
        />
      ))}
    </ul>
  );
}

CommentContainer.propTypes = {
  postId: PropTypes.number.isRequired,
  comments: PropTypes.array.isRequired,
  dispatchComment: PropTypes.object.isRequired,
};

export default memo(CommentContainer);
