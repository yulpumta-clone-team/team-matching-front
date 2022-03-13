/* eslint-disable no-case-declarations */
import {
  DELETE_USER_COMMENT,
  GET_USER_DETAIL,
  GET_USER__ARR,
  PATCH_USER_COMMENT,
  POST_USER_COMMENT,
} from '_types/userTypes';

const initState = {
  targetUser: null,
  userArray: [],
};

const userReducer = (state = initState, action) => {
  // type마다 다른 것을 switch로 처리
  const { targetUser } = state;
  switch (action.type) {
    case GET_USER_DETAIL:
      return { ...state, targetUser: action.payload };
    case GET_USER__ARR:
      return { ...state, userArray: action.payload };
    case POST_USER_COMMENT:
      return {
        ...state,
        targetUser: { ...targetUser, comments: [...[...targetUser.comments], action.payload] },
      };
    case DELETE_USER_COMMENT:
      return {
        ...state,
        targetUser: {
          ...targetUser,
          comments: [...targetUser.comments].filter((comment) => comment.id !== action.payload),
        },
      };
    case PATCH_USER_COMMENT:
      const { id, editValue, updatedAt } = action.payload;
      return {
        ...state,
        targetUser: {
          ...targetUser,
          comments: [...targetUser.comments].map((comment) => {
            if (comment.id === id) {
              return { ...comment, content: editValue, updatedAt };
            }
            return comment;
          }),
        },
      };
    default:
      return state;
  }
};

export default userReducer;
