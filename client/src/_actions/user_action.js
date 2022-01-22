import axios from "axios";
import { LOGIN_USER } from "./type";

export function loginUser(dataToSubmit) {
  //dispatch로 받아온 body를 받아 payload로 reducer에 리턴한다
  const request = axios.post("/api/users/login", dataToSubmit).then((response) => response.data);

  return {
    type: LOGIN_USER,
    payload: request,
  };
}
