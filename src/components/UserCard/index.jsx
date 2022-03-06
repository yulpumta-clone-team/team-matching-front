/* eslint-disable camelcase */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { USER_BOARD } from 'utils/route';
import { CardTitle, CardWrapper, ImgContainer, SessionContainer } from './style';

function UserCard({ userInfo }) {
  const {
    user_id,
    nickname,
    hope_session,
    isLike,
    skills,
    img,
    job,
    comment_cnt,
    like_cnt,
    status,
    idx,
  } = userInfo;
  return (
    <CardWrapper>
      <h1>{idx}</h1>
      <Link to={`${USER_BOARD}/${user_id}`}>{nickname}</Link>
      <CardTitle>{nickname}</CardTitle>
      <ImgContainer>
        <img src={img} alt="임시" />
      </ImgContainer>
      <SessionContainer>{hope_session}</SessionContainer>
      <ul>
        {skills.map((skill, idxx) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={idxx}>{skill}</li>
        ))}
      </ul>
    </CardWrapper>
  );
}

UserCard.propTypes = {
  userInfo: PropTypes.shape({
    idx: PropTypes.number.isRequired,
    user_id: PropTypes.number.isRequired,
    nickname: PropTypes.string.isRequired,
    hope_session: PropTypes.number.isRequired,
    skills: PropTypes.array.isRequired,
    img: PropTypes.string.isRequired,
    job: PropTypes.string.isRequired,
    isLike: PropTypes.bool.isRequired,
    comment_cnt: PropTypes.number.isRequired,
    like_cnt: PropTypes.number.isRequired,
    status: PropTypes.bool.isRequired,
  }).isRequired,
};

export default UserCard;
