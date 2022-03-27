import instance from './core';

const authApi = {
  login(data) {
    return instance({
      url: '/user/login',
      method: 'post',
      data,
    });
  },
  signIn(data) {
    return instance({
      url: '/user/join',
      method: 'post',
      data,
    });
  },
  logOut() {
    return instance({
      url: '/user/logout',
    });
  },
  withdrawal() {
    return instance({
      url: '/user/withdrawal',
      method: 'delete',
    });
  },
};

export default authApi;
