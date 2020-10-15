import store from '@store/store';

class AccountHeaderModel {
  constructor(rootElement) {
    this.$element = rootElement;
  }

  getState() {
    return store.getState();
  }
}

const accountHeaderModel = new AccountHeaderModel();

export default accountHeaderModel;
