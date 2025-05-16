import axiosInstance from "../../api/axiosInstance";
import { setLoading } from "./globalActions";

export const SET_USER = "SET_USER";
export const SET_ROLE = "SET_ROLE";
export const SET_THEME = "SET_THEME";
export const SET_LANGUAGE = "SET_LANGUAGE";
export const SET_ADDRESS = "SET_ADDRESS";

export const setUser = (user) => {
    return {
        type: SET_USER,
        payload: user,
    }
}

export const setRole = (roleId) => {
    return {
        type: SET_ROLE,
        payload: roleId,
    }
    
}

export const setTheme = (theme) => {
    return {
        type: SET_THEME,
        payload: theme,
    }
}

export const setLanguage = (language) => {
    return {
        type: SET_LANGUAGE,
        payload: language,
    }
}

export const setAddress = (address) => {
    return {
        type: SET_ADDRESS,
        payload: address,
    }
}

export const fetchAddresses = () => async (dispatch) => {

    const token = localStorage.getItem("token") ;

    dispatch(setLoading(true));

    try {
        const response = await axiosInstance.get("/user/address", {
            headers: {
                Authorization: token, //token for Authorization
            }
        });
        console.log("Address fetch success");
        dispatch(setAddress(response.data));

    } catch (error) {
        console.error("Fetch address error", error.message);       

    } finally {
        dispatch(setLoading(false));
    }
}

export const saveAddress = (addressData) => async (dispatch) => {

    const token = localStorage.getItem("token") ;

    dispatch(setLoading(true));

    try {
        await axiosInstance.post("/user/address", 
            addressData,
            {
            headers: {
                Authorization: token, //token for Authorization
            }
        });
        console.log("Address save success");
    

    } catch (error) {
        console.error("Save address error", error.message);       

    } finally {
        dispatch(setLoading(false));
    }
}

export const updateAddress = (addressData) => async (dispatch) => {

    const token = localStorage.getItem("token") ;

    dispatch(setLoading(true));

    try {
        await axiosInstance.put("/user/address", 
            addressData,
            {
            headers: {
                Authorization: token, //token for Authorization
            }
        });
        console.log("Address update success");
    

    } catch (error) {
        console.error("Update address error", error.message);       

    } finally {
        dispatch(setLoading(false));
    }
}

export const deleteAddress = (addressId) => async (dispatch) => {

    const token = localStorage.getItem("token") ;

    dispatch(setLoading(true));

    try {
        await axiosInstance.delete(`/user/address/${addressId}`, 
            {
            headers: {
                Authorization: token, //token for Authorization
            }
        });
        console.log("Address delete success");
    } catch (error) {
        console.error("Delete address error", error.message);       

    } finally {
        dispatch(setLoading(false));
    }
}

