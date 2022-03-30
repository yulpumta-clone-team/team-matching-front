import { AUTH_USER, LOGIN_USER, SIGNUP_USER } from '_types/authType';

const initState = {
  myData: null,
};

const userReducer = (state = initState, action) => {
  // type마다 다른 것을 switch로 처리
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, myData: action.payload };
    case SIGNUP_USER:
      return { ...state, status: action.payload };
    case AUTH_USER:
      console.log(action.payload);
      return { ...state };
    default:
      return state;
  }
};

export default userReducer;
