import {LOGIN, LOGOUT, POST_LOGIN, UPDATE_VALUES_LOGIN_FORM} from "./actionTypes";

const postLogin = (values: any) => ({ type: POST_LOGIN, values })

const login = (userData: any) => ({ type: LOGIN, userData })

const updateValuesLoginForm = (values: any) => ({ type: UPDATE_VALUES_LOGIN_FORM, values })

const logout = () => ({ type: LOGOUT })

export {login, logout, postLogin, updateValuesLoginForm};

