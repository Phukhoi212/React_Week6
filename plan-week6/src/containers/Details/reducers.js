import { actions } from "./enums";


export default (state = {}, action) => {
  switch (action.type) {
    case actions.FECTH_EMPLOYEES:
      return action.payload || {}
    case actions.RESET_EMPLOYEE:
      return state
    default:
      return state;
  }
};
