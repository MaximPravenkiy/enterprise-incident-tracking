import {LOGIN, LOGOUT} from "./actionTypes";

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

export {login, logout};

