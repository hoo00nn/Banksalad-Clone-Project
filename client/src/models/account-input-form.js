import PubSub from '@lib/pubsub';
import store from '@store/store';
import { setPayments, setType } from '@store/actions';
import { getPayments } from '@api/payment-type-api';

class AccountInputFormModel extends PubSub {
  constructor(rootElement) {
    super();
    this.element = rootElement;
    this.initState();
  }

  async initState() {
    let payments = await getPayments();
    let state = this.getState();
    const { accountOption } = this.getState();
    payments = payments.map((v) => v.payment_type);
    accountOption.payment = payments;
    setPayments(state, { accountOption });
    this.publish('stateChange', this.getState());
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
