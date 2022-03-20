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
  POST_TEAM_REPLY,
  DELETE_TEAM_REPLY,
  PATCH_TEAM_REPLY,
  HANDLE_SECRET_TEAM_REPLY,
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

export async function postTeamComment(dataToSubmit) {
  const { team_id, writter_id, nickname, content, isSecret } = dataToSubmit;
  const newCommentCreateAt = dayjs().format('YYYY-MM-DD HH:mm:ss.ssssss');
  const newCommentId = uuid();
  const newComment = {
    ...commentObj,
    writter_id,
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
export async function patchTeamComment(dataToSubmit) {
  const updatedAt = dayjs().format('YYYY-MM-DD HH:mm:ss.ssssss');
  const { postId: team_id, id, editContent, comment } = dataToSubmit;
  const editiedComment = {
    ...comment,
    id,
    team_id,
    content: editContent,
    updatedAt,
  };
  return {
    type: PATCH_TEAM_COMMENT,
    payload: editiedComment,
  };
}
export async function deleteTeamComment(dataToSubmit) {
  const { postId: team_id, id } = dataToSubmit;
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

export async function postTeamReply(dataToSubmit) {
  const { postId: team_id, parent_id, nickname, content, writter_id } = dataToSubmit;
  const newCommentCreateAt = dayjs().format('YYYY-MM-DD HH:mm:ss.ssssss');
  const newCommentId = uuid();
  const newComment = {
    ...commentObj,
    team_id,
    parent_id,
    id: newCommentId,
    writter_id,
    nickname,
    content,
    createdAt: newCommentCreateAt,
    updatedAt: newCommentCreateAt,
  };
  return {
    type: POST_TEAM_REPLY,
    payload: newComment,
  };
}

export async function deleteTeamReply(dataToSubmit) {
  const { id, postId, parent_id } = dataToSubmit;
  return {
    type: DELETE_TEAM_REPLY,
    payload: dataToSubmit,
  };
}
export async function patchTeamReply(dataToSubmit) {
  const updatedAt = dayjs().format('YYYY-MM-DD HH:mm:ss.ssssss');
  const { id, postId: team_id, parent_id, editContent, comment } = dataToSubmit;
  const editiedComment = {
    ...comment,
    id,
    parent_id,
    team_id,
    content: editContent,
    updatedAt,
  };
  return {
    type: PATCH_TEAM_REPLY,
    payload: editiedComment,
  };
}

export async function handleSecretTeamReply(dataToSubmit) {
  const updatedAt = dayjs().format('YYYY-MM-DD HH:mm:ss.ssssss');
  return {
    type: HANDLE_SECRET_TEAM_REPLY,
    payload: { ...dataToSubmit, updatedAt },
  };
}

const commentObj = {
  team_id: null,
  id: null,
  writter_id: null,
  nickname: null,
  users_like: [],
  isLike: false,
  content: null,
  img: 'https://user-images.githubusercontent.com/71386219/157435570-a48382a8-63e5-4d25-91f4-e506289424b5.png',
  createdAt: null,
  updatedAt: null,
  isSecret: false,
  replies: [],
};
