import { SETUSER, CHECKOUT } from "./auth_types";

const initialState = {
  user: {},
  firstName: "",
  lastName: "",
  email: "",
  address: "",
  country: "",
  city: "",
  mobile: "",
};

const checkout = (state = initialState, action) => {
  switch (action.type) {
    case SETUSER:
      return {
        ...state,
        user: action.user,
      };

    case CHECKOUT:
      return {
        ...state,
        firstName: action.firstName,
        lastName: action.lastName,
        email: action.email,
        address: action.address,
        country: action.country,
        city: action.city,
        mobile: action.mobile,
      };

    default:
      return state;
  }
};

export default checkout;
