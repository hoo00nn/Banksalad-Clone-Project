const initState = () => {
  let store = {
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
      inComeCategory: ['월급', '용돈', '기타수입'],
      expenseCategory: ['식비', '생활', '쇼핑/뷰티', '교통', '의료/건강', '문화/여가', '미분류'],
      payment: null,
      contents: null,
    },
  };

  const getState = () => {
    const data = Object.assign({}, store);
    return data;
  };

  const setState = (state) => {
    store = state;
  };

  return { getState, setState };
};

export default initState;
