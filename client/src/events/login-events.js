import { loginAuth } from '@api/login-api';
import { $, getPath } from '@lib/common';

class LoginEvent {
  constructor(eventTarget) {
    this.$eventTarget = eventTarget;
  }

  init() {
    this.$eventTarget.addEventListener('click', (e) => this.clickEvent(e));
  }

  clickEvent(e) {
    if (e.target.closest('.signin')) this.onclickEventHandler(e);
  }

  async onclickEventHandler(e) {
    const username = $('#username', e.currentTarget).value;
    const password = $('#password', e.currentTarget).value;

    const response = await loginAuth({ username, password });
    if (!!response) window.location.href = '/';
    return false;
  }
}

export default LoginEvent;
