import { handleCommentReducer } from 'utils/handleComment';
import {
  GET_TEAM_DETAIL,
  GET_TEAM__ARR,
  POST_TEAM_COMMENT,
  HANDLE_SECRET_TEAM_COMMENT,
  DELETE_TEAM_COMMENT,
  PATCH_TEAM_COMMENT,
} from '_types/teamTypes';

const initState = {
  targetTeam: null,
  teamArray: [],
};

const userReducer = (state = initState, action) => {
  const { targetTeam } = state;
  const handlecomment = handleCommentReducer(state.targetTeam);
  switch (action.type) {
    case GET_TEAM_DETAIL:
      return { ...state, targetTeam: action.payload };
    case GET_TEAM__ARR:
      return { ...state, teamArray: action.payload };
    case POST_TEAM_COMMENT:
      return {
        ...state,
        targetTeam: { ...targetTeam, comments: handlecomment.postComment(action.payload) },
      };
    case DELETE_TEAM_COMMENT:
      return {
        ...state,
        targetTeam: {
          ...targetTeam,
          comments: handlecomment.deleteComment(action.payload),
        },
      };
    case PATCH_TEAM_COMMENT:
      return {
        ...state,
        targetTeam: {
          ...targetTeam,
          comments: handlecomment.patchComment(action.payload),
        },
      };
    case HANDLE_SECRET_TEAM_COMMENT:
      return {
        ...state,
        targetTeam: {
          ...targetTeam,
          comments: handlecomment.handleSecret(action.payload),
        },
      };
    default:
      return state;
  }
};

export default userReducer;
