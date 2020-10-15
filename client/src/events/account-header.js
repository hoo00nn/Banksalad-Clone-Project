import { removeToken } from '@lib/token';

class AccountHeaderEvent {
  constructor(target, state) {
    this.$eventTarget = target;
    this.state = state;
  }

  init() {
    this.$eventTarget.addEventListener('click', (e) => this.clickEventHandler(e));
  }

  clickEventHandler(e) {
    if (e.target.closest('#logout-button')) this.onClickLogout(e);
  }

  onClickLogout(e) {
    removeToken();
    window.location.href = '/';
  }
}

export default AccountHeaderEvent;
