import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

function EditUserProfile(props) {
  const location = useLocation();
  const { userId } = location.state;
  return (
    <div>
      <h1>{userId}</h1> EditUserProfile
    </div>
  );
}

EditUserProfile.propTypes = {};

export default EditUserProfile;
