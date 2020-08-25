import store from "../app/store";
const axios = require("axios");

export const AUTH_SUCCESS = "AUTH_SUCCESS";
export const authSuccess = (username, accessToken, refreshToken) => ({
  type: AUTH_SUCCESS,
  username,
  accessToken,
  refreshToken,
});
export const onAuth = (username, password) => async (dispatch) => {
  await axios.post("/api/auth", { username, password }).then((res) => {
    console.log("res", res);
    const { accessToken, refreshToken } = res.data;
    dispatch(authSuccess(username, accessToken, refreshToken));
  });
};

export const GET_INFO = "GET_INFO";
export const getInfo = (email, fullname) => ({
  type: GET_INFO,
  email,
  fullname,
});
export const onGetAccounts = (username) => async (dispatch) => {
    const { accessToken } = store.getState();
//   const accessToken = "nnn";
  console.log("accessToken", accessToken);
  axios.defaults.headers.common["x-access-token"] = accessToken;
  await axios.get("/api/customer").then((res) => {
    console.log("res", res);
    const { email, fullname } = res.data;
    dispatch(getInfo(email, fullname));
  });
};
