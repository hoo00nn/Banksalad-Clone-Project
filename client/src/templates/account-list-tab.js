const getTemplate = () => {
  return `
    <div class="option-tab">
      <div class="option selected" id="list">내역</div>
      <div class="option" id="calendar">달력</div>
      <div class="option" id="statistics">통계</div>
    </div>
  `;
};

export default getTemplate;
