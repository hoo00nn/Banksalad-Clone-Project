import AccountMonthPicker from '@models/account-month-picker';
import AccountTab from '@models/account-tab';

class Test {
  constructor() {
    this.element = document.createElement('div');
    this.element.className = 'account-book__container';
  }

  render() {
    document.body.appendChild(this.element);
    const monthPicker = new AccountMonthPicker(this.element);
    const tab = new AccountTab(this.element);
    this.element.innerHTML = `
    <div class="account-book__container">
      <section class="main">
        ${monthPicker.getHTML()}
        ${tab.getHTML()}
      </section>
    </div>
    `;
  }
}

export default Test;
