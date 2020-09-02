import store from "../app/store";
import { ActionTypes, JobStatus, OAuthTypes } from "../utils/constants";

const axios = require("axios");

const authFail = (message) => ({
  type: OAuthTypes.OAUTH_ACCESS_DENIED,
  error: message,
});

const authSuccess = (username, accessToken, refreshToken) => ({
  type: OAuthTypes.OAUTH_ACCESS_APPROVED,
  username,
  accessToken,
  refreshToken,
});

const loadInfo = (email, fullname) => ({
  type: ActionTypes.GET_INFORMATION,
  email,
  fullname,
});

const loadAccount = (accounts) => ({
  type: ActionTypes.GET_ACCOUNTS,
  accounts,
});

const jobFail = (error) => ({
  type: JobStatus.FAIL,
  error,
});

const loadBeneficiaries = (beneficiaries) => ({
  type: ActionTypes.GET_BENEFICIARIES,
  beneficiaries,
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

export const onLoadInfo = (username) => async (dispatch) => {
  const { accessToken } = store.getState();
  console.log("accessToken", accessToken);
  axios.defaults.headers.common["x-access-token"] = accessToken;
  await axios.get("/api/customer").then((res) => {
    console.log("res", res);
    const { email, fullname } = res.data;
    dispatch(loadInfo(email, fullname));
  });
};

export const onLoadAccounts = () => async (dispatch) => {
  const { accessToken } = store.getState().customerReducer;
  console.log("accessToken", accessToken);
  axios.defaults.headers.common["x-access-token"] = accessToken;
  try {
    const res = await axios.get("/api/customer/accounts");
    console.log("res.data", res.data);
    dispatch(loadAccount(res.data));
  } catch (error) {
    dispatch(jobFail(error.response.data));
  }
};

export const onLoadBeneficiaries = () => async (dispatch) => {
  const { accessToken } = store.getState().customerReducer;
  console.log("accessToken", accessToken);
  axios.defaults.headers.common["x-access-token"] = accessToken;
  try {
    const res = await axios.get("api/customer/beneficiaries");
    console.log("res", res);
    dispatch(loadBeneficiaries(res.data));
  } catch (error) {
    console.log('error', error)
    dispatch(jobFail(error.response.data));
  }
};
