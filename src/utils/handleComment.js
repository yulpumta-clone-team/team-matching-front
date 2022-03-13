/* eslint-disable no-unused-expressions */
import {
  deleteUserComment,
  handleSecretUserComment,
  patchUserComment,
  postUserComment,
} from '_actions/user_action';
import { USER } from './constant';

export default function handleComment(type, dispatch) {
  const isUser = type === USER;
  return {
    postComment(dataToSubmit) {
      isUser ? dispatch(postUserComment(dataToSubmit)) : null;
    },
    deleteComment(dataToSubmit) {
      isUser ? dispatch(deleteUserComment(dataToSubmit)) : null;
    },
    patchComment(dataToSubmit) {
      isUser ? dispatch(patchUserComment(dataToSubmit)) : null;
    },
    handleSecret(dataToSubmit) {
      isUser ? dispatch(handleSecretUserComment(dataToSubmit)) : null;
    },
  };
}
