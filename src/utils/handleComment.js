/* eslint-disable no-unused-expressions */
import {
  deleteUserComment,
  handleSecretUserComment,
  patchUserComment,
  postUserComment,
} from '_actions/user_action';
import { USER } from './constant';

export function handleComment(type, dispatch) {
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

export function handleCommentReducer(target) {
  const targetElement = target;
  return {
    postComment(payload) {
      return [...[...targetElement.comments], payload];
    },
    deleteComment(payload) {
      return [...targetElement.comments].filter((comment) => comment.id !== payload);
    },
    patchComment(payload) {
      const { id, editValue, updatedAt } = payload;
      return [...targetElement.comments].map((comment) => {
        if (comment.id === id) {
          return { ...comment, content: editValue, updatedAt };
        }
        return comment;
      });
    },
    handleSecret(payload) {
      const { id, updatedAt } = payload;
      return [...targetElement.comments].map((comment) => {
        if (comment.id === id) {
          return { ...comment, isSecret: !comment.isSecret, updatedAt };
        }
        return comment;
      });
    },
  };
}
