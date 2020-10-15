import { getDayOfWeek } from '@lib/util';

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
        <input type="checkbox" class="income-checkbox" ${
          state.accountType.income === true ? 'checked' : ''
        }/>
        <span>수입</span>
        <span id="price">${state.accountList.incomeTotal}원</span>
      </div>
      <div class="expense-price">
        <input type="checkbox" class="expense-checkbox" ${
          state.accountType.expense === true ? 'checked' : ''
        }/>
        <span>지출</span>
        <span id="price">${state.accountList.expenseTotal}원</span>
      </div>
    </div>
  `;
};

const getAccountList = (state) => {
  const list = state.accountList;

  return list.date.reduce((acc, cur) => {
    const dayOfWeekList = getDayOfWeekList(state, cur);
    const priceOfDay = list.totalPriceOfDay[cur];
    const dayOfWeek = getDayOfWeek(cur);
    const formatDate = cur.split('-').slice(1);
    const month = parseInt(formatDate[0]);
    const day = parseInt(formatDate[1]);

    return (
      acc +
      `
        <div class="day-of-week">
          <div class="header">
            <div class="date">
            <span>${month}월 ${day}일</span>
            <span class='day'>${dayOfWeek}</span>
            </div>
            <div class="price-of-day">
              <span class="income">+${priceOfDay.income}원</span>
              <span class="expense">-${priceOfDay.expense}원</span>
            </div>
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
          <input type="hidden" value='${JSON.stringify(cur)}'/>
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
