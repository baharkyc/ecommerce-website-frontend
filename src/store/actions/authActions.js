import axiosInstance from "../../api/axiosInstance";
import { setUser } from "./clientActions";
import { toast } from "react-toastify";

export const LOGOUT_USER = "LOGOUT_USER";

// thunk function (async)
export const loginUser = (data, history) => async (dispatch) => {
    
  try {
    const response = await axiosInstance.post("/login", data);

    console.log("Login successful");

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
        const response = await axiosInstance.get("/verify", {
        headers: {
            Authorization: token,
        },
        });

        console.log("Token verified, user set");
        const user = response.data;
        const newToken = response.data.token;

        localStorage.setItem("token", newToken);
        axiosInstance.defaults.headers["Authorization"] = newToken;
        dispatch(setUser(user));

    } catch (err) {

        console.log("Error verifying token:", err);
        localStorage.removeItem("token");
        delete axiosInstance.defaults.headers["Authorization"];
    }
    } else {
    console.log("No token found.");
    }
};
};


