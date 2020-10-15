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
