import {LOGIN, LOGOUT, POST_LOGIN, UPDATE_VALUES_LOGIN_FORM} from "./actionTypes";

function postLogin(values: any) {
    return {
        type: POST_LOGIN,
        values
    }
}

function login(userData: any) {
    return {
        type: LOGIN,
        userData
    }
}

function updateValuesLoginForm(values: any) {
    return {
        type: UPDATE_VALUES_LOGIN_FORM,
        values
    }
}

function logout() {
    return {
        type: LOGOUT
    }
}

export {login, logout, postLogin, updateValuesLoginForm};

