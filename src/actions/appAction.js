import { AppTypes } from "../utils/constants";

const switchSidebar = (option) => ({
  type: AppTypes.SWITCH_SIDEBAR,
  selector: option,
});

export const onSwitchSidebarOps = (option) => (dispatch) =>
  dispatch(switchSidebar(option));
