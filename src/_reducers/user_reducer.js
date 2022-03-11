import { GET_USER_DETAIL, GET_USER__ARR } from '_types/userTypes';

const initState = {
  myData: null,
  targetUser: null,
  userArray: [],
};

const userReducer = (state = initState, action) => {
  // type마다 다른 것을 switch로 처리
  switch (action.type) {
    case GET_USER_DETAIL:
      return { ...state, targetUser: action.payload };
    case GET_USER__ARR:
      return { ...state, userArray: action.payload };
    default:
      return state;
  }
};

export default userReducer;
