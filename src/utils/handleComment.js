/* eslint-disable no-unused-expressions */
import {
  deleteTeamComment,
  handleSecretTeamComment,
  patchTeamComment,
  postTeamComment,
} from '_actions/team_action';
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
      isUser ? dispatch(postUserComment(dataToSubmit)) : dispatch(postTeamComment(dataToSubmit));
    },
    deleteComment(dataToSubmit) {
      isUser ? dispatch(deleteUserComment(dataToSubmit)) : dispatch(patchTeamComment(dataToSubmit));
    },
    patchComment(dataToSubmit) {
      isUser ? dispatch(patchUserComment(dataToSubmit)) : dispatch(deleteTeamComment(dataToSubmit));
    },
    handleSecret(dataToSubmit) {
      isUser
        ? dispatch(handleSecretUserComment(dataToSubmit))
        : dispatch(handleSecretTeamComment(dataToSubmit));
    },
  };
}

export function handleCommentReducer(target) {
  const targetElement = target;
  console.log(targetElement);
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
