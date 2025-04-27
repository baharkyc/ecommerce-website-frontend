export const SET_USER = "SET_USER";
export const SET_ROLE = "SET_ROLE";
export const SET_THEME = "SET_THEME";
export const SET_LANGUAGE = "SET_LANGUAGE";

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