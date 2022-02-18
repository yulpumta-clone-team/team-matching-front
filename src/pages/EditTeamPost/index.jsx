import React from 'react';
import { useLocation } from 'react-router-dom';
import MarkdownEditor from 'components/MdEditor';

function EditTeamProfile() {
  const location = useLocation();
  const { teamId, content } = location.state;
  console.log(teamId);
  return (
    <div>
      <MarkdownEditor mdValue={content} />
    </div>
  );
}

export default EditTeamProfile;
