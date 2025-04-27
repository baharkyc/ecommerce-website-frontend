
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
        default:
            return state;
    }

}
export default clientReducer;

