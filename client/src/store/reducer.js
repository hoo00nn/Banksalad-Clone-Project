import { store } from '@store/store';
import { types } from '.@store/types';

const reducer = (action) => {
  const { type, payload } = action;

  switch (type) {
    case types.SET_INCOME_CATEGORY:
    case types.SET_EXPENSE_CATEGORY:
    case types.SET_PAYMENTS:
  }
};
