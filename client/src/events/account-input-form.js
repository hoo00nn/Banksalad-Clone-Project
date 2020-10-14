import { $ } from '@lib/common';

const [INCOME, EXPENSE] = ['income', 'expense'];

class AccountInputFormEvent {
  constructor(target, model) {
    this.$eventTarget = target;
    this.model = model;
  }

  init() {
    this.$eventTarget.addEventListener('click', (e) => this.clickEvent(e));
  }

  clickEvent(e) {
    if (e.target.closest('.income')) this.onclickIncomeButton(e);
    if (e.target.closest('.expense')) this.onclickExpenseButton(e);
  }

  onclickIncomeButton(e) {
    const { accountOption } = this.model.getState();
    accountOption.type = INCOME;
    this.model.changeType(accountOption);
  }

  onclickExpenseButton(e) {
    const { accountOption } = this.model.getState();
    accountOption.type = EXPENSE;
    this.model.changeType(accountOption);
  }
}

export default AccountInputFormEvent;
