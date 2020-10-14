import getTemplate from '@templates/account-list';
import AccountListEvent from '@events/account-list';
import AccountListModel from '@models/account-list';

class AccountListView {
  constructor(rootElement) {
    this.model = new AccountListModel();
    this.element = rootElement;
    this.onEvent();
  }

  render() {
    return getTemplate(this.model.getState());
  }

  onEvent() {
    new AccountListEvent(this.element, this.model).init();
  }
}

export default AccountListView;
