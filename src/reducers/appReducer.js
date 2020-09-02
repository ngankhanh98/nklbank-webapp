import { accounts } from "../assets/language.json";
const { AppTypes } = require("../utils/constants");

const initialState = {
  selector: accounts.key,
};
const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case AppTypes.SWITCH_SIDEBAR:
      return { ...state, selector: action.selector };
    default:
      break;
  }
  return state
};

export default appReducer;
