/* eslint-disable camelcase */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes, { objectOf } from 'prop-types';
import { TEAM_BOARD } from 'utils/route';
import { CardTitle, CardWrapper, ImgContainer, SessionContainer } from './style';

function TeamCard({ teamInfo }) {
  const { user_id, team_id, name, session, img, read, comment_cnt, like_cnt } = teamInfo;
  return (
    <CardWrapper>
      <Link to={`${TEAM_BOARD}/${team_id}`}>{name}</Link>
      <CardTitle>{name}</CardTitle>
      <ImgContainer>
        <img src={img} alt="임시" />
      </ImgContainer>
      <SessionContainer>{session}</SessionContainer>
      <span>{read}</span>
      <span>{comment_cnt}</span>
      <span>{like_cnt}</span>
    </CardWrapper>
  );
}

TeamCard.propTypes = {
  teamInfo: PropTypes.shape({
    user_id: PropTypes.number.isRequired,
    team_id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    session: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    read: PropTypes.number.isRequired,
    comment_cnt: PropTypes.number.isRequired,
    like_cnt: PropTypes.number.isRequired,
  }).isRequired,
};

export default TeamCard;
