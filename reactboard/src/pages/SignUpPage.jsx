import React from 'react';
import { Link } from 'react-router-dom';
import useInput from '../hooks/useInput';

const SignUpPage = () => {
  const [idInput, handleChangeID] = useInput('');
  const [passwordInput, handleChangePassword] = useInput('');

  const onSubmitHandler = event => {
    // 버튼만 누르면 리로드 되는것을 막아줌
    event.preventDefault();

    // 회원 가입 api 코드 추가하기
    console.log(idInput, passwordInput);
  };

  return (
    <div className="container">
      <h4>회원가입</h4>
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
          <button type="submit">Signup</button>
        </form>
      </div>
      <Link to="/login">돌아가기</Link>
    </div>
  );
};

export default SignUpPage;
