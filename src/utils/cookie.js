import { AUTH_KEY } from 'constant';
import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export const setCookie = (name, value, option) => cookies.set(name, value, { ...option });

export const getCookie = (name) => cookies.get(name);

export const getAuthCookie = () => cookies.get(AUTH_KEY);
