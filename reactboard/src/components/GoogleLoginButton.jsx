import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';

const GoogleLoginButton = () => {
  const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

  /*
    credential에 있는 정보 백엔드한테 보내서 신규 회원인지 아닌지 확인
    신규 회원이면 닉네임, 성별 지정하는 창으로 이동
    기존 회원이면 로그인 성공하고 백엔드한테 받은 토큰 로컬스토리지에 저장 후 메인페이지로 이동
  */
  return (
    <div>
      <GoogleOAuthProvider clientId={clientId}>
        <GoogleLogin
          onSuccess={credentialResponse => {
            console.log(jwtDecode(credentialResponse.credential));
          }}
          onFailure={err => {
            console.log(err);
          }}
        />
      </GoogleOAuthProvider>
    </div>
  );
};

export default GoogleLoginButton;
