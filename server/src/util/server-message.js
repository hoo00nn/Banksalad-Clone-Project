const errorMessage = {
  invalidUser: `존재하지 않는 사용자 입니다.`,
  invalidPassword: `올바르지 않은 비밀번호 입니다.`,
  invalidToken: `유효하지 않은 토큰입니다.`,
  failedInsert: `데이터 추가에 실패하였습니다.`,
  failedUpdate: `데이터 업데이트에 실패하였습니다.`,
  faildDelete: `데이터 삭제에 실패하였습니다.`,
  failSelect: `데이터를 정상적으로 가져오는데 실패하였습니다.`,
};

const succeedMessage = {
  succeedInsert: `데이터 추가가 정상적으로 완료되었습니다.`,
  succeedUpdate: `데이터 업데이트가 정상적으로 완료되었습니다.`,
  succeedDelete: `데이터 삭제가 정상적으로 완료되었습니다.`,
  succeedSelect: `데이터를 정상적으로 가져오는데 성공하였습니다.`,
};

module.exports = {
  errorMessage,
  succeedMessage,
};
