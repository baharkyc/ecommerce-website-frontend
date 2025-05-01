import axiosInstance from "../../api/axiosInstance";
import { setUser } from "./clientActions";
import { toast } from "react-toastify";

export const LOGOUT_USER = "LOGOUT_USER";

// thunk function (async)
export const loginUser = (data, history) => async (dispatch) => {
    
  try {
    const response = await axiosInstance.post("/login", data);

    console.log("Login successful", response.data);

    dispatch(setUser(response.data)); // Save user data to redux

    const token = response.data.token; 
    
    if(data.remember)
      localStorage.setItem("token", token);

    history.push("/"); 

    toast.success("Login successful", {
      autoClose: 4000,

    });
  } catch (error) {
    console.error("Login error", error.message);

    toast.error("Please check your email or password", {
      autoClose: 4000,
    });

    throw error; // throw error to component for form reset
  }
};

export const logoutUser = () => {
    return (dispatch) => {
      // Remove token from localStorage
      localStorage.removeItem("token");
  
      // Remove token from axios default headers
      delete axiosInstance.defaults.headers['Authorization'];
  
      // Clear user from Redux
      dispatch(setUser(null));
    };
  };

export const setUserByToken = () => {

    return async (dispatch) => {
        const token = localStorage.getItem("token");

        if (token) {

            try {
                //get request to verify token
                const response = await axiosInstance.get("/verify", {
                    headers: {
                        Authorization: token,
                    },
                });
                console.log("Token verified, user set")
                const user = response.data;
                const newToken = response.data.token;

                localStorage.setItem("token", newToken); //set new token to localStorage
                axiosInstance.defaults.headers['Authorization'] = newToken; //update axios header with new token
                dispatch(setUser(user)); //set user by verified token


            } catch (err) {
                console.log("Error verifying token:", err);
                localStorage.removeItem("token"); //if token not valid, remove from storage
                delete axiosInstance.defaults.headers['Authorization']; //remove from axios header
            }

        } else {
            console.log("No token found.")
        }
    }
};


