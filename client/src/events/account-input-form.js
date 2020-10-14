import { $ } from '@lib/common';

class AccountInputFormEvent {
  constructor(target, state) {
    this.$eventTarget = target;
    this.state = state;
  }

  init() {
    this.$eventTarget.addEventListener('click', (e) => this.clickEvent(e));
  }

  clickEvent(e) {}
}

export default AccountInputFormEvent;
