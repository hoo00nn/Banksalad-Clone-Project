import '@styles/account-book.scss';
import { isToken } from '@lib/token';
import Login from '@views/login';
import AccountBook from '@views/account-book';

const main = {
  render: () => {
    if (!isToken()) {
      const loginPage = new Login();
      return loginPage.render();
    }
    const accountBook = new AccountBook();
    return accountBook.render();
  },
};

main.render();
