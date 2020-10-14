const getTemplate = (state) => {
  return `
  <div class="account-option">
    <div class="clear-content">내용 지우기</div>
    <div class="option-top">
      <span class="type">분류</span>
      <span class="income selected">수입</span>
      <span class="expense">지출</span>
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
        </select>
      </div>
      <div class="payment-type">
        <span>결제수단</span>
        <select name="결제수단" id="payment" required>
          <option value="" hidden>결제수단</option>
        </select>
      </div>
    </div>
    <div class="option-bottom">
      <div class="price">
        <span>금액</span>
        <input type="text" required />
      </div>
      <div class="content">
        <span>내용</span>
        <input type="text" required />
      </div>
    </div>
    <div class="option-button">
      <button>확인</button>
    </div>
  </div>
  `;
};

export default getTemplate;
