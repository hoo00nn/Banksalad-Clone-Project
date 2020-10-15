import PubSub from '@lib/pubsub';
import store from '@store/store';

class AccountListTabModel extends PubSub {
  constructor(rootElement) {
    super();
    this.$element = rootElement;
  }

  getState() {
    return store.getState();
  }
}

const accountListTabModel = new AccountListTabModel();

export default accountListTabModel;
