import store from '@store/store';
import getTemplate from '@templates/account-header';
import AccountHeaderEvent from '@events/account-header';

class AccountHeader {
  constructor(rootElement) {
    this.element = rootElement;
    this.state = store.getState('monthPicker');
  }

  getHTML() {
    this.onEvent();
    return getTemplate(this.state);
  }

  onEvent() {
    new AccountHeaderEvent(this.element, this.state).init();
  }
}

export default AccountHeader;
