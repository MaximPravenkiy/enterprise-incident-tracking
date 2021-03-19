import {LOGIN, LOGOUT, POST_LOGIN} from "./actionTypes";

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

function logout() {
    return {
        type: LOGOUT
    }
}

export {login, logout, postLogin};

