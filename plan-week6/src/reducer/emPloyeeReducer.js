import { actions } from '../containers/Home/enums'

const initialState = {
  first_name: '',
  last_name: '',
  title: "",
  account: {
    email: "",
    image: "",
    userName: "",
    address: {
      street: "",
      city: "",
      country: ""
    }
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.FECTH_LIST_EMPLOYEES:
      return action.payload || [];
    default:
      return state;
  }
};