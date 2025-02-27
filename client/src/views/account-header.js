import getTemplate from '@templates/account-header';
import AccountHeaderEvent from '@events/account-header';
import accountHeaderModel from '../models/account-header';

class AccountHeaderView {
  constructor(rootElement) {
    this.model = accountHeaderModel;
    this.$element = rootElement;
    this.onEvent();
  }

  render() {
    return getTemplate(this.model.getState());
  }

  onEvent() {
    new AccountHeaderEvent(this.$element, this.model.getState()).init();
  }
}

export default AccountHeaderView;
