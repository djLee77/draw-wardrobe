import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUpPage = () => {
  const [ID, setID] = useState('');
  const [Password, setPassword] = useState('');

  const onIDHandler = event => {
    setID(event.currentTarget.value);
  };
  const onPasswordHandler = event => {
    setPassword(event.currentTarget.value);
  };

  const onSubmitHandler = event => {
    // 버튼만 누르면 리로드 되는것을 막아줌
    event.preventDefault();

    console.log('ID: ', ID);
    console.log('Password : ', Password);
  };

  return (
    <div className="container">
      <h4>회원가입</h4>
      <div>
        <form onSubmit={onSubmitHandler}>
          <label htmlFor="id">
            <span>ID</span>
            <input type="id" id="id" value={ID} onChange={onIDHandler} />
          </label>
          <label htmlFor="password">
            <span>Password</span>
            <input
              type="password"
              id="password"
              value={Password}
              onChange={onPasswordHandler}
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
