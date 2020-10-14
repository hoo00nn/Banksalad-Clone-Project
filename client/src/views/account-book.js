import AccountMonthPicker from '@models/account-month-picker';
import AccountTab from '@models/account-tab';
import AccountInputForm from '@models/account-input-form';
import AccountHeader from '@models/account-header';

class AccountBook {
  constructor() {
    this.element = document.createElement('div');
    this.element.className = 'account-book__container';
  }

  render() {
    document.body.appendChild(this.element);
    const header = new AccountHeader(this.element);
    const monthPicker = new AccountMonthPicker(this.element);
    const tab = new AccountTab(this.element);
    const inputForm = new AccountInputForm(this.element);
    this.element.innerHTML = `
    <div class="account-book__container">
      ${header.getHTML()}
      <section class="main">
        ${monthPicker.getHTML()}
        ${tab.getHTML()}
        ${inputForm.getHTML()}
      </section>
    </div>
    `;
  }
}

export default AccountBook;
