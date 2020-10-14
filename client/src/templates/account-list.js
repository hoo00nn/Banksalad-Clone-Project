const [INCOME, EXPENSE] = ['수입', '지출'];

const getTemplate = (state) => {
  const getTotalPrice = () => {
    return `
      <div class="total-price">
        <div class="income-price">
          <input type="checkbox" />
          <span>수입</span>
          <span id="price">${state.accountList.totalIncome}원</span>
        </div>
        <div class="expense-price">
          <input type="checkbox" />
          <span>지출</span>
          <span id="price">${state.accountList.totalExpense}원</span>
        </div>
      </div>
    `;
  };

  const getAccountList = () => {
    const list = state.accountList;

    return list.date.reduce((acc, cur) => {
      const dayOfWeekList = list.item[cur].reduce((acc, cur) => {
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

  getAccountList();

  return `
    ${getTotalPrice()}
    <div class="account-list">
    ${getAccountList()}
    </div>
  `;
};

export default getTemplate;
