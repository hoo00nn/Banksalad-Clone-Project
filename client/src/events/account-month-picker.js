import { $ } from '@lib/common';

class AccountMonthPickerEvent {
  constructor(target, state) {
    this.$eventTarget = target;
    this.state = state;
  }

  init() {
    this.$eventTarget.addEventListener('click', (e) => this.clickEvent(e));
  }

  clickEvent(e) {
    if (e.target.closest('.previous__button')) this.onclickPreviousButton(e);
    if (e.target.closest('.next__button')) this.onclickNextButton(e);
  }

  onclickPreviousButton(e) {
    this.state.month = this.state.month === 1 ? 12 : this.state.month - 1;
    const month = $('.month', this.$eventTarget);
    month.innerText = this.state.month;
  }

  onclickNextButton(e) {
    this.state.month = this.state.month === 12 ? 1 : this.state.month + 1;
    const month = $('.month', this.$eventTarget);
    month.innerText = this.state.month;
  }
}

export default AccountMonthPickerEvent;
