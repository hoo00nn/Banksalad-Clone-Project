import AccountTabView from '@views/account-tab';
import AccountMonthPickerView from '@views/account-month-picker';
import AccountHeaderView from '@views/account-header';
import AccountInputFormView from '@views/account-input-form';
import AccountListView from '@views/account-list';

class AccountBook {
  constructor() {
    this.$element = document.createElement('div');
    this.$element.className = 'account-book__container';

    this.header = new AccountHeaderView(this.$element);
    this.monthPicker = new AccountMonthPickerView(this.$element);
    this.tab = new AccountTabView(this.$element);
    this.inputForm = new AccountInputFormView(this.$element);
    this.list = new AccountListView(this.$element);
  }

  async render() {
    document.body.appendChild(this.$element);
    this.$element.innerHTML = `
    <div class="account-book__container">
      ${this.header.render()}
      <section class="main">
        ${this.monthPicker.render()}
        ${this.tab.render()}
        ${await this.inputForm.render()}
        ${await this.list.render()}
      </section>
    </div>
    `;
  }
}

export default AccountBook;
