import { $ } from '@lib/common';

class AccountListEvent {
  constructor(target, model) {
    this.$eventTarget = target;
    this.model = model;
  }

  init() {
    this.$eventTarget.addEventListener('change', (e) => this.changeEvent(e));
    this.$eventTarget.addEventListener('click', (e) => this.clickEvent(e));
  }

  changeEvent(e) {
    if (e.target.closest('.income-checkbox')) this.onChangeIncomeCheckbok(e);
    if (e.target.closest('.expense-checkbox')) this.onChangeExpenseCheckbox(e);
  }

  clickEvent(e) {
    if (e.target.closest('.list')) this.onClickAccountList(e);
  }

  onClickAccountList(e) {
    const $list = e.target.closest('.list');
    const listData = JSON.parse($('input', $list).value);
    const { accountOption } = this.model.getState();

    accountOption.itemNumber = listData.no;
    accountOption.type = listData.type;
    accountOption.date = listData.date;
    accountOption.selectedPayment = listData.payment;
    accountOption.selectedCategory = listData.category;
    accountOption.price = listData.price;
    accountOption.contents = listData.content;

    this.model.changeAccountOption({ accountOption });
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
