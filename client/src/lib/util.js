export const parseIntPrice = (price) => {
  return parseInt(price.split(',').join(''));
};

export const parseStringPrice = (price) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const getDayOfWeek = (date) => {
  const week = ['일', '월', '화', '수', '목', '금', '토'];
  const dayOfWeek = week[new Date(date).getDay()];
  return dayOfWeek;
};

export const getDate = () => {
  const year = new Date().getFullYear();
  let month = new Date().getMonth() + 1;
  let day = new Date().getDate();

  month = month < 10 ? `0${momth}` : `${month}`;
  day = day < 10 ? `0${day}` : `${day}`;

  return `${year}-${month}-${day}`;
};
