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
    case "AUTH_SUCCESS":
      return {
        ...state,
        username: action.username,
        accessToken: action.accessToken,
        refreshToken: action.refreshToken,
        isAuth: true,
      };
    case "GET_INFO":
      return {
        ...state,
        email: action.email,
        fullname: action.fullname,
      };
    case "FAIL":
      return { ...state, error: action.error };
    default:
      break;
  }
  return state;
};

export default customerReducer;
