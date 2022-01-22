import { LOGIN_USER } from "../_actions/type";

export default function (state, action) {
  //action에서 받아온 payload를 loginSuccess로 보낸다
  //payload가 있다면 loginSuccess에 값이 있다
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, loginSuccess: action.payload };

    default:
      return state;
  }
}
