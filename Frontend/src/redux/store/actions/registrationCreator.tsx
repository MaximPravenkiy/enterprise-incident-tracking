import {POST_REGISTRATION, REGISTRATION, RESET_REGISTRATION_FORM, UPDATE_VALUES_REGISTRATION_FORM} from "./actionTypes";
import {InitialStateType} from "../reducers/registrationReducer";

type PostRegistrationActionType = {
    type: typeof POST_REGISTRATION,
    registrationFormValues: InitialStateType
}
const postRegistration = (registrationFormValues: InitialStateType)
    : PostRegistrationActionType =>
    ({ type: POST_REGISTRATION, registrationFormValues })

type UpdateValuesRegistrationFormActionType = {
    type: typeof UPDATE_VALUES_REGISTRATION_FORM,
    updatedValueRegistrationForm: InitialStateType
}
const updateValuesRegistrationForm = (updatedValueRegistrationForm: any)
    : UpdateValuesRegistrationFormActionType =>
    ({ type: UPDATE_VALUES_REGISTRATION_FORM, updatedValueRegistrationForm })

type RegistrationActionType = {
    type: typeof REGISTRATION
}
const registration = ()
    : RegistrationActionType =>
    ({ type: REGISTRATION })

type ResetRegistrationFormActionType = {
    type: typeof RESET_REGISTRATION_FORM
}
const resetRegistrationForm = ()
    : ResetRegistrationFormActionType =>
    ({ type: RESET_REGISTRATION_FORM })

export {registration, postRegistration, updateValuesRegistrationForm, resetRegistrationForm};
