const fs = require('fs');

class DummyData {
  getRandomDate() {
    const [monthLength, dayLength, year] = [13, 30, '2020'];
    let month = Math.floor(Math.random() * monthLength);
    let day = Math.ceil(Math.random() * dayLength);

    month = this.padNumber(month);
    day = this.padNumber(day);

    return `${year}-${month}-${day}`;
  }

  getRandomType() {
    const randomTypeCode = Math.ceil(Math.random() * 2) + 20000;
    return randomTypeCode === 20001 ? '수입' : '지출';
  }

  getRandomCategory(type) {
    let categoryList = new Array();
    let standardUnit = 0;

    if (type === '수입') {
      categoryList = ['월급', '용돈', '기타 수입'];
      standardUnit = 30000;
    }
    if (type === '지출') {
      categoryList = ['식비', '생활', '쇼핑/뷰티', '교통', '의료/건강', '문화/여가', '미분류'];
      standardUnit = 40000;
    }

    const listLength = categoryList.length;
    const randomIndex = Math.ceil(Math.random() * listLength);

    return standardUnit + randomIndex;
  }

  getRandomPrice() {
    const standardUnit = 1000;
    const randomPrice = Math.ceil(Math.random() * standardUnit) * standardUnit;
    return randomPrice;
  }

  getRandomPayment() {
    const paymentList = [
      '농협 카드',
      '현대 카드',
      '신한 카드',
      '국민 카드',
      '카카오 카드',
      '우리 카드',
      '비씨 카드',
    ];
    const randomIndex = Math.floor(Math.random() * paymentList.length);
    return paymentList[randomIndex];
  }

  getOptions() {
    const type = this.getRandomType();
    const category = this.getRandomCategory(type);
    const price = this.getRandomPrice();
    const payment = this.getRandomPayment();
    const user = 1;
    const date = this.getRandomDate();

    return [type, category, price, payment, user, date];
  }

  getDummyData() {
    return new Array(1000).fill(0).reduce((acc, cur) => {
      const options = this.getOptions();
      return acc + options.join(',') + '\r\n';
    }, '');
  }

  makeFile(content) {
    fs.writeFileSync('./dummyData.csv', content, (err) => {
      throw Error(err);
    });
  }

  createDummyData() {
    const dummyData = this.getDummyData();
    this.makeFile(dummyData);
  }

  padNumber(num) {
    return num < 10 ? num.toString().padStart(2, '0') : num.toString();
  }
}

const data = new DummyData();
data.createDummyData();
