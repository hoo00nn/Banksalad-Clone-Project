import { $ } from '@lib/common';
import { parseStringPrice, parseIntPrice } from '@lib/util';

const [INCOME, EXPENSE] = ['수입', '지출'];

class AccountInputFormEvent {
  constructor(target, model) {
    this.$eventTarget = target;
    this.model = model;
  }

  init() {
    this.$eventTarget.addEventListener('click', (e) => this.clickEvent(e));
    this.$eventTarget.addEventListener('keyup', (e) => this.keyboardEvent(e));
  }

  clickEvent(e) {
    if (e.target.closest('.income')) this.onclickIncomeButton(e);
    if (e.target.closest('.expense')) this.onclickExpenseButton(e);
  }

  keyboardEvent(e) {
    if (e.target.closest('#input-price')) this.onKeyUpInputPrice(e);
  }

  onKeyUpInputPrice(e) {
    const target = e.target.closest('#input-price');
    if (target.value === '') return (target.value = '');
    return (target.value = parseStringPrice(parseIntPrice(target.value)));
  }

  onclickIncomeButton(e) {
    const { accountOption } = this.model.getState();
    accountOption.type = INCOME;
    this.model.changeType({ accountOption });
  }

  onclickExpenseButton(e) {
    const { accountOption } = this.model.getState();
    accountOption.type = EXPENSE;
    this.model.changeType({ accountOption });
  }
}

export default AccountInputFormEvent;
