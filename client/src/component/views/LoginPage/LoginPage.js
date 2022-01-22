import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../_actions/user_action";
import { withRouter } from "react-router-dom";

function LoginPage(props) {
  const dispatch = useDispatch();
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

    let body = {
      email: Email,
      password: Password,
    };

    dispatch(loginUser(body)).then((response) => {
      //dispatch로 action loginUser에 body를 보내준다
      if (response.payload.loginSuccess) {
        props.history.push("/");
      } else {
        //action에 보낸 body를 reducer을 거쳐 login이 backend에서 데이터베이스에 user가 있다는 것을 확인하면 success에 true값이 들어온다
        //그러면 시작화면으로 돌아간다
        alert("로그인 실패!!");
      }
    });
  };

  return (
    <>
      <form style={{ display: "flex", flexDirection: "column" }} onSubmit={onSubmitHandler}>
        <label>Email</label>
        <input type="email" value={Email} onChange={onEmailHandler} />
        <label>Password</label>
        <input type="password" value={Password} onChange={onPasswordHandler} />
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default withRouter(LoginPage);
