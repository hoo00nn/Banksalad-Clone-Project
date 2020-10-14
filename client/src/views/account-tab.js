import getTemplate from '@templates/account-tab';
import AccountTabEvent from '@events/account-tab';
import AccountTabModel from '@models/account-tab';

class AccountTabView {
  constructor(rootElement) {
    this.model = new AccountTabModel();
    this.element = rootElement;
    this.onEvent();
  }

  render() {
    return getTemplate();
  }

  onEvent() {
    new AccountTabEvent(this.element, this.model.getState()).init();
  }
}

export default AccountTabView;