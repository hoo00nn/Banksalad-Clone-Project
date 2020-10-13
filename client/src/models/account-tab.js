import store from '@store/store';
import getTemplate from '@templates/account-tab';
import AccountTabEvent from '@events/account-tab';

class AccountTab {
  constructor(rootElement) {
    this.element = rootElement;
    this.state = store.accountTab;
  }

  getHTML() {
    this.onEvent();
    return getTemplate();
  }

  onEvent() {
    new AccountTabEvent(this.element, this.state).init();
  }
}

export default AccountTab;
