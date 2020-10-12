import LOGIN_VIEW from '@templates/login';
import '@styles/pages/login.scss';
import LoginEvent from '@events/login-events';
import { $ } from '@lib/common';

class Login {
  constructor() {
    this.$eventTarget = $('body');
    this.events = new LoginEvent(this.$eventTarget);
    this.events.init();
  }

  render() {
    document.body.innerHTML = LOGIN_VIEW;
  }
}

export default Login;
