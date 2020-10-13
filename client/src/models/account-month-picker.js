import store from '@store/store';
import getTemplate from '@templates/account-month-picker';
import AccountMonthPickerEvent from '@events/account-month-picker';

class AccountMonthPicker {
  constructor(rootElement) {
    this.element = rootElement;
    this.state = store.monthPicker;
  }

  getHTML() {
    this.onEvent();
    return getTemplate(this.state);
  }

  onEvent() {
    new AccountMonthPickerEvent(this.element, this.state).init();
  }
}

export default AccountMonthPicker;
