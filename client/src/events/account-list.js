class AccountListEvent {
  constructor(target, model) {
    this.$eventTarget = target;
    this.model = model;
  }

  init() {
    this.$eventTarget.addEventListener('change', (e) => this.clickEvent(e));
  }

  clickEvent(e) {
    if (e.target.closest('.income-checkbox')) this.onChangeIncomeCheckbok(e);
    if (e.target.closest('.expense-checkbox')) this.onChangeExpenseCheckbox(e);
  }

  onChangeIncomeCheckbok(e) {
    const target = e.target.closest('.income-checkbox');
    const { accountType } = this.model.getState();
    accountType.income = target.checked;

    this.model.changeCheckbox({ accountType });
  }

  onChangeExpenseCheckbox(e) {
    const target = e.target.closest('.expense-checkbox');
    const { accountType } = this.model.getState();
    accountType.expense = target.checked;

    this.model.changeCheckbox({ accountType });
  }
}

export default AccountListEvent;
