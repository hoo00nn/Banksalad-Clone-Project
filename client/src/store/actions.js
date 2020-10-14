import types from '@store/types';
import reducer from '@store/reducer';

export const setIncomeCategory = (state, data) => {
  const action = {
    type: types.SET_INCOME_CATEGORY,
    payload: data,
  };

  return reducer(state, action);
};

export const setExpenseCategory = (state, data) => {
  const action = {
    type: types.SET_EXPENSE_CATEGORY,
    payload: data,
  };

  return reducer(state, action);
};

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
