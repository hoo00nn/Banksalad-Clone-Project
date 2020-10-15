import { $ } from '@lib/common';
import getTemplate from '@templates/account-month-picker';
import AccountMonthPickerEvent from '@events/account-month-picker';
import accountMonthPickerModel from '@models/account-month-picker';

class AccountMonthPickerView {
  constructor(rootElement) {
    this.model = accountMonthPickerModel;
    this.$element = rootElement;
    this.onEvent();

    this.model.subscribe('stateChange', this.rerender.bind(this));
  }

  render() {
    return getTemplate(this.model.getState());
  }

  rerender() {
    const $element = $('.main');
    const $monthPickerNode = $('.month-picker');
    const html = getTemplate(this.model.getState());

    $monthPickerNode.remove();
    $element.insertAdjacentHTML('afterbegin', html);
  }

  onEvent() {
    new AccountMonthPickerEvent(this.$element, this.model).init();
  }
}

export default AccountMonthPickerView;
