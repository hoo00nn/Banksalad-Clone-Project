import getTemplate from '@templates/account-list-tab';
import AccountListTabEvent from '@events/account-list-tab';
import accountListTabModel from '@models/account-list-tab';

class AccountListTabView {
  constructor(rootElement) {
    this.model = accountListTabModel;
    this.$element = rootElement;
    this.onEvent();
  }

  render() {
    return getTemplate();
  }

  onEvent() {
    new AccountListTabEvent(this.$element, this.model.getState()).init();
  }
}

export default AccountListTabView;
