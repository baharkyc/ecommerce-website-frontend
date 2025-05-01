import { SET_ROLES, SET_ROLES_FETCHED } from "../actions/globalActions";

const globalInitial = {
    roles: [],
    isRolesFetched: false,
    categories: [],
}

const globalReducer = (state = globalInitial, action) => {

    switch(action.type) {
        case SET_ROLES:
            return {
                ...state,
                roles: action.payload
            };
        case SET_ROLES_FETCHED:
            return {
                ...state,
                isRolesFetched: action.payload
            };
        default:
            return state;
    }

}

export default globalReducer;


