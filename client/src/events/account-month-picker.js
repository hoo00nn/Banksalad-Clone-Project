import { $ } from '@lib/common';
import { nextMonthPicker, previousMonthPicker } from '@store/actions';

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
    const updateMonth = this.state.month === 1 ? 12 : this.state.month - 1;
    previousMonthPicker(this.state, { month: updateMonth });
    const month = $('.month', this.$eventTarget);
    month.innerText = updateMonth;
  }

  onclickNextButton(e) {
    const updateMonth = this.state.month === 12 ? 1 : this.state.month + 1;
    nextMonthPicker(this.state, { month: updateMonth });
    const month = $('.month', this.$eventTarget);
    month.innerText = updateMonth;
  }
}

export default AccountMonthPickerEvent;
