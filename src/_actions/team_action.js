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
  PATCH_TEAM_LIKE,
  PATCH_TEAM_COMMENT_LIKE,
} from '_types/teamTypes';

export async function actionGetTeamDetail(responseData) {
  return {
    type: GET_TEAM_DETAIL,
    payload: responseData,
  };
}

export async function actionGetTeamList(responseData) {
  return {
    type: GET_TEAM__ARR,
    payload: responseData,
  };
}

export async function actionPostTeamComment(responseData) {
  return {
    type: POST_TEAM_COMMENT,
    payload: responseData,
  };
}

export async function actionPostTeamReply(responseData) {
  return {
    type: POST_TEAM_REPLY,
    payload: responseData,
  };
}

export async function actionDeleteTeamReply(responseData) {
  return {
    type: DELETE_TEAM_REPLY,
    payload: responseData,
  };
}

export async function actionDeleteTeamComment(responseData) {
  return {
    type: DELETE_TEAM_COMMENT,
    payload: responseData,
  };
}

export async function actionPatchTeamReply(responseData) {
  return {
    type: PATCH_TEAM_REPLY,
    payload: responseData,
  };
}

export async function actionPatchTeamLike(responseData) {
  return {
    type: PATCH_TEAM_LIKE,
    payload: responseData,
  };
}

export async function actionPatchTeamComment(responseData) {
  return {
    type: PATCH_TEAM_COMMENT,
    payload: responseData,
  };
}

export async function actionPatchTeamCommentLike(responseData) {
  return {
    type: PATCH_TEAM_COMMENT_LIKE,
    payload: responseData,
  };
}

export async function actionSecretTeamComment(responseData) {
  return {
    type: HANDLE_SECRET_TEAM_COMMENT,
    payload: responseData,
  };
}

export async function actionSecretTeamReply(responseData) {
  return {
    type: HANDLE_SECRET_TEAM_REPLY,
    payload: responseData,
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
