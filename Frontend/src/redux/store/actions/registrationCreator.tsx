import {POST_REGISTRATION, REGISTRATION, RESET_REGISTRATION_FORM, UPDATE_VALUES_REGISTRATION_FORM} from "./actionTypes";
import {InitialStateType} from "../reducers/registrationReducer";
import {
    PostRegistrationActionType,
    RegistrationActionType, ResetRegistrationFormActionType,
    UpdateValuesRegistrationFormActionType
} from "./Types/registrationType";

const postRegistration = (registrationFormValues: InitialStateType)
    : PostRegistrationActionType =>
    ({ type: POST_REGISTRATION, registrationFormValues })

const updateValuesRegistrationForm = (updatedValueRegistrationForm: any)
    : UpdateValuesRegistrationFormActionType =>
    ({ type: UPDATE_VALUES_REGISTRATION_FORM, updatedValueRegistrationForm })

const registration = ()
    : RegistrationActionType =>
    ({ type: REGISTRATION })

const resetRegistrationForm = ()
    : ResetRegistrationFormActionType =>
    ({ type: RESET_REGISTRATION_FORM })

export {registration, postRegistration, updateValuesRegistrationForm, resetRegistrationForm};
