import PubSub from '@lib/pubsub';
import store from '@store/store';
import { getTransactions } from '@api/transaction-api';
import { setAccountList } from '@store/actions';

const [INCOME, EXPENSE] = ['수입', '지출'];

class AccountListModel extends PubSub {
  constructor(rootElement) {
    super();
    this.element = rootElement;
  }

  async initState() {
    const state = this.getState();
    const options = { date: `${state.monthPicker.year}-${state.monthPicker.month}` };
    const transactions = await getTransactions(options);
    const groupByDate = {};
    const accountList = {};
    let totalIncome = 0;
    let totalExpense = 0;

    transactions.forEach((data) => {
      const date = data.date;
      groupByDate[date] = groupByDate[date] || [];
      groupByDate[date].push(data);
      if (data.type === INCOME) totalIncome += this.parseToInt(data.price);
      if (data.type === EXPENSE) totalExpense += this.parseToInt(data.price);
    });

    accountList.date = Object.keys(groupByDate);
    accountList.item = groupByDate;
    accountList.totalIncome = this.parseToString(totalIncome);
    accountList.totalExpense = this.parseToString(totalExpense);

    setAccountList(state, { accountList });
  }

  parseToInt(price) {
    return parseInt(price.split(',').join(''));
  }

  parseToString(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  getState() {
    return store.getState();
  }
}

export default AccountListModel;
