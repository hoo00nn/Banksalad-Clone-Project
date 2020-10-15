import getTemplate from '@templates/account-tab';
import AccountTabEvent from '@events/account-tab';
import accountTabModel from '@models/account-tab';

class AccountTabView {
  constructor(rootElement) {
    this.model = accountTabModel;
    this.$element = rootElement;
    this.onEvent();
  }

  render() {
    return getTemplate();
  }

  onEvent() {
    new AccountTabEvent(this.$element, this.model).init();
  }
}

export default AccountTabView;
