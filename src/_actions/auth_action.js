import authApi from 'api/auth';
import { setCookie } from 'utils/cookie';
import { LOGIN_USER, SIGNUP_USER } from '_types/authType';

const { reqeustLogIn, requestSignIn } = authApi;

export async function loginUser(dataTosubmit) {
  const { password, email } = dataTosubmit;
  const responseData = await reqeustLogIn({ pwd: password, email });
  setCookie('userInfo', responseData, { maxAge: 60 * 60, path: '/' });
  // const response = await axios
  //   .post(`http://localhost:8081/user/login`, { pwd: password, email })
  //   .then((response) => response.data)
  //   .catch((err) => console.log(err.response));
  // const { data } = await axios.get('../_mockData/myData.json').then((response) => response.data);
  return {
    // request변수로 받은 data를 reducer로 넘겨주기
    type: LOGIN_USER,
    payload: responseData,
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
  const responseData = await requestSignIn(test);
  console.log(responseData);
  // const response = await axios
  //   .post('http://localhost:8081/user/join', test)
  //   .then((response) => response.data)
  //   .catch((err) => console.log(err.response));
  return {
    type: SIGNUP_USER,
    payload: responseData,
  };
}
