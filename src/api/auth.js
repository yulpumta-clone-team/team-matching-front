import instance from './core';

const authApi = {
  reqeustLogIn(data) {
    return instance({
      url: '/user/login',
      method: 'post',
      data,
    });
  },
  requestSignIn(data) {
    return instance({
      url: '/user/join',
      method: 'post',
      data,
    });
  },
  requestLogOut() {
    return instance({
      url: '/user/logout',
    });
  },
  requestWithdrawal() {
    return instance({
      url: '/user/withdrawal',
      method: 'delete',
    });
  },
};

export default authApi;
