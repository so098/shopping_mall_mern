import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../_actions/user_action";

function LoginPage() {
  const dispatch = useDispatch;
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const onEmailHandler = (e) => {
    setEmail(e.currentTarget.value);
  };

  const onPasswordHandler = (e) => {
    setPassword(e.currentTarget.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("Email", Email);
    console.log("password", Password);

    let body = {
      email: Email,
      password: Password,
    };

    dispatch(loginUser(body)); //dispatch로 action loginUser에 body를 보내준다
  };

  return (
    <div>
      <form style={{ display: "flex", flexDirection: "column" }} onSubmit={onSubmitHandler}>
        <label>Email</label>
        <input type="email" value={Email} onChange={onEmailHandler} />
        <label>Password</label>
        <input type="password" value={Password} onChange={onPasswordHandler} />
        <button>Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
