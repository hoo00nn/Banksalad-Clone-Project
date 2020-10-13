export default `
  <div class="account-book__container">
    <div class="header">
       <div class="header-title">
        <h1>BoostBank</h1>
      </div>
      <div class="header-option">
        <span>결제 수단 관리</span>
        <span>로그아웃</span>
      </div>
    </div>
    <section class="main">
      <div class="month-picker">
        <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTUuNzUzIDU1Ljc1MyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTUuNzUzIDU1Ljc1MzsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggZD0iTTEyLjc0NSwyMy45MTVjMC4yODMtMC4yODIsMC41OS0wLjUyLDAuOTEzLTAuNzI3TDM1LjI2NiwxLjU4MWMyLjEwOC0yLjEwNyw1LjUyOC0yLjEwOCw3LjYzNywwLjAwMQ0KCQljMi4xMDksMi4xMDgsMi4xMDksNS41MjcsMCw3LjYzN0wyNC4yOTQsMjcuODI4bDE4LjcwNSwxOC43MDZjMi4xMDksMi4xMDgsMi4xMDksNS41MjYsMCw3LjYzNw0KCQljLTEuMDU1LDEuMDU2LTIuNDM4LDEuNTgyLTMuODE4LDEuNTgycy0yLjc2NC0wLjUyNi0zLjgxOC0xLjU4MkwxMy42NTgsMzIuNDY0Yy0wLjMyMy0wLjIwNy0wLjYzMi0wLjQ0NS0wLjkxMy0wLjcyNw0KCQljLTEuMDc4LTEuMDc4LTEuNTk4LTIuNDk4LTEuNTcyLTMuOTExQzExLjE0NywyNi40MTMsMTEuNjY3LDI0Ljk5NCwxMi43NDUsMjMuOTE1eiIvPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=" />
        <span class="month">9월</span>
        <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTUuNzUyIDU1Ljc1MiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTUuNzUyIDU1Ljc1MjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggZD0iTTQzLjAwNiwyMy45MTZjLTAuMjgtMC4yODItMC41OS0wLjUyLTAuOTEyLTAuNzI3TDIwLjQ4NSwxLjU4MWMtMi4xMDktMi4xMDctNS41MjctMi4xMDgtNy42MzcsMC4wMDENCgkJYy0yLjEwOSwyLjEwOC0yLjEwOSw1LjUyNywwLDcuNjM3bDE4LjYxMSwxOC42MDlMMTIuNzU0LDQ2LjUzNWMtMi4xMSwyLjEwNy0yLjExLDUuNTI3LDAsNy42MzdjMS4wNTUsMS4wNTMsMi40MzYsMS41OCwzLjgxNywxLjU4DQoJCXMyLjc2NS0wLjUyNywzLjgxNy0xLjU4MmwyMS43MDYtMjEuNzAzYzAuMzIyLTAuMjA3LDAuNjMxLTAuNDQ0LDAuOTEyLTAuNzI3YzEuMDgtMS4wOCwxLjU5OC0yLjQ5OCwxLjU3NC0zLjkxMg0KCQlDNDQuNjA1LDI2LjQxMyw0NC4wODYsMjQuOTkzLDQzLjAwNiwyMy45MTZ6Ii8+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==" />
      </div>
      <div class="option-tab">
        <div class="option">내역</div>
        <div class="option">달력</div>
        <div class="option">통계</div>
      </div>
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
    </section>
  </div>
`;
