import {LOGIN, LOGOUT, POST_LOGIN, UPDATE_VALUES_LOGIN_FORM} from "./actionTypes";

type PostLoginActionType = {
    type: typeof POST_LOGIN,
    loginFormValues: {
        login: string
        password: string
        remember: boolean
    }
}
const postLogin = (loginFormValues: PostLoginActionType["loginFormValues"])
    : PostLoginActionType =>
    ({ type: POST_LOGIN, loginFormValues })

type LoginActionType = {
    type: typeof LOGIN,
    userData: {
        fullname: string
        token: string
        userId: string
    }
}
const login = (userData: LoginActionType["userData"])
    : LoginActionType =>
    ({ type: LOGIN, userData })

type UpdateValuesLoginFormActionType = {
    type: typeof UPDATE_VALUES_LOGIN_FORM,
    updatedValueLoginForm: {
        login: string,
        password: string
    }
}
const updateValuesLoginForm = (updatedValueLoginForm: UpdateValuesLoginFormActionType["updatedValueLoginForm"])
    : UpdateValuesLoginFormActionType =>
    ({ type: UPDATE_VALUES_LOGIN_FORM, updatedValueLoginForm })

type LogoutActionType = {
    type: typeof LOGOUT
}
const logout = ()
    : LogoutActionType =>
    ({ type: LOGOUT })

export {login, logout, postLogin, updateValuesLoginForm};

