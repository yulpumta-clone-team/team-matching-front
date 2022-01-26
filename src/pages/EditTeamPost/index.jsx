import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import MarkdownEditor from 'components/MdEditor';

function EditTeamProfile(props) {
  const location = useLocation();
  const { teamId, mdValue } = location.state;
  console.log(teamId);
  return (
    <div>
      <MarkdownEditor mdValue={mdValue} />
    </div>
  );
}

EditTeamProfile.propTypes = {};

export default EditTeamProfile;
