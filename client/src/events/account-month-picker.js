class AccountMonthPickerEvent {
  constructor(target, model) {
    this.$eventTarget = target;
    this.model = model;
  }

  init() {
    this.$eventTarget.addEventListener('click', (e) => this.clickEvent(e));
  }

  clickEvent(e) {
    if (e.target.closest('.previous__button')) this.onclickPreviousButton();
    if (e.target.closest('.next__button')) this.onclickNextButton();
  }

  onclickPreviousButton() {
    const { monthPicker } = this.model.getState();
    let month = parseInt(monthPicker.month);
    let year = parseInt(monthPicker.year);
    month = month === 1 ? 12 : month - 1;
    year = month === 1 ? year - 1 : year;

    monthPicker.month = this.padNumber(month);
    monthPicker.year = year.toString();
    this.model.changeMonth({ monthPicker });
  }

  onclickNextButton() {
    const { monthPicker } = this.model.getState();
    let month = parseInt(monthPicker.month);
    let year = parseInt(monthPicker.year);
    month = month === 12 ? 1 : month + 1;
    year = month === 12 ? year + 1 : year;

    monthPicker.month = this.padNumber(month);
    monthPicker.year = year.toString();
    this.model.changeMonth({ monthPicker });
  }

  padNumber(month) {
    month = month < 10 ? month.toString().padStart(2, '0') : month.toString();
    return month;
  }
}

export default AccountMonthPickerEvent;
