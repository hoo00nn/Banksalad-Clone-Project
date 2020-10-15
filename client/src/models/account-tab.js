import PubSub from '@lib/pubsub';
import store from '@store/store';

class AccountTabModel extends PubSub {
  constructor(rootElement) {
    super();
    this.$element = rootElement;
  }

  getState() {
    return store.getState();
  }
}

const accountTabModel = new AccountTabModel();

export default accountTabModel;
