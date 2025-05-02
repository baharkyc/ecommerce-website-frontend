import axiosInstance from "../../api/axiosInstance";

export const SET_ROLES = 'SET_ROLES';
export const SET_ROLES_FETCHED = 'SET_ROLES_FETCHED';
export const SET_LOADING = 'SET_LOADING';

export const setRoles = (roles) => ({
  type: SET_ROLES,
  payload: roles,
});

export const setRolesFetched = (status) => ({
  type: SET_ROLES_FETCHED,
  payload: status,
});

export const setLoading = (isLoading) => ({
  type: SET_LOADING,
  payload: isLoading,
})

export const fetchRoles = () => async (dispatch, getState) => {
  const state = getState();
  const roles = state.global.roles;
  const isRolesFetched = state.global.isRolesFetched; 

  if(!isRolesFetched && roles.length === 0) {
    dispatch(setLoading(true)); //isLoading = true
    try {
      const response = await axiosInstance.get("/roles");
  
      dispatch(setRoles(response.data)); // Save user data to redux
      dispatch(setRolesFetched(true)); 
      
    
    } catch (error) {
      console.error("Fetch roles error", error.message);        
      throw error; // throw error to component for form reset
    } finally {
      dispatch(setLoading(false));
    }
    
  } else {
    console.log("Roles already exist, skipped fetch.")
  }
}






