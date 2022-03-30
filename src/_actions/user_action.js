import axios from 'axios';
import {
  GET_USER__ARR,
  GET_USER_DETAIL,
  POST_USER_COMMENT,
  POST_USER_REPLY,
  DELETE_USER_COMMENT,
  DELETE_USER_REPLY,
  PATCH_USER_COMMENT,
  PATCH_USER_REPLY,
  HANDLE_SECRET_USER_REPLY,
  HANDLE_SECRET_USER_COMMENT,
} from '_types/userTypes';
import uuid from 'react-uuid';
import dayjs from 'dayjs';
import userApi from 'api/user';

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
  const { user_id, writter_id, nickname, content, isSecret } = dataTosubmit;
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
    type: POST_USER_COMMENT,
    payload: newComment,
  };
}
export async function patchUserComment(dataToSubmit) {
  const updatedAt = dayjs().format('YYYY-MM-DD HH:mm:ss.ssssss');
  const { postId: user_id, id, editContent, comment } = dataToSubmit;
  const editiedComment = {
    ...comment,
    id,
    user_id,
    content: editContent,
    updatedAt,
  };
  return {
    type: PATCH_USER_COMMENT,
    payload: editiedComment,
  };
}
export async function deleteUserComment(dataToSubmit) {
  const { postId: user_id, id } = dataToSubmit;
  return {
    type: DELETE_USER_COMMENT,
    payload: id,
  };
}

export async function handleSecretUserComment(dataToSubmit) {
  const updatedAt = dayjs().format('YYYY-MM-DD HH:mm:ss.ssssss');
  return {
    type: HANDLE_SECRET_USER_COMMENT,
    payload: { ...dataToSubmit, updatedAt },
  };
}

export async function postUserReply(dataToSubmit) {
  const { postId: user_id, parent_id, nickname, content, writter_id } = dataToSubmit;
  const newCommentCreateAt = dayjs().format('YYYY-MM-DD HH:mm:ss.ssssss');
  const newCommentId = uuid();
  const newComment = {
    ...commentObj,
    user_id,
    parent_id,
    id: newCommentId,
    writter_id,
    nickname,
    content,
    createdAt: newCommentCreateAt,
    updatedAt: newCommentCreateAt,
  };
  return {
    type: POST_USER_REPLY,
    payload: newComment,
  };
}

export async function deleteUserReply(dataToSubmit) {
  const { id, postId, parent_id } = dataToSubmit;
  return {
    type: DELETE_USER_REPLY,
    payload: dataToSubmit,
  };
}
export async function patchUserReply(dataToSubmit) {
  const updatedAt = dayjs().format('YYYY-MM-DD HH:mm:ss.ssssss');
  const { id, postId: user_id, parent_id, editContent, comment } = dataToSubmit;
  const editiedComment = {
    ...comment,
    id,
    parent_id,
    user_id,
    content: editContent,
    updatedAt,
  };
  return {
    type: PATCH_USER_REPLY,
    payload: editiedComment,
  };
}

export async function handleSecretUserReply(dataToSubmit) {
  const updatedAt = dayjs().format('YYYY-MM-DD HH:mm:ss.ssssss');
  return {
    type: HANDLE_SECRET_USER_REPLY,
    payload: { ...dataToSubmit, updatedAt },
  };
}
const commentObj = {
  user_id: null,
  id: null,
  writter_id: null,
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
