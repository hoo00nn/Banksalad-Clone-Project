import config from '@lib/axios-config';
import axios from 'axios';

export const getPayments = async () => {
  try {
    const { status, data } = await axios.get('/api/payment', config);

    if (status === 200) return data;
  } catch (err) {
    const { data } = err.response;
    alert(data.message);
  }
};
