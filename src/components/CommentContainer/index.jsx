import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Comment from 'components/Comment';

function CommentContainer({ type, comments, dispatchComment }) {
  console.log(comments);
  return (
    <ul>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} dispatchComment={dispatchComment} />
      ))}
    </ul>
  );
}

CommentContainer.propTypes = {
  type: PropTypes.string.isRequired,
  comments: PropTypes.array.isRequired,
  dispatchComment: PropTypes.object.isRequired,
};

export default memo(CommentContainer);
