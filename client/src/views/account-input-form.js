import getTemplate from '@templates/account-input-form';
import AccountInputFormEvent from '@events/account-input-form';
import AccountInputFormModel from '@models/account-input-form';

class AccountInputFormView {
  constructor(rootElement) {
    this.model = new AccountInputFormModel();
    this.element = rootElement;
    this.onEvent();
  }

  render() {
    return getTemplate(this.model.getState());
  }

  onEvent() {
    new AccountInputFormEvent(this.element, this.model).init();
  }
}

export default AccountInputFormView;
