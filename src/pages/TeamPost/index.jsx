import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

function TeamPost(props) {
  const { teamId } = useParams();
  console.log(teamId);
  return <div>TeamPost</div>;
}

TeamPost.propTypes = {};

export default TeamPost;
