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
  return `
    ${getTotalPrice()}
  `;
};

export default getTemplate;
