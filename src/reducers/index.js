import { combineReducers } from "redux";
import customerReducer from "./customerReducer";
import appReducer from "./appReducer";

export default combineReducers({
  customerReducer,
  appReducer,
});
