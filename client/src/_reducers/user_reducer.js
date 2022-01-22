import { LOGIN_USER, REGISTER_USER } from "../_actions/type";

export default function (state = {}, action) {
  //action에서 받아온 payload를 loginSuccess로 보낸다
  //백엔드에서 받아온 payload가 있다면 loginSuccess에 값이 있다
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, loginSuccess: action.payload };
    case REGISTER_USER:
      return { ...state, register: action.payload };
    default:
      return state;
  }
}
