const initState = {
  monthPicker: {
    month: new Date().getMonth() + 1,
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

export default initState;
