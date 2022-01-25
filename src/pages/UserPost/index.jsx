import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

function UserPost(props) {
  const { userId } = useParams();
  console.log(userId);
  return <div>UserPost</div>;
}

UserPost.propTypes = {};

export default UserPost;
