import { combineReducers } from "redux";
import user from "./user_reducer";

const rootReducer = combineReducers({
  //하나로 합쳐주는 기능
  user,
});

export default rootReducer;
