/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import MarkdownViewer from 'components/MdViewer';
import { useDispatch, useSelector } from 'react-redux';
import { getTeamDetail } from '_actions/team_action';
import Loader from 'pages/Loader';
import { Board, Button, Box, Box2, Box3 } from './stylep';

function TeamPost() {
  const { teamId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onClickback = () => {
    navigate(-1);
  };
  const { teamElement } = useSelector((state) => state.team);
  console.log(teamElement);
  useEffect(() => {
    dispatch(getTeamDetail(teamId));
  }, []);
  if (!teamElement) {
    return <Loader />;
  }
  const {
    team_name,
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
      <button onClick={onClickback}>back</button>
      <Board>
        <Box3>{img}</Box3>
        <Box2>
          <MarkdownViewer mdValue={content} />
        </Box2>
        <Box2>
          이름 : {name} / 팀명 : {team_name}
        </Box2>
        <Box2>좋아요 개수 : {like_cnt}</Box2>
      </Board>
      <Link to="./edit" state={{ team_name, content, name, img, like_cnt }}>
        <Button>Edit</Button>
      </Link>
    </div>
  );
}

export default TeamPost;
