import axios from 'axios';
import { UserValidation } from '@typings/userValidation';

export function fetchRegister(data: UserValidation) {
  return axios
    .post('/api/users', {
      data,
    })
    .then((response) => console.log(response));
}

export function fetchLogin(data: UserValidation) {
  return axios
    .post(
      '/api/users/login',
      { data },
      {
        withCredentials: true,
      },
    )
    .then((response) => response);
}
