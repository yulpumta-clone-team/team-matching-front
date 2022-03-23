/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import useModal from 'hooks/useModal';
import { HOME, PROFILE, TEAM_BOARD, USERS_LIST, USER_BOARD } from 'utils/route';
import Menu from 'components/Menu';
import { Ul } from './style';

function LoginNav({ myData }) {
  console.log('Login naviogation:', myData);
  const { nickname, img } = myData;
  const [showModal, onCloseModal, openModal] = useModal();
  return (
    <Ul>
      <li>
        <Link to={HOME}>Main</Link>
      </li>
      <li>
        <Link to={USER_BOARD}>User Board</Link>
      </li>
      <li>
        <Link to={TEAM_BOARD}>Team Board</Link>
      </li>
      <li onClick={openModal}>
        <img style={{ width: '30px' }} src={img} alt="profile" />
        <span>{nickname}</span>
      </li>
      <Menu style={{ right: 0, top: 80 }} show={showModal} onCloseModal={onCloseModal}>
        <Ul IsflexDirectionColumn>
          <li>
            <Link to={HOME}>내 작성글</Link>
          </li>
          <li>
            <Link to={USERS_LIST}>내 관심글</Link>
          </li>
          <li>
            <Link to={PROFILE}>프로필 설정</Link>
          </li>
          <li>
            <button>로그아웃</button>
          </li>
        </Ul>
      </Menu>
    </Ul>
  );
}

LoginNav.propTypes = {
  myData: PropTypes.shape({
    nickname: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  }).isRequired,
};

export default LoginNav;
