import store from "../app/store";
import { OAuthTypes, ActionTypes } from "../utils/constants";

const axios = require("axios");


export const authFail = (message) => ({
  type: OAuthTypes.OAUTH_ACCESS_DENIED,
  error: message,
});

export const authSuccess = (username, accessToken, refreshToken) => ({
  type: OAuthTypes.OAUTH_ACCESS_APPROVED,
  username,
  accessToken,
  refreshToken,
});

export const getInfo = (email, fullname) => ({
  type: ActionTypes.GET_INFORMATION,
  email,
  fullname,
});


export const onAuth = (username, password) => async (dispatch) => {
  try {
    const res = await axios.post("/api/auth", { username, password });
    console.log("res", res);
    const { accessToken, refreshToken } = res.data;
    dispatch(authSuccess(username, accessToken, refreshToken));
  } catch (error) {
    console.log("error", error.response.data);
    dispatch(authFail(error.response.data));
  }
};

export const onGetInfo = (username) => async (dispatch) => {
  const { accessToken } = store.getState();
  console.log("accessToken", accessToken);
  axios.defaults.headers.common["x-access-token"] = accessToken;
  await axios.get("/api/customer").then((res) => {
    console.log("res", res);
    const { email, fullname } = res.data;
    dispatch(getInfo(email, fullname));
  });
};
