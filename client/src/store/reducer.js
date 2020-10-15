import store from '@store/store';
import types from '@store/types';

const reducer = (state, action) => {
  let newState;
  const { type, payload } = action;

  newState = Object.assign({}, state, payload);
  store.setState(newState);
};

export default reducer;
