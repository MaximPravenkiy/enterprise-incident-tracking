import {LOGIN, LOGOUT, POST_LOGIN, UPDATE_VALUES_LOGIN_FORM} from "../actionTypes";

export type PostLoginActionType = {
    type: typeof POST_LOGIN,
    loginFormValues: {
        login: string
        password: string
        remember: boolean
    }
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
    updatedValueLoginForm: {
        login: string,
        password: string
    }
}

export type LogoutActionType = {
    type: typeof LOGOUT
}

export type LoginType = PostLoginActionType | LoginActionType |
    UpdateValuesLoginFormActionType | LogoutActionType