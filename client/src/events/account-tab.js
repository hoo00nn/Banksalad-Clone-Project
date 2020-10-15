import { $$ } from '@lib/common';

const [LIST, CALENDAR, STATISTICS] = ['list', 'calendar', 'statistics'];

class AccountTabEvent {
  constructor(target, model) {
    this.$eventTarget = target;
    this.model = model;
  }

  init() {
    this.$eventTarget.addEventListener('click', (e) => this.clickEventHandler(e));
  }

  clickEventHandler(e) {
    if (e.target.closest('#list')) this.onClickListTab(e);
    if (e.target.closest('#calendar')) this.onClickCalendarTab(e);
    if (e.target.closest('#statistics')) this.onClickStatisticsTab(e);
  }

  onClickListTab(e) {
    const { accountTab } = this.model.getState();
    const target = $$('.option');

    target.forEach(($el) => {
      if ($el.getAttribute('id') === LIST) {
        $el.classList.add('selected');
        accountTab.type = LIST;
      } else $el.classList.remove('selected');
    });

    this.model.changeTabType({ accountTab });
  }

  onClickCalendarTab(e) {
    const { accountTab } = this.model.getState();
    const target = $$('.option');

    target.forEach(($el) => {
      if ($el.getAttribute('id') === CALENDAR) {
        $el.classList.add('selected');
        accountTab.type = CALENDAR;
      } else $el.classList.remove('selected');
    });

    this.model.changeTabType({ accountTab });
  }

  onClickStatisticsTab(e) {
    const { accountTab } = this.model.getState();
    const target = $$('.option');

    target.forEach(($el) => {
      if ($el.getAttribute('id') === STATISTICS) {
        $el.classList.add('selected');
        accountTab.type = STATISTICS;
      } else $el.classList.remove('selected');
    });

    this.model.changeTabType({ accountTab });
  }
}

export default AccountTabEvent;
