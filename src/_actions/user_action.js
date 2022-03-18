/* eslint-disable camelcase */
import axios from 'axios';
import {
  DELETE_USER_COMMENT,
  GET_USER_DETAIL,
  GET_USER__ARR,
  HANDLE_SECRET_USER_COMMENT,
  PATCH_USER_COMMENT,
  POST_USER_COMMENT,
  POST_USER_REPLY,
} from '_types/userTypes';
import uuid from 'react-uuid';
import dayjs from 'dayjs';

export async function getUserDetail(dataTosubmit) {
  console.log('UserDetail ID: ', dataTosubmit);
  const { data } = await axios.get('../_mockData/user.json').then((response) => response.data);
  return {
    // request변수로 받은 data를 reducer로 넘겨주기
    type: GET_USER_DETAIL,
    payload: { ...data, user_id: dataTosubmit },
  };
}

export async function getUserArr(count) {
  console.log('UserBoard page count: ', count);
  const { data } = await axios.get('../_mockData/users.json').then((response) => response.data);
  return {
    type: GET_USER__ARR,
    payload: data,
  };
}

export async function postUserComment(dataTosubmit) {
  const { user_id, nickname, content, isSecret } = dataTosubmit;
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
    type: POST_USER_COMMENT,
    payload: newComment,
  };
}
export async function patchUserComment(dataTosubmit) {
  const updatedAt = dayjs().format('YYYY-MM-DD HH:mm:ss.ssssss');
  const { id, editContent, comment } = dataTosubmit;

  const editiedComment = {
    ...comment,
    id,
    content: editContent,
    updatedAt,
  };
  return {
    type: PATCH_USER_COMMENT,
    payload: editiedComment,
  };
}
export async function deleteUserComment(dataTosubmit) {
  const { id } = dataTosubmit;
  return {
    type: DELETE_USER_COMMENT,
    payload: id,
  };
}

export async function handleSecretUserComment(dataTosubmit) {
  const updatedAt = dayjs().format('YYYY-MM-DD HH:mm:ss.ssssss');
  return {
    type: HANDLE_SECRET_USER_COMMENT,
    payload: { ...dataTosubmit, updatedAt },
  };
}

export async function postUserReply(dataTosubmit) {
  const { user_id, nickname, content, isSecret } = dataTosubmit;
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
    type: POST_USER_REPLY,
    payload: newComment,
  };
}

const commentObj = {
  user_id: null,
  id: null,
  users_like: [],
  nickname: null,
  isLike: false,
  content: null,
  img: 'https://user-images.githubusercontent.com/71386219/157435570-a48382a8-63e5-4d25-91f4-e506289424b5.png',
  createdAt: null,
  updatedAt: null,
  isSecret: false,
  replies: [],
};
