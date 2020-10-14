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

export const nextMonthPicker = (state, data) => {
  const action = {
    type: types.NEXT_MONTH_PICKER,
    payload: data,
  };

  return reducer(state, action);
};

export const previousMonthPicker = (state, data) => {
  const action = {
    type: types.PREVIOUS_MONTH_PICKER,
    payload: data,
  };

  return reducer(state, action);
};
