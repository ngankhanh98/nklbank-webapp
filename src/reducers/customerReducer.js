import { ActionTypes, JobStatus, OAuthTypes } from "../utils/constants";

const initialState = {
  accessToken: "",
  refreshToken: "",
  username: "",
  email: "",
  fullname: "",
  error: null,
  success: null,
  isAuth: false,
  accounts: [],
  beneficiaries: [],
};

const sampleState = {
  accessToken:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im5nYW5raGFuaCIsImlhdCI6MTU5ODQ1NTg0NCwiZXhwIjoxNTk4NDU2NDQ0fQ.5ygGPtB_aDIfaul7u000k0mSRbdPrd4L6WK0RDUN0BE",
  refreshToken:
    "F4FTYU0y3QVfVeTjeXqm26gSQvpQfdK3RhNZVg2DLCPUEk7y0Lk3Jo6VYk4mbWGb33KIHOBFgZP0Ar9g",
  username: "ngankhanh",
  email: "ngankhanh98@gmail.com",
  fullname: "NGUYEN THI NGAN KHANH",
  error: null,
  isAuth: true,
  accounts: [],
};

const customerReducer = (state = initialState, action) => {
  switch (action.type) {
    case OAuthTypes.OAUTH_ACCESS_APPROVED:
      return {
        ...state,
        error: null,
        success: null,
        username: action.username,
        accessToken: action.accessToken,
        refreshToken: action.refreshToken,
        isAuth: true,
      };
    case OAuthTypes.OAUTH_ACCESS_DENIED:
      return { ...state, error: action.error };
    case ActionTypes.GET_INFORMATION:
      return {
        ...state,
        email: action.email,
        fullname: action.fullname,
      };
    case ActionTypes.GET_ACCOUNTS:
      return {
        ...state,
        accounts: action.accounts,
      };
    case JobStatus.FAIL:
      return { ...state, error: action.error };
    case ActionTypes.GET_BENEFICIARIES:
      return {
        ...state,
        beneficiaries: action.beneficiaries,
      };
    case ActionTypes.UPDATE_BENEFICIARY: {
      const { beneficiaries } = state;
      const updatedPlace = beneficiaries.findIndex(
        (object) => object.beneficiary_account === action.beneficiary_account
      );
      const updateBeneficiary = beneficiaries[updatedPlace];
      const newObject = {
        ...updateBeneficiary,
        beneficiary_name: action.beneficiary_name,
      };
      const newBeneficiaries = [
        ...beneficiaries.slice(0, updatedPlace),
        newObject,
        ...beneficiaries.slice(updatedPlace + 1),
      ];
      return {
        ...state,
        success: action.success,
        beneficiaries: newBeneficiaries,
      };
    }
    case ActionTypes.DEL_BENEFICIARIES: {
      const { beneficiaries } = state;
      const delPlace = beneficiaries.findIndex(
        (obj) => obj.beneficiary_account === action.beneficiary_account
      );
      return {
        ...state,
        success: action.success,
        beneficiaries: [
          ...beneficiaries.splice(0, delPlace),
          ...beneficiaries.splice(delPlace + 1),
        ],
      };
    }
    case JobStatus.RESET_ERROR_SUCCESS:
      return { ...state, error: null, success: null };
    default:
      break;
  }
  return state;
};

export default customerReducer;
