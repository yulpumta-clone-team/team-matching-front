import { handleCommentReducer } from 'utils/handleComment';
import {
  DELETE_USER_COMMENT,
  GET_USER_DETAIL,
  GET_USER__ARR,
  HANDLE_SECRET_USER_COMMENT,
  PATCH_USER_COMMENT,
  POST_USER_COMMENT,
  POST_USER_REPLY,
} from '_types/userTypes';

const initState = {
  targetUser: null,
  userArray: [],
};

const userReducer = (state = initState, action) => {
  const { targetUser } = state;
  const handlecomment = handleCommentReducer(state.targetUser);
  switch (action.type) {
    case GET_USER_DETAIL:
      return { ...state, targetUser: action.payload };
    case GET_USER__ARR:
      return { ...state, userArray: action.payload };
    case POST_USER_COMMENT:
      return {
        ...state,
        targetUser: { ...targetUser, comments: handlecomment.postComment(action.payload) },
      };
    case DELETE_USER_COMMENT:
      return {
        ...state,
        targetUser: {
          ...targetUser,
          comments: handlecomment.deleteComment(action.payload),
        },
      };
    case PATCH_USER_COMMENT:
      return {
        ...state,
        targetUser: {
          ...targetUser,
          comments: handlecomment.patchComment(action.payload),
        },
      };
    case HANDLE_SECRET_USER_COMMENT:
      return {
        ...state,
        targetUser: {
          ...targetUser,
          comments: handlecomment.handleSecret(action.payload),
        },
      };
    case POST_USER_REPLY:
      return {
        ...state,
        targetUser: { ...targetUser, comments: handlecomment.postComment(action.payload) },
      };
    default:
      return state;
  }
};

export default userReducer;
