import { AUTH_USER, LOGIN_USER, SIGNUP_USER } from '_types/authType';

const initState = {
  // myData: {
  //   user_id: 927191821029312,
  //   nickname: '코넥트',
  //   img: 'https://user-images.githubusercontent.com/71386219/157435570-a48382a8-63e5-4d25-91f4-e506289424b5.png',
  // },
  myData: null,
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
    default:
      return state;
  }
};

export default userReducer;
