import { OAuthTypes, ActionTypes } from "../utils/constants";

const initialState = {
  accessToken: "",
  refreshToken: "",
  username: "",
  email: "",
  fullname: "",
  error: null,
  isAuth: false,
  accounts: [],
};

const customerReducer = (state = initialState, action) => {
  switch (action.type) {
    case OAuthTypes.OAUTH_ACCESS_APPROVED:
      return {
        ...state,
        username: action.username,
        accessToken: action.accessToken,
        refreshToken: action.refreshToken,
        isAuth: true,
      };
    case ActionTypes.GET_INFORMATION:
      return {
        ...state,
        email: action.email,
        fullname: action.fullname,
      };
    case OAuthTypes.OAUTH_ACCESS_DENIED:
      return { ...state, error: action.error };
    default:
      break;
  }
  return state;
};

export default customerReducer;
