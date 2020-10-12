export default {
  baseURL: 'API_HOST',
  headers: {
    authorization: localStorage.getItem('authorization') || '',
  },
};
