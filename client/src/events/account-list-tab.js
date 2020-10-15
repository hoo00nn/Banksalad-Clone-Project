import { $$ } from '@lib/common';
import { setTabType } from '@store/actions';

const [List, Calendar, Statistics] = ['list', 'calendar', 'statistics'];

class AccountListTabEvent {
  constructor(target, state) {
    this.$eventTarget = target;
    this.state = state;
  }

  init() {
    this.$eventTarget.addEventListener('click', (e) => this.clickEvent(e));
  }

  clickEvent(e) {
    if (e.target.closest('#list')) {
      setTabType(this.state, { type: List });
      this.state.type = 'list';
      const option = $$('.option', this.$eventTarget);
      option.forEach((v) => {
        if (v.getAttribute('id') === this.state.type) return v.classList.add('selected');
        return v.classList.remove('selected');
      });
    }
    if (e.target.closest('#calendar')) {
      setTabType(this.state, { type: Calendar });
      this.state.type = 'calendar';
      const option = $$('.option', this.$eventTarget);
      option.forEach((v) => {
        if (v.getAttribute('id') === this.state.type) return v.classList.add('selected');
        return v.classList.remove('selected');
      });
    }
    if (e.target.closest('#statistics')) {
      setTabType(this.state, { type: Statistics });
      const option = $$('.option', this.$eventTarget);
      option.forEach((v) => {
        if (v.getAttribute('id') === this.state.type) return v.classList.add('selected');
        return v.classList.remove('selected');
      });
    }
  }
}

export default AccountListTabEvent;
