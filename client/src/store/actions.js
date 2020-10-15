import types from '@store/types';
import reducer from '@store/reducer';

export const setPayments = (state, data) => {
  const action = {
    type: types.SET_PAYMENTS,
    payload: data,
  };

  return reducer(state, action);
};

export const setTabType = (state, data) => {
  const action = {
    type: types.SET_TAB_TYPE,
    payload: data,
  };

  return reducer(state, action);
};

export const setMonth = (state, data) => {
  const action = {
    type: types.SET_MONTH,
    payload: data,
  };

  return reducer(state, action);
};

export const setType = (state, data) => {
  const action = {
    type: types.SET_ACCOUNT_TYPE,
    payload: data,
  };

  return reducer(state, action);
};

export const setAccountList = (state, data) => {
  const action = {
    type: types.SET_ACCOUNT_LIST,
    payload: data,
  };

  return reducer(state, action);
};

export const setAccountType = (state, data) => {
  const action = {
    type: types.SET_ACCOUNT_TYPE,
    payload: data,
  };

  return reducer(state, action);
};
