import axios from 'axios';
import { LOGIN_USER, SIGNUP_USER } from '_types/authType';

export async function loginUser(dataTosubmit) {
  console.log('loginUser:', dataTosubmit);
  // const request = axios.post('/api/login', dataTosubmit).then((response) => response.data);
  const { data } = await axios.get('../_mockData/myData.json').then((response) => response.data);
  return {
    // request변수로 받은 data를 reducer로 넘겨주기
    type: LOGIN_USER,
    payload: data,
  };
}

export function registerUser(dataTosubmit) {
  const request = axios.post('/api/sign-up', dataTosubmit).then((response) => response.data);
  return {
    type: SIGNUP_USER,
    payload: request,
  };
}
