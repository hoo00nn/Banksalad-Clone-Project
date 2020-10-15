const [INCOME, EXPENSE] = ['income', 'expense'];

const getTemplate = ({ accountOption }) => {
  const getCategorys = () => {
    if (accountOption.type === INCOME) {
      return accountOption.inComeCategory.reduce((acc, cur) => {
        return acc + `<option value=${cur}>${cur}</option>`;
      }, '');
    }
    if (accountOption.type === EXPENSE) {
      return accountOption.expenseCategory.reduce((acc, cur) => {
        return acc + `<option value=${cur}>${cur}</option>`;
      }, '');
    }
  };

  const getPayments = () => {
    if (!!accountOption.payment) {
      return accountOption.payment.reduce((acc, cur) => {
        return acc + `<option value=${cur}>${cur}</option>`;
      });
    }
  };

  return `
  <form class="account-option">
    <input type="reset" class="clear-content" value="내용 지우기">
    <div class="option-top">
      <span class="type">분류</span>
      <span class="income ${accountOption.type === INCOME ? 'selected' : ''}">수입</span>
      <span class="expense ${accountOption.type === EXPENSE ? 'selected' : ''}">지출</span>
    </div>
    <div class="option-middle">
      <div class="date">
        <span>날짜</span>
        <input type="date" required />
      </div>
      <div class="category">
        <span>카테고리</span>
        <select name="카테고리" id="category" required>
          <option value="" hidden>카테고리</option>
          ${getCategorys()}
        </select>
      </div>
      <div class="payment-type">
        <span>결제수단</span>
        <select name="결제수단" id="payment" required>
          <option value="" hidden>결제수단</option>
          ${getPayments()}
        </select>
      </div>
    </div>
    <div class="option-bottom">
      <div class="price">
        <span>금액</span>
        <input type="text" name="price" id="input-price" equired />
      </div>
      <div class="content">
        <span>내용</span>
        <input type="text" name="content" id="input-content" required />
      </div>
    </div>
    <div class="option-button">
      <button>확인</button>
    </div>
  </form>
  `;
};

export default getTemplate;
