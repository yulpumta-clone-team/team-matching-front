import authApi from 'api/auth';
import { USER_INFO } from 'constant';
import { setCookie } from 'utils/cookie';
import { LOGIN_USER, SIGNUP_USER } from '_types/authType';
import { catchError } from './global_action';

const { reqeustLogIn, requestSignUp } = authApi;

function triggerLogin(responseData) {
  setCookie(USER_INFO, responseData, { maxAge: 60 * 60, path: '/' });
  return {
    type: LOGIN_USER,
    payload: responseData,
  };
}

function triggerSignUp(responseData) {
  return {
    type: SIGNUP_USER,
    payload: responseData,
  };
}

export function handleLogin(dataTosubmit) {
  return async (dispatch) => {
    const { password, email } = dataTosubmit;
    await reqeustLogIn({ pwd: password, email })
      .then((response) => dispatch(triggerLogin(response)))
      .catch((error) => dispatch(catchError(error)));
  };
}

export async function handleSignUp(dataTosubmit) {
  return async (dispatch) => {
    const { name, nickname, email, password } = dataTosubmit;
    const test = {
      content: '12341234!@#abc',
      hope_session: 'string',
      img: 'string',
      job: 'string',
      portfolio: 'string',
      skills: ['string'],
      slogan: 'string',
      name: nickname,
      pwd: password,
      email,
    };
    return requestSignUp(test)
      .then((response) => dispatch(triggerSignUp(response)))
      .catch((error) => dispatch(catchError(error)));
  };
}
