import { actions } from "./enums";

export default (state = {}, action) => {
  switch (action.type) {
    case actions.FECTH_EMPLOYEES:
      return action.payload || {};
    case actions.UPDATE_EMPLOYEE:
      state = action.payload || {};
      return {...state }
    case actions.RESET_EMPLOYEE:
      return "";
    default:
      return state;
  }
};
