import { $, $$ } from '@lib/common';

class AccountTabEvent {
  constructor(target, state) {
    this.$eventTarget = target;
    this.state = state;
  }

  init() {
    this.$eventTarget.addEventListener('click', (e) => this.clickEvent(e));
  }

  clickEvent(e) {
    if (e.target.closest('#list')) {
      this.state.type = 'list';
      const option = $$('.option', this.$eventTarget);
      option.forEach((v) => {
        if (v.getAttribute('id') === this.state.type) return v.classList.add('selected');
        return v.classList.remove('selected');
      });
    }
    if (e.target.closest('#calendar')) {
      this.state.type = 'calendar';
      const option = $$('.option', this.$eventTarget);
      option.forEach((v) => {
        if (v.getAttribute('id') === this.state.type) return v.classList.add('selected');
        return v.classList.remove('selected');
      });
    }
    if (e.target.closest('#statistics')) {
      this.state.type = 'statistics';
      const option = $$('.option', this.$eventTarget);
      option.forEach((v) => {
        if (v.getAttribute('id') === this.state.type) return v.classList.add('selected');
        return v.classList.remove('selected');
      });
    }
  }
}

export default AccountTabEvent;
