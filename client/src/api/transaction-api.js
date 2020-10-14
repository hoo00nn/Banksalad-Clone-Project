import config from '@lib/axios-config';
import axios from 'axios';

export const getTransactions = async (options) => {
  try {
    const { status, data } = await axios.get('/api/transaction', { ...config, params: options });

    if (status === 200) return data.data;
  } catch (err) {
    const { data } = err.response;
    alert(data.message);
  }
};
