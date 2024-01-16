import { useGoogleLogin } from '@react-oauth/google';

const GoogleLoginButton = () => {
  // 구글 로그인 버튼 함수
  const onClickLoginBtn = useGoogleLogin({
    onSuccess: tokenResponse => console.log(tokenResponse.access_token),
  });

  /*
    access 토큰 백엔드한테 보내서 신규 회원인지 아닌지 확인
    신규 회원이면 닉네임, 성별 지정하는 창으로 이동
    기존 회원이면 로그인 성공하고 백엔드한테 받은 토큰 로컬스토리지에 저장 후 메인페이지로 이동
  */
  return (
    <div>
      <button type="button" onClick={() => onClickLoginBtn()}>
        <span>구글로 로그인 하기</span>
      </button>
    </div>
  );
};

export default GoogleLoginButton;
