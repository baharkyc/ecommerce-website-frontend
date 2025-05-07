import { SET_CATEGORIES, SET_FETCH_STATE, SET_FILTER, SET_LIMIT, SET_OFFSET, SET_PRODUCT_LIST, SET_TOTAL, SET_SELECTED_PRODUCT} from "../actions/productActions";

const productInitialState = {
    categories: [],           
    productList: [],  
    selectedProduct: {},       
    total: 0,                 
    limit: 20,                 // product count on page
    offset: 0,                 // for pagination
    filter: "",                
    fetchState: "NOT_FETCHED", 
  };

const productReducer = (state = productInitialState, action) => {

    switch(action.type) {
        case SET_CATEGORIES:
            return {
                ...state,
                categories: action.payload
            };
        case SET_PRODUCT_LIST:
            return {
                ...state,
                productList: action.payload
            };
        case SET_SELECTED_PRODUCT:
            return {
                ...state,
                selectedProduct: action.payload
            };        
        case SET_TOTAL:
            return {
                ...state,
                total: action.payload
            };
        case SET_FETCH_STATE:
            return {
                ...state,
                fetchState: action.payload
            };
        case SET_LIMIT:
            return {
                ...state,
                limit: action.payload
            };
        case SET_OFFSET:
            return {
                ...state,
                offset: action.payload
            };
        case SET_FILTER:
            return {
                ...state,
                filter: action.payload
            };
        default:
            return state;
    }

}

export default productReducer;