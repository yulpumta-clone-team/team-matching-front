import axios from 'axios';
import { AUTH_USER, LOGIN_USER, SIGNUP_USER } from '_types/userTypes';

export function loginUser(dataTosubmit) {
  const request = axios.post('/api/login', dataTosubmit).then((response) => response.data);
  return {
    // request변수로 받은 data를 reducer로 넘겨주기
    type: LOGIN_USER,
    payload: request,
  };
}

export function registerUser(dataTosubmit) {
  const request = axios.post('/api/sign-up', dataTosubmit).then((response) => response.data);
  return {
    type: SIGNUP_USER,
    payload: request,
  };
}
