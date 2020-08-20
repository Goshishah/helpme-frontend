import { combineReducers } from "redux";
import { userReducer } from "./userReducer";

const appReducer = combineReducers({
  user: userReducer,
});

export default appReducer;
