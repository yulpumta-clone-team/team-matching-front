export const isDevelopment = process.env.NODE_ENV === 'development';

const URL = isDevelopment ? 'http://localhost:8081/' : './';

export const OauthURL = {
  github: URL + 'oauth2/authorization/github',
  google: URL + 'oauth2/authorization/google',
};
