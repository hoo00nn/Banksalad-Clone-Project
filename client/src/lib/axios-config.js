import { getToken } from '@lib/token';

export default {
  baseURL: process.env.API_HOST,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    authorization: getToken() || '',
  },
};
