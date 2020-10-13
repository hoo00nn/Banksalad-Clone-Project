import { types } from '@store/types';
import { reducer } from '@store/reducer';

const action = {
  setIncomeCategory: (data) => {
    const action = {
      type: types.SET_INCOME_CATEGORY,
      payload: data,
    };

    return reducer(action);
  },

  setExpenseCategory: (data) => {
    const action = {
      type: types.SET_EXPENSE_CATEGORY,
      payload: data,
    };

    return reducer(action);
  },

  setPayments: (data) => {
    const action = {
      type: types.SET_PAYMENTS,
      payload: data,
    };

    return reducer(action);
  },
};

export default action;
