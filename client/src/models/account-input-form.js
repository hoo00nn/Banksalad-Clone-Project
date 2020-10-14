import PubSub from '@lib/pubsub';
import store from '@store/store';
import { setType } from '@store/actions';

class AccountInputFormModel extends PubSub {
  constructor(rootElement) {
    super();
    this.element = rootElement;
  }

  changeType(newState) {
    const state = this.getState();
    setType(state, newState);
    this.publish('stateChange', this.getState());
  }

  getState() {
    return store.getState();
  }
}

export default AccountInputFormModel;
