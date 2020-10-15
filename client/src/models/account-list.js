import PubSub from '@lib/pubsub';
import store from '@store/store';
import { getTransactions } from '@api/transaction-api';
import { setAccountType, setAccountList } from '@store/actions';
import { parseIntPrice, parseStringPrice } from '@lib/util';

const [INCOME, EXPENSE, ALL, NONE] = ['수입', '지출', 'ALL', 'NONE'];

class AccountListModel extends PubSub {
  constructor(rootElement) {
    super();
    this.$element = rootElement;
  }

  async initState() {
    const state = this.getState();
    const options = { date: `${state.monthPicker.year}-${state.monthPicker.month}` };
    const transactions = await getTransactions(options);
    const type = this.getAccountListType();
    const [incomeTotal, expenseTotal] = this.getTotalPrice(transactions);
    const groupByDate = {};
    const accountList = {};
    let filterItem = [];

    if (type === NONE) return [];
    if (type === INCOME) filterItem = transactions.filter((list) => list.type === INCOME);
    if (type === EXPENSE) filterItem = transactions.filter((list) => list.type === EXPENSE);
    if (type === ALL) filterItem = transactions;

    filterItem.forEach((data) => {
      const { date } = data;

      groupByDate[date] = groupByDate[date] || [];
      groupByDate[date].push(data);
    });

    accountList.date = Object.keys(groupByDate);
    accountList.item = groupByDate;
    accountList.incomeTotal = parseStringPrice(incomeTotal);
    accountList.expenseTotal = parseStringPrice(expenseTotal);
    accountList.totalPriceOfDay = this.getTotalPriceOfDay(groupByDate);

    setAccountList(state, { accountList });
  }

  getState() {
    return store.getState();
  }

  getAccountListType() {
    const { income, expense } = this.getState().accountType;

    if (income && expense) return ALL;
    if (income) return INCOME;
    if (expense) return EXPENSE;
    return NONE;
  }

  getTotalPrice(list) {
    let incomeTotal = 0;
    let expenseTotal = 0;

    list.forEach((item) => {
      if (item.type === INCOME) incomeTotal += parseIntPrice(item.price);
      if (item.type === EXPENSE) expenseTotal += parseIntPrice(item.price);
    });

    return [incomeTotal, expenseTotal];
  }

  getTotalPriceOfDay(item) {
    let totalPriceOfDay = {};

    Object.keys(item).forEach((date) => {
      let income = 0;
      let expense = 0;

      income = item[date].reduce((acc, cur) => {
        return acc + (cur.type === INCOME ? parseIntPrice(cur.price) : 0);
      }, 0);

      expense = item[date].reduce((acc, cur) => {
        return acc + (cur.type === EXPENSE ? parseIntPrice(cur.price) : 0);
      }, 0);

      income = parseStringPrice(income);
      expense = parseStringPrice(expense);

      totalPriceOfDay[date] = { income, expense };
    });

    return totalPriceOfDay;
  }

  changeCheckbox(newState) {
    const state = this.getState();
    setAccountType(state, newState);
    console.log(this.getState());
    this.publish('stateChange');
  }
}

const accountListModel = new AccountListModel();

export default accountListModel;
