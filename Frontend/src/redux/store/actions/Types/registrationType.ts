import {
    POST_REGISTRATION,
    REGISTRATION,
    RESET_REGISTRATION_FORM,
    UPDATE_VALUES_REGISTRATION_FORM
} from "../actionTypes";
import {RegistrationInitialStateType} from "../../reducers/registrationReducer";

export type PostRegistrationActionType = {
    type: typeof POST_REGISTRATION,
    registrationFormValues: RegistrationInitialStateType
}

export type UpdateValuesRegistrationFormActionType = {
    type: typeof UPDATE_VALUES_REGISTRATION_FORM,
    updatedValueRegistrationForm: RegistrationInitialStateType
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