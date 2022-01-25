import { AUTH_USER, LOGIN_USER, SIGNUP_USER } from '_types/userTypes';

const initState = {
  userName: '',
};

const userReducer = (state = initState, action) => {
  // type마다 다른 것을 switch로 처리
  switch (action.type) {
    case LOGIN_USER:
      return { ...state };
    case SIGNUP_USER:
      return { ...state };
    case AUTH_USER:
      console.log(action.payload);
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default userReducer;
