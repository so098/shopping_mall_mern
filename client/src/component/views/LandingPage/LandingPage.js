import React, { useEffect } from "react";
import axios from "axios";

function LandingPage(props) {
  useEffect(() => {
    axios.get("/api/hello").then((response) => console.log(response));
  }, []);

  const onClickHandler = () => {
    axios.get("/api/users/logout").then((response) => {
      if (response.data.success) {
        props.history.push("/login");
      } else {
        alert("로그아웃 실패했습니다.");
      }
    });
  };
  return (
    <>
      <div>시작페이지</div>
      <button onClick={onClickHandler}>logout</button>
    </>
  );
}

export default LandingPage;
