/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import MarkdownViewer from 'components/MdViewer';
import { useDispatch, useSelector } from 'react-redux';
import { getTeamArr, getTeamDetail } from '_actions/team_action';
import Loader from 'pages/Loader';

function TeamPost() {
  const dispatch = useDispatch();
  const { teamElement } = useSelector((state) => state.team);
  const { id } = useParams();
  useEffect(() => {
    dispatch(getTeamDetail(id));
  }, []);
  if (!teamElement) {
    return <Loader />;
  }
  const {
    team_id,
    name,
    content,
    session,
    img,
    read,
    job,
    comment_cnt,
    like_cnt,
    createdAt,
    updatedAt,
    comment,
  } = teamElement;
  return (
    <div>
      <Link to="./edit" state={{ team_id, content }}>
        Edit
      </Link>
      <MarkdownViewer mdValue={content} />
    </div>
  );
}

export default TeamPost;
