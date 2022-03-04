import axios from 'axios';
import { GET_USER_DETAIL, GET_USER__ARR, LOGIN_USER, SIGNUP_USER } from '_types/userTypes';

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

export async function getUserDetail(dataTosubmit) {
  console.log('UserDetail ID: ', dataTosubmit);
  const { data } = await axios.get('../_mockData/user.json').then((response) => response.data);
  return {
    // request변수로 받은 data를 reducer로 넘겨주기
    type: GET_USER_DETAIL,
    payload: data,
  };
}

export async function getUserArr(count) {
  console.log('UserBoard page count: ', count);
  const { data } = await axios.get('../_mockData/users.json').then((response) => response.data);
  return {
    type: GET_USER__ARR,
    payload: data,
  };
}
