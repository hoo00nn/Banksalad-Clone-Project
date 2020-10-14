import PubSub from '@lib/pubsub';
import store from '@store/store';
import { setMonth } from '@store/actions';

class AccountMonthPickerModel extends PubSub {
  constructor(rootElement) {
    super();
    this.element = rootElement;
  }

  changeMonth(newState) {
    const state = this.getState();
    setMonth(state, newState);
    this.publish('stateChange', this.getState());
  }

  getState() {
    return store.getState();
  }
}

export default AccountMonthPickerModel;
