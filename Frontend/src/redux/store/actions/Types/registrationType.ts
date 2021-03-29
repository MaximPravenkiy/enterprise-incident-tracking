import {
    POST_REGISTRATION,
    REGISTRATION,
    RESET_REGISTRATION_FORM,
    UPDATE_VALUES_REGISTRATION_FORM
} from "../actionTypes";
import {InitialStateType} from "../../reducers/registrationReducer";

export type PostRegistrationActionType = {
    type: typeof POST_REGISTRATION,
    registrationFormValues: InitialStateType
}

export type UpdateValuesRegistrationFormActionType = {
    type: typeof UPDATE_VALUES_REGISTRATION_FORM,
    updatedValueRegistrationForm: InitialStateType
}

export type RegistrationActionType = {
    type: typeof REGISTRATION
}

export type ResetRegistrationFormActionType = {
    type: typeof RESET_REGISTRATION_FORM
}

export type RegistrationType = PostRegistrationActionType |
    UpdateValuesRegistrationFormActionType | RegistrationActionType |
    ResetRegistrationFormActionType