import axios from 'axios';
import dayjs from 'dayjs';
import uuid from 'react-uuid';
import {
  GET_TEAM_DETAIL,
  GET_TEAM__ARR,
  POST_TEAM_COMMENT,
  HANDLE_SECRET_TEAM_COMMENT,
  DELETE_TEAM_COMMENT,
  PATCH_TEAM_COMMENT,
} from '_types/teamTypes';

export async function getTeamDetail(dataTosubmit) {
  console.log('TeamDetail ID: ', dataTosubmit);
  const { data } = await axios.get('../_mockData/team.json').then((response) => response.data);
  return {
    type: GET_TEAM_DETAIL,
    payload: { ...data, team_id: dataTosubmit },
  };
}

export async function getTeamArr(count) {
  console.log('TeamBoard page count: ', count);
  const { data } = await axios.get('../_mockData/teams.json').then((response) => response.data);
  return {
    type: GET_TEAM__ARR,
    payload: data,
  };
}

export async function postTeamComment(dataTosubmit) {
  const { team_id, user_id, nickname, content, isSecret } = dataTosubmit;
  const newCommentCreateAt = dayjs().format('YYYY-MM-DD HH:mm:ss.ssssss');
  const newCommentId = uuid();
  const newComment = {
    ...commentObj,
    user_id,
    id: newCommentId,
    nickname,
    content,
    isSecret,
    createdAt: newCommentCreateAt,
    updatedAt: newCommentCreateAt,
  };
  return {
    type: POST_TEAM_COMMENT,
    payload: newComment,
  };
}
export async function patchTeamComment(dataTosubmit) {
  const updatedAt = dayjs().format('YYYY-MM-DD HH:mm:ss.ssssss');
  return {
    type: PATCH_TEAM_COMMENT,
    payload: { ...dataTosubmit, updatedAt },
  };
}
export async function deleteTeamComment(dataTosubmit) {
  const { id } = dataTosubmit;
  return {
    type: DELETE_TEAM_COMMENT,
    payload: id,
  };
}

export async function handleSecretTeamComment(dataTosubmit) {
  const updatedAt = dayjs().format('YYYY-MM-DD HH:mm:ss.ssssss');
  return {
    type: HANDLE_SECRET_TEAM_COMMENT,
    payload: { ...dataTosubmit, updatedAt },
  };
}

const commentObj = {
  user_id: null,
  id: null,
  nickname: null,
  isLike: false,
  content: null,
  img: 'https://user-images.githubusercontent.com/71386219/157435570-a48382a8-63e5-4d25-91f4-e506289424b5.png',
  createdAt: null,
  updatedAt: null,
  isSecret: false,
  replies: [],
};
