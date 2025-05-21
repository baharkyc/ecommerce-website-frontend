import axiosInstance from "../../api/axiosInstance";
import { setLoading } from "./globalActions";

export const SET_CATEGORIES = "SET_CATEGORIES";
export const SET_PRODUCT_LIST = "SET_PRODUCT_LIST";
export const SET_TOTAL = "SET_TOTAL";
export const SET_FETCH_STATE = "SET_FETCH_STATE";
export const SET_LIMIT = "SET_LIMIT";
export const SET_OFFSET = "SET_OFFSET";
export const SET_FILTER = "SET_FILTER";
export const SET_SELECTED_PRODUCT = "SET_SELECTED_PRODUCT";


export const setCategories = (categories) => {
    return {
        type: SET_CATEGORIES,
        payload: categories,
    }
}

export const setProductList = (productList) => {
    return {
        type: SET_PRODUCT_LIST,
        payload: productList,
    }
}

export const setProduct = (product) => {
    return {
        type: SET_SELECTED_PRODUCT,
        payload: product,
    }
}

export const setTotal = (total) => {
    return {
        type: SET_TOTAL,
        payload: total,
    }
}

export const setFetchState = (fetchState) => {
    return {
        type: SET_FETCH_STATE,
        payload: fetchState,
    }
}

export const setLimit = (limit) => {
    return {
        type: SET_LIMIT,
        payload: limit,
    }
}

export const setOffset = (offset) => {
    return {
        type: SET_OFFSET,
        payload: offset,
    }
}

export const setFilter = (filter) => {
    return {
        type: SET_FILTER,
        payload: filter,
    }
}


export const fetchCategories = () => async (dispatch, getState) => {
    const state = getState();
    const categories = state.product.categories;
    
    if(categories.length === 0) {

        dispatch(setLoading(true)); //start of loading

        try {
            const response = await axiosInstance.get("/categories");

            dispatch(setCategories(response.data)); // Save user data to redux
            console.log("Categories fetched");
            
        } catch (error) {
            console.error("Fetch categories error", error.message);        
            throw error; // throw error to component for form reset

        } finally {
            dispatch(setLoading(false)); //end of loading
        }
    } 
  }

export const fetchProducts = (categoryId, sort, filter= {}, offset) => async (dispatch, getState) => {

    const state = getState();
    const products = state.product.productList;
    const total = state.product.total;
    const {limit, offset} = state.product;

    let url = "/products";
    const queryParams = [];

    if (categoryId) {
        queryParams.push(`category=${categoryId}`);
    } 

    if (sort) {
        queryParams.push(`sort=${sort}`);
    }

    if (filter.color) {
        queryParams.push(`filter=${filter.color}`)
    }

    if (limit) {
        queryParams.push(`limit=${limit}`);
    }

    if(offset) {
        queryParams.push(`offset=${offset}`);
    }

    if (queryParams.length > 0) {
        url += `?${queryParams.join("&")}`;
    }

    dispatch(setLoading(true));

    try {

        const response = await axiosInstance.get(url);

        dispatch(setProductList(response.data.products)); //Save product list to redux
        dispatch(setTotal(response.data.total)); //Save total to redux.
        console.log("Product list fetched. Total products: ", response.data.total);

    } catch (error) {
        console.error("Fetch products error" , error.message);
        throw error;
    }
    
    finally {
        dispatch(setLoading(false));
    }
}

export const fetchProduct = ( productId ) => async(dispatch, getState) => {

    dispatch(setLoading(true));

    try {

        const response = await axiosInstance.get(`/products/${productId}`);
        dispatch(setProduct(response.data));

        console.log("Product with id: " + productId + " fetched.");

    } catch (error) {
        console.error("Fetch product error" , error.message);
        throw error;
    }
    
    finally {
        dispatch(setLoading(false));
    }
}

