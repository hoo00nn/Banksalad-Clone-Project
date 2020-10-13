import ACCOUNT_VIEW from '@templates/account-book';

class AccountBook {
  constructor() {}

  render() {
    document.body.innerHTML = ACCOUNT_VIEW;
  }
}

export default AccountBook;
