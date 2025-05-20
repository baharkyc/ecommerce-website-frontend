import {
    SET_USER,
    SET_ROLE,
    SET_THEME,
    SET_LANGUAGE,
    SET_ADDRESS,
    SET_CARD,
    SET_SELECTED_ADDRESS_ID,
    SET_SELECTED_CARD_ID,
    SET_SELECTED_BILLING_ADDRESS_ID,
}   from "../actions/clientActions";

const clientInitial = {
    user: {
        name: "",
        email: "",
        role_id:"",
    },
    addressList: [],
    creditCards: [],
    roles: [],
    theme: "",
    language: "",
    selectedAddressId: "",
    selectedCardId:"",
    selectedBillingAddressId: "",
}

const clientReducer = (state = clientInitial, action) => {

    switch(action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.payload
            };
        case SET_ROLE:
            return {
                ...state,
                user: {
                    ...state.user,
                    role_id: action.payload
                }
            };
        case SET_THEME:
            return {
                ...state,
                theme: action.payload
            };
        case SET_LANGUAGE:
            return {
                ...state,
                language: action.payload
            };
        case SET_ADDRESS:
            return {
                ...state,
                addressList: action.payload
            };
        case SET_CARD:
            return {
                ...state,
                creditCards: action.payload
            };
        case SET_SELECTED_ADDRESS_ID:
            return {
                ...state,
                selectedAddressId: action.payload
            };
        case SET_SELECTED_CARD_ID:
            return {
                ...state,
                selectedCardId: action.payload
            };
        case SET_SELECTED_BILLING_ADDRESS_ID:
            return {
                ...state,
                selectedBillingAddressId: action.payload
            };
        default:
            return state;
    }

}
export default clientReducer;

