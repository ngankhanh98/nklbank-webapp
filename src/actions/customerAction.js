import store from "../app/store";
const axios = require("axios");

export const FAIL = "FAIL"
export const fail = (message) => ({
  type: FAIL,
  error: message
});

export const AUTH_SUCCESS = "AUTH_SUCCESS";
export const authSuccess = (username, accessToken, refreshToken) => ({
  type: AUTH_SUCCESS,
  username,
  accessToken,
  refreshToken,
});
export const onAuth = (username, password) => async (dispatch) => {
  try {
    const res = await axios.post("/api/auth", { username, password });
    console.log("res", res);
    const { accessToken, refreshToken } = res.data;
    dispatch(authSuccess(username, accessToken, refreshToken));
  } catch (error) {
    console.log("error", error.response.data);
    dispatch(fail(error.response.data));
  }
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
