const [INCOME, EXPENSE, ALL, NONE] = ['수입', '지출', 'ALL', 'NONE'];

const getTemplate = (state) => {
  return `
    ${getTotalPrice(state)}
    <div class="account-list">
    ${getAccountList(state)}
    </div>
  `;
};

const getTotalPrice = (state) => {
  return `
    <div class="total-price">
      <div class="income-price">
        <input type="checkbox" checked=${state.accountType.income === true ? 'checked' : ''}/>
        <span>수입</span>
        <span id="price">${state.accountList.totalIncome}원</span>
      </div>
      <div class="expense-price">
        <input type="checkbox" checked=${state.accountType.expense === true ? 'checked' : ''}/>
        <span>지출</span>
        <span id="price">${state.accountList.totalExpense}원</span>
      </div>
    </div>
  `;
};

const getAccountList = (state) => {
  const list = state.accountList;

  return list.date.reduce((acc, cur) => {
    const dayOfWeekList = getDayOfWeekList(state, cur);

    return (
      acc +
      `
        <div class="day-of-week">
          <div class="header">
            <span class="date">${cur}</span>
          </div>
          <ul class="list-container">
            ${dayOfWeekList}
          </ul>
        </div>
      `
    );
  }, '');
};

const getDayOfWeekList = (state, date) => {
  let list = state.accountList;

  return list.item[date].reduce((acc, cur) => {
    const type = cur.type === INCOME ? 'income' : 'expense';
    const operator = cur.type === INCOME ? '+' : '-';

    return (
      acc +
      `
        <li class="list">
          <span class="category ${type}">${cur.category}</span>
          <span class="content">테스트</span>
          <span class="payment">${cur.payment}</span>
          <span class="price ${type}">${operator}${cur.price}원</span>
        </li>
    `
    );
  }, '');
};

export default getTemplate;
