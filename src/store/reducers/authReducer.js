import { LOGOUT_USER } from "../actions/authActions";

const initialState = {
  isAuthenticated: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGOUT_USER:
      return {
        ...state,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

export default authReducer;
