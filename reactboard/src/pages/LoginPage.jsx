import React from 'react';
import { Link } from 'react-router-dom';
import GoogleLoginButton from '../components/Login/GoogleLoginButton';
import useInput from '../hooks/useInput';

const LoginPage = () => {
  const [idInput, handleChangeID] = useInput('');
  const [passwordInput, handleChangePassword] = useInput('');

  const onSubmitHandler = event => {
    // 버튼만 누르면 리로드 되는것을 막아줌
    event.preventDefault();

    // 로그인 api 코드 추가하기

    console.log(idInput, passwordInput);
  };

  return (
    <div className="container">
      <h4>로그인</h4>
      <div>
        <form onSubmit={onSubmitHandler}>
          <label htmlFor="id">
            <span>ID</span>
            <input
              type="id"
              id="id"
              value={idInput}
              onChange={handleChangeID}
            />
          </label>
          <label htmlFor="password">
            <span>Password</span>
            <input
              type="password"
              id="password"
              value={passwordInput}
              onChange={handleChangePassword}
            />
          </label>
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
      <GoogleLoginButton />
      <Link to="/signup">회원가입하러 가기</Link>
    </div>
  );
};

export default LoginPage;
