import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

function UserPost(props) {
  const { userId } = useParams();
  return (
    <div>
      <h1>{userId}</h1> UserPost
    </div>
  );
}

UserPost.propTypes = {};

export default UserPost;
