import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Comment from 'components/Comment';

function CommentContainer({ comments }) {
  return (
    <ul>
      {comments.map((comment) => (
        <Comment key={comment.comment_id} comment={comment} />
      ))}
    </ul>
  );
}

CommentContainer.propTypes = {
  comments: PropTypes.array.isRequired,
};

export default memo(CommentContainer);
