import {LOGIN, LOGOUT, POST_LOGIN, UPDATE_VALUES_LOGIN_FORM} from "../actionTypes";
import {LoginFormValue} from "../../reducers/loginReducer";

export type PostLoginActionType = {
    type: typeof POST_LOGIN,
    loginFormValues: LoginFormValue
}

export type LoginActionType = {
    type: typeof LOGIN,
    userData: {
        fullname: string
        token: string
        userId: string
    }
}

export type UpdateValuesLoginFormActionType = {
    type: typeof UPDATE_VALUES_LOGIN_FORM,
    updatedValueLoginForm: LoginFormValue
}

export type LogoutActionType = {
    type: typeof LOGOUT
}

export type LoginType = PostLoginActionType | LoginActionType |
    UpdateValuesLoginFormActionType | LogoutActionType