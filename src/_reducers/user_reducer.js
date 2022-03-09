import {
  AUTH_USER,
  GET_USER_DETAIL,
  GET_USER__ARR,
  LOGIN_USER,
  SIGNUP_USER,
} from '_types/userTypes';

const initState = {
  myData: null,
  userPostData: null,
  userArray: [],
};

const userReducer = (state = initState, action) => {
  // type마다 다른 것을 switch로 처리
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, myData: action.payload };
    case SIGNUP_USER:
      console.log(action.payload);
      return { ...state };
    case AUTH_USER:
      console.log(action.payload);
      return { ...state };
    case GET_USER_DETAIL:
      return { ...state, userPostData: action.payload };
    case GET_USER__ARR:
      return { ...state, userArray: action.payload };
    default:
      return state;
  }
};

export default userReducer;
