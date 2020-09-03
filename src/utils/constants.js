export const JobStatus = {
  SUCCEED: "secceed",
  FAIL: "fail",
  IN_PROCESSING: "in_processing",
  PENDING: "pending",
  RESET_ERROR_SUCCESS: "reset_error_success",
  UPDATE_BUFFER: "update_buffer",
};

export const OAuthTypes = {
  OAUTH_ACCESS_APPROVED: "oauth_access_approved",
  OAUTH_ACCESS_DENIED: "oauth_access_denied",
  OAUTH_MISSING_CODE: "oauth_missing_code",
  OAUTH_INVALID_PARAM: "oauth_invalid_param",
};

export const AppTypes = {
  SWITCH_SIDEBAR: "switch_sidebar",
};

export const ActionTypes = {
  GET_INFORMATION: "get_information",
  GET_ACCOUNTS: "get_accounts",
  GET_BENEFICIARIES: "get_beneficiaries",
  ADD_BENEFICIARY: "add_beneficiary",
  UPDATE_BENEFICIARY: "update_beneficiary",
  DEL_BENEFICIARIES: "del_beneficiary",

  GET_BANK_LIST: "get_bank_list",
};
