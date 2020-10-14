const initState = () => {
  const store = {
    monthPicker: {
      month: new Date().getMonth() + 1,
      year: new Date().getFullYear(),
    },

    accountTab: {
      type: 'list',
    },

    accountOption: {
      type: 'income',
      price: 0,
      category: null,
      payment: null,
      contents: null,
    },
  };

  const getState = (type) => {
    const data = Object.assign({}, store[type]);
    return data;
  };

  const setState = (type, state) => {
    store[type] = state;
  };

  return { getState, setState };
};

export default initState;
