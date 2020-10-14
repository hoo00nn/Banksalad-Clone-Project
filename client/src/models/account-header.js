import store from '@store/store';

class AccountHeaderModel {
  constructor(rootElement) {
    this.element = rootElement;
  }

  getState() {
    return store.getState();
  }
}

export default AccountHeaderModel;
