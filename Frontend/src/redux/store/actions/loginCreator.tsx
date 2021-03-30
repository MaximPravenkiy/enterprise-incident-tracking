import {LOGIN, LOGOUT, POST_LOGIN, UPDATE_VALUES_LOGIN_FORM} from "./actionTypes";
import {
    LoginActionType,
    LogoutActionType,
    PostLoginActionType,
    UpdateValuesLoginFormActionType
} from "./Types/loginTypes";
import {LoginFormValue} from "../reducers/loginReducer";

const postLogin = (loginFormValues: LoginFormValue)
    : PostLoginActionType =>
    ({ type: POST_LOGIN, loginFormValues })

const login = (userData: LoginActionType["userData"])
    : LoginActionType =>
    ({ type: LOGIN, userData })

const updateValuesLoginForm = (updatedValueLoginForm: LoginFormValue)
    : UpdateValuesLoginFormActionType =>
    ({ type: UPDATE_VALUES_LOGIN_FORM, updatedValueLoginForm })

const logout = ()
    : LogoutActionType =>
    ({ type: LOGOUT })

export {login, logout, postLogin, updateValuesLoginForm};

