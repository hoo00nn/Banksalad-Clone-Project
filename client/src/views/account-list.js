import { $ } from '@lib/common';
import getTemplate from '@templates/account-list';
import AccountListEvent from '@events/account-list';
import accountListModel from '@models/account-list';
import accountMonthPickerModel from '@models/account-month-picker';
import accountListTabModel from '@models/account-list-tab';

class AccountListView {
  constructor(rootElement) {
    this.model = accountListModel;
    this.$element = rootElement;
    this.onEvent();

    accountMonthPickerModel.subscribe('stateChange', this.rerender.bind(this));
    accountListTabModel.subscribe('stateChange', this.rerender.bind(this));
    this.model.subscribe('stateChange', this.rerender.bind(this));
  }

  async render() {
    await this.model.initState();
    return getTemplate(this.model.getState());
  }

  async rerender() {
    await this.model.initState();
    const $element = $('.account-option');
    const $totalPirceNode = $('.total-price');
    const $accountListNode = $('.account-list');
    const html = getTemplate(this.model.getState());

    $totalPirceNode.remove();
    $accountListNode.remove();
    $element.insertAdjacentHTML('afterend', html);
  }

  onEvent() {
    new AccountListEvent(this.$element, this.model).init();
  }
}

export default AccountListView;
