import config from '@lib/axios-config';
import { setToken } from '@lib/token';
import axios from 'axios';

export const loginAuth = async (loginInfo) => {
  try {
    const { status, data } = await axios.post('/api/login', loginInfo, config);

    if (status === 200) {
      setToken(data.JWT);
      return data;
    }
  } catch (err) {
    const { data } = err.response;
    alert(data.message);
  }
};
