import PubSub from '@lib/pubsub';
import store from '@store/store';

class AccountTabModel extends PubSub {
  constructor(rootElement) {
    super();
    this.element = rootElement;
  }

  getState() {
    return store.getState();
  }
}

export default AccountTabModel;
