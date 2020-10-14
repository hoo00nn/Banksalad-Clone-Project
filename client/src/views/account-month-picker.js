import getTemplate from '@templates/account-month-picker';
import AccountMonthPickerEvent from '@events/account-month-picker';
import AccountMonthPickerModel from '@models/account-month-picker';

class AccountMonthPickerView {
  constructor(rootElement) {
    this.model = new AccountMonthPickerModel();
    this.element = rootElement;
    this.onEvent();
  }

  render() {
    return getTemplate(this.model.getState());
  }

  onEvent() {
    new AccountMonthPickerEvent(this.element, this.model).init();
  }
}

export default AccountMonthPickerView;
