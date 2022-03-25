/* eslint-disable no-shadow */
import axios from 'axios';
import { ROOT_URL } from 'utils/route';
import { LOGIN_USER, SIGNUP_USER } from '_types/authType';

// const headers = {
//   'Content-Type': 'application/json;charset=UTF-8',
//   'Access-Control-Allow-Origin': '*',
//   Accept: 'application/json',
// };

export async function loginUser(dataTosubmit) {
  console.log('loginUser:', dataTosubmit);
  const request = await axios
    .post(`http://localhost:8081/user/login`, dataTosubmit)
    .then((response) => response.data);
  console.log(request);
  const { data } = await axios.get('../_mockData/myData.json').then((response) => response.data);
  return {
    // request변수로 받은 data를 reducer로 넘겨주기
    type: LOGIN_USER,
    payload: null,
  };
}

export async function registerUser(dataTosubmit) {
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
  const response = await axios
    .post('http://localhost:8081/user/join', test)
    .then((response) => response.data)
    .catch((err) => console.log(err.response));
  return {
    type: SIGNUP_USER,
    payload: response,
  };
}
