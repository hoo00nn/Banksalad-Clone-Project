import store from '@store/store';
import getTemplate from '@templates/account-input-form';
import AccountInputFormEvent from '@events/account-input-form';

class AccountInputForm {
  constructor(rootElement) {
    this.element = rootElement;
    this.state = store.getState('monthPicker');
  }

  getHTML() {
    this.onEvent();
    return getTemplate(this.state);
  }

  onEvent() {
    new AccountInputFormEvent(this.element, this.state).init();
  }
}

export default AccountInputForm;
