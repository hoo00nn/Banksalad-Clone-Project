import PubSub from '@lib/pubsub';
import store from '@store/store';
import { setTabType } from '@store/actions';

class AccountTabModel extends PubSub {
  constructor(rootElement) {
    super();
    this.$element = rootElement;
  }

  getState() {
    return store.getState();
  }

  changeTabType(newState) {
    const state = this.getState();
    setTabType(state, newState);
    console.log(this.getState());
    this.publish('stateChange');
  }
}

const accountTabModel = new AccountTabModel();

export default accountTabModel;
