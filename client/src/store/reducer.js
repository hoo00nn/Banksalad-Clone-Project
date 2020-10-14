import store from '@store/store';
import types from '@store/types';

const reducer = (state, action) => {
  let newState;
  const { type, payload } = action;

  switch (type) {
    case types.SET_INCOME_CATEGORY:

    case types.SET_EXPENSE_CATEGORY:

    case types.SET_PAYMENTS:

    case types.SET_TAB_TYPE:
      newState = Object.assign({}, state, payload);
      store.setState('accountTab', newState);

    case types.PREVIOUS_MONTH_PICKER:
      newState = Object.assign({}, state, payload);
      store.setState('monthPicker', newState);

    case types.NEXT_MONTH_PICKER:
      newState = Object.assign({}, state, payload);
      store.setState('monthPicker', newState);

    case types.CHANGE_MONTH:
      newState = Object.assign({}, state, payload);
      store.setState(newState);
  }
};

export default reducer;
