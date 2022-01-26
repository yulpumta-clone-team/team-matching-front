import React from 'react';
import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';
import MarkdownViewer from 'components/MdViewer';

function TeamPost(props) {
  const { teamId } = useParams();
  const mdValue = `<h1>팀명: ${teamId}</h1><p>여기에 작성해주세요.</p><h2>아아</h2><h1>아</h1><p><strong>ㅇ</strong></p>`;
  return (
    <div>
      <Link to="./edit" state={{ teamId, mdValue }}>
        Edit
      </Link>
      <MarkdownViewer mdValue={mdValue} />
    </div>
  );
}

TeamPost.propTypes = {};

export default TeamPost;
