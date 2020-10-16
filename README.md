# javascript-w5-accountbook

스프린트 5-6주차 웹 프로젝트 - 가계부

## Project Structure

- server

```json
  📦server
 ┣  📂config
 ┃  ┗  📜config.js
 ┣  📂src
 ┃  ┣  📂dummy
 ┃  ┃  ┣  📜createData.js
 ┃  ┃  ┗  📜dummyData.csv
 ┃  ┣  📂middlewares
 ┃  ┃  ┣  📜auth.js
 ┃  ┃  ┣  📜category.js
 ┃  ┃  ┣  📜passport.js
 ┃  ┃  ┣  📜payment.js
 ┃  ┃  ┣  📜transaction.js
 ┃  ┃  ┗  📜user.js
 ┃  ┣  📂models
 ┃  ┃  ┣  📜code.js
 ┃  ┃  ┣  📜index.js
 ┃  ┃  ┣  📜payment.js
 ┃  ┃  ┣  📜transaction.js
 ┃  ┃  ┗  📜user.js
 ┃  ┣  📂routes
 ┃  ┃  ┣ 📂api
 ┃  ┃  ┃ ┣  📜category.js
 ┃  ┃  ┃ ┣  📜login.js
 ┃  ┃  ┃ ┣  📜payment.js
 ┃  ┃  ┃ ┣  📜transaction.js
 ┃  ┃  ┃ ┗  📜user.js
 ┃  ┃  ┗  📜api.js
 ┃  ┣  📂util
 ┃  ┃  ┣  📜bcrypt.js
 ┃  ┃  ┗  📜server-message.js
 ┃  ┗  📜app.js
 ┣  📜.env
 ┣  📜.eslintrc.js
 ┣  📜.prettierrc
 ┣  📜package-lock.json
 ┗  📜package.json
```

```
📦client
 ┣  📂src
 ┃  ┣  📂api
 ┃  ┃  ┣  📜category-api.js
 ┃  ┃  ┣  📜login-api.js
 ┃  ┃  ┣  📜payment-type-api.js
 ┃  ┃  ┗  📜transaction-api.js
 ┃  ┣  📂events
 ┃  ┃  ┣  📜account-header.js
 ┃  ┃  ┣  📜account-input-form.js
 ┃  ┃  ┣  📜account-list.js
 ┃  ┃  ┣  📜account-month-picker.js
 ┃  ┃  ┣  📜account-tab.js
 ┃  ┃  ┗  📜login-events.js
 ┃  ┣  📂lib
 ┃  ┃  ┣  📜axios-config.js
 ┃  ┃  ┣  📜common.js
 ┃  ┃  ┣  📜pubsub.js
 ┃  ┃  ┣  📜token.js
 ┃  ┃  ┗  📜util.js
 ┃  ┣  📂models
 ┃  ┃  ┣  📜account-header.js
 ┃  ┃  ┣  📜account-input-form.js
 ┃  ┃  ┣  📜account-list.js
 ┃  ┃  ┣  📜account-month-picker.js
 ┃  ┃  ┗  📜account-tab.js
 ┃  ┣  📂scss
 ┃  ┃  ┣  📂common
 ┃  ┃  ┃  ┣  📜reset.scss
 ┃  ┃  ┃  ┗  📜variables.scss
 ┃  ┃  ┣  📂components
 ┃  ┃  ┃  ┗  📜button.scss
 ┃  ┃  ┣  📂pages
 ┃  ┃  ┃  ┣  📂account-book
 ┃  ┃  ┃  ┃  ┣  📜account-list.scss
 ┃  ┃  ┃  ┃  ┣  📜header.scss
 ┃  ┃  ┃  ┃  ┣  📜index.scss
 ┃  ┃  ┃  ┃  ┣  📜month-picker.scss
 ┃  ┃  ┃  ┃  ┣  📜option-list.scss
 ┃  ┃  ┃  ┃  ┣  📜tab.scss
 ┃  ┃  ┃  ┃  ┗  📜total-price.scss
 ┃  ┃  ┃  ┗  📜login.scss
 ┃  ┃  ┗  📜index.scss
 ┃  ┣  📂store
 ┃  ┃  ┣  📜actions.js
 ┃  ┃  ┣  📜reducer.js
 ┃  ┃  ┣  📜state.js
 ┃  ┃  ┣  📜store.js
 ┃  ┃  ┗  📜types.js
 ┃  ┣  📂templates
 ┃  ┃  ┣  📜account-book.js
 ┃  ┃  ┣  📜account-header.js
 ┃  ┃  ┣  📜account-input-form.js
 ┃  ┃  ┣  📜account-list.js
 ┃  ┃  ┣  📜account-month-picker.js
 ┃  ┃  ┣  📜account-tab.js
 ┃  ┃  ┗  📜login.js
 ┃  ┣  📂views
 ┃  ┃  ┣  📜account-book.js
 ┃  ┃  ┣  📜account-header.js
 ┃  ┃  ┣  📜account-input-form.js
 ┃  ┃  ┣  📜account-list.js
 ┃  ┃  ┣  📜account-month-picker.js
 ┃  ┃  ┣  📜account-tab.js
 ┃  ┃  ┗  📜login.js
 ┃  ┣  📜index.html
 ┃  ┗  📜index.js
 ┣  📜.eslintrc.js
 ┣  📜.prettierrc
 ┣  📜babel.config.js
 ┣  📜banner.js
 ┣  📜package-lock.json
 ┣  📜package.json
 ┗  📜webpack.config.js
```

## Demo

- http://101.101.216.75/

![image](https://user-images.githubusercontent.com/52775389/96204009-3138fd80-0f9e-11eb-8a36-1dd12d65e625.png)

## DB Scheme

![image](https://user-images.githubusercontent.com/52775389/95408155-d4b05f80-0959-11eb-9199-57cdd64928b7.png)

## Install

```bash
cd server
npm install

cd client
npm start
```

### Webpack Build

```bash
npm run build
```

### Start

```bash
cd server
npm start
```

## 📄 API 명세

### transaction

- GET `/api/transaction` | `거래 내역 조회`

  ```json
  // Request
  {

  }
  // Response
  // 성공시
  {
   "status" : "success",
   "message" : "성공 메세지",
   "data" : [
     {
      "no": 1442,
      "type": "지출",
      "category": "문화/여가",
      "price": "577,000",
      "content": "내용",
      "payment": "카카오 카드",
      "user_no": 1,
      "date": "2020-12-30"
   }]
  }

  // 실패시
  {
   "status" : "fail",
   "message" : "실패 메세지",
  }
  ```

- POST `/api/transaction` | `거래 내역 추가`

  ```json
  // Request
  {
   "type" : 20001,
   "category" : 30001,
   "price" : "30000",
   "content" : "내용",
   "payment_type" : 10003,
   "date" : "2020-10-05"
  }

  // Response
  // 성공시
  {
   "status" : "success",
   "message" : "성공 메세지",
  }

  // 실패시
  {
   "status" : "fail",
   "message" : "실패 메세지",
  }
  ```

- UPDATE `/api/transaction` | `거래 내역 업데이트`

  ```json
  // Request
  {
   "type" : 20001,
   "category" : 30001,
   "price" : "30000",
   "content" : "내용",
   "payment_type" : 10003,
   "date" : "2020-10-05"
  }

  // Response
  // 성공시
  {
   "status" : "success",
   "message" : "성공 메세지",
  }

  // 실패시
  {
   "status" : "fail",
   "message" : "실패 메세지",
  }
  ```

- DELETE `/api/transaction` | `거래 내역 삭제`

  ```json
  // Request
  {
  	"no" : "삭제할 거래내역 번호",
  }

  // Response
  // 성공시
  {
   "status" : "success",
   "message" : "성공 메세지",
  }

  // 실패시
  {
   "status" : "fail",
   "message" : "실패 메세지",
  }
  ```

### payment

- GET `/api/payment` | `결제 수단 조회`

  ```json
  // Request
  {

  }

  // Response
  {
   "state": "success",
   "message": "성공 메세지",
   "data": [
    {
  	 "user_no" : "사용자 번호",
  	 "payment" : "결제 수단",
   }]
  }
  ```

- POST `/api/payment` | `결제 수단 등록`

  ```json
  // Request
  {
   "payment" : "결제 수단",
  }

  // Response
  // 성공시
  {
   "status" : "success",
   "message" : "성공 메세지",
  }

  // 실패시
  {
   "status" : "fail",
   "message" : "실패 메세지",
  }
  ```

### category

- GET `/api/category` | `카테고리 리스트 조회`

  ```json
  // Request
  {
   "code" : "코드 번호",
  }

  // Response
  {
   "status": "success",
   "data": [
     {
       "no": 40001,
       "title": "식비",
       "parent": 400
     }],
  }
  ```

### user

- POST `/api/user` | `사용자 추가`

  ```json
  // Request
  {
   "username" : "id",
   "password" : "pw",
  }

  // Response
  // 성공시
  {
   "status" : "success",
   "message" : "성공 메세지",
  }

  // 실패시
  {
   "status" : "fail",
   "message" : "실패 메세지",
  }
  ```

### login

- POST `/api/login` | `로그인`

  ```json
  // Request
  {
   "username" : "id",
   "password" : "pw",
  }

  // Response
  {
   "JWT" : "Token 정보",
  }
  ```
