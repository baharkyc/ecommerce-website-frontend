import { setUser } from "../actions/clientActions";
import axiosInstance from "../../api/axiosInstance";
import { toast } from "react-toastify";

// thunk function (asenkron)
export const loginUser = (data, history) => async (dispatch) => {
    
  try {
    const response = await axiosInstance.post("/login", data);

    console.log("Login successful", response.data);

    dispatch(setUser(response.data)); // Save use data to redux

    const token = response.data.token; 
    localStorage.setItem("userToken", token);

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
