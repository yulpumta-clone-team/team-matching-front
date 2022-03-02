import axios from 'axios';

import { mockUser, mockUsers } from 'data/mockUser';
import { GET_USER_DETAIL, GET_USER__ARR, LOGIN_USER, SIGNUP_USER } from '_types/userTypes';

const fakeFetch = () =>
  new Promise((resolve) => {
    setTimeout(resolve, 100);
  });

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

export function getUserDetail(dataTosubmit) {
  // const request = axios.post('../data/team.json', dataTosubmit).then((response) => response.data);
  // console.log(request);
  const request = mockUser;
  return {
    // request변수로 받은 data를 reducer로 넘겨주기
    type: GET_USER_DETAIL,
    payload: request,
  };
}

export async function getUserArr(count) {
  // const request = axios.post('../data/team.json', dataTosubmit).then((response) => response.data);
  // console.log(request);
  // let request = [];
  await fakeFetch();
  return {
    type: GET_USER__ARR,
    payload: mockUsers,
  };
}
