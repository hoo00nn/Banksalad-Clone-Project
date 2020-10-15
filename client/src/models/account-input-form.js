import PubSub from '@lib/pubsub';
import store from '@store/store';
import { setPayments, setType } from '@store/actions';
import { getPayments } from '@api/payment-type-api';

class AccountInputFormModel extends PubSub {
  constructor(rootElement) {
    super();
    this.$element = rootElement;
  }

  async initState() {
    let payments = await getPayments();
    const state = this.getState();
    const { accountOption } = this.getState();
    payments = payments.map((v) => v.payment_type);
    accountOption.payment = payments;
    setPayments(state, { accountOption });
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

const accountInpuFormModel = new AccountInputFormModel();

export default accountInpuFormModel;
