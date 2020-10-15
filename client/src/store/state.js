import { getDate } from '@lib/util';

const initState = () => {
  let store = {
    monthPicker: {
      month: (new Date().getMonth() + 1).toString(),
      year: new Date().getFullYear().toString(),
    },

    accountTab: {
      type: 'list',
    },

    accountOption: {
      type: '수입',
      date: getDate(),
      price: 0,
      inComeCategory: ['월급', '용돈', '기타수입'],
      expenseCategory: ['식비', '생활', '쇼핑/뷰티', '교통', '의료/건강', '문화/여가', '미분류'],
      payment: null,
      contents: null,
      selectedPayment: null,
      selectedCategory: null,
      itemNumber: null,
      clicked: false,
    },

    accountType: {
      income: true,
      expense: true,
    },

    accountList: {
      date: [],
      item: [],
      expenseTotal: '',
      incomeTotal: '',
    },
  };

  const getState = () => {
    const data = JSON.parse(JSON.stringify(store));
    return data;
  };

  const setState = (state) => {
    store = state;
  };

  return { getState, setState };
};

export default initState;
