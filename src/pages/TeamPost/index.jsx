import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import MarkdownViewer from 'components/MdViewer';
import { useDispatch, useSelector } from 'react-redux';
import { getTeamArr } from '_actions/team_action';

function TeamPost() {
  const dispatch = useDispatch();
  const { teamElement } = useSelector((state) => state.team);
  console.log(teamElement);
  const { teamId } = useParams();
  useEffect(() => {
    dispatch(getTeamArr(teamId));
  }, []);
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

export default TeamPost;
