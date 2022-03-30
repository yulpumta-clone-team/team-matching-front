export const serverStatus = {
  1000: '요청성공',
  2000: 'Request 오류',
  2001: 'JWT를 입력해주세요.',
  2002: '유효하지 않은 JWT입니다.',
  3000: '회원탈퇴 실패',
  3001: '로그인에 실패하였습니다',
  3002: '회원가입 실패',
  3003: '이메일 형식 에러',
  3004: '닉네임 형식 에러',
  3005: '중복된 이메일입니다',
  3006: '중복된 이름입니다.',
  3007: '비밀번호 형식 오류.',
  4000: '부모 댓글인 경우에만 대댓글을 달 수 있습니다.',
  4001: '부모 댓글 ID가 NULL입니다.',
  4002: '댓글 수정 실패',
  4003: '본인 댓글만 삭제 가능합니다.',
  9000: '서버 내부 논리 에러',
};

export const isStatusOk = (httpStatus) => !(httpStatus > 200);
