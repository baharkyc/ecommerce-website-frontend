import { LOGOUT_USER, SET_AUTHENTICATED } from "../actions/authActions";

const initialState = {
  isAuthenticated: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGOUT_USER:
      return {
        ...state,
        isAuthenticated: false,
      };
    
    case SET_AUTHENTICATED:
      return {
        ...state,
        isAuthenticated: action.payload,
      };
    
    default:
      return state;
  }
};

export default authReducer;
