import axiosInstance from "../../api/axiosInstance";

export const SET_ROLES = 'SET_ROLES';
export const SET_ROLES_FETCHED = 'SET_ROLES_FETCHED'

export const setRoles = (roles) => ({
  type: SET_ROLES,
  payload: roles,
});

export const setRolesFetched = (status) => ({
  type: SET_ROLES_FETCHED,
  payload: status,
});


export const fetchRoles = () => async (dispatch, getState) => {
  const state = getState();
  const roles = state.global.roles;
  const isRolesFetched = state.global.isRolesFetched;

  if(!isRolesFetched && roles.length === 0) {
    try {
      const response = await axiosInstance.get("/roles");
  
      dispatch(setRoles(response.data)); // Save user data to redux
      dispatch(setRolesFetched(true)); 
      console.log("Roles saved to store");
    
    } catch (error) {
      console.error("Fetch roles error", error.message);        
      throw error; // throw error to component for form reset
    }
  } else {
    console.log("Roles alreaady exist, skipped fetch.")
  }
}

