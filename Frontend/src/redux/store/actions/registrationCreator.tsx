import {POST_REGISTRATION, REGISTRATION, RESET_REGISTRATION_FORM, UPDATE_VALUES_REGISTRATION_FORM} from "./actionTypes";
import {RegistrationInitialStateType} from "../reducers/registrationReducer";
import {
    PostRegistrationActionType,
    RegistrationActionType, ResetRegistrationFormActionType,
    UpdateValuesRegistrationFormActionType
} from "./Types/registrationType";

const postRegistration = (registrationFormValues: RegistrationInitialStateType)
    : PostRegistrationActionType =>
    ({ type: POST_REGISTRATION, registrationFormValues })

const updateValuesRegistrationForm = (updatedValueRegistrationForm: RegistrationInitialStateType)
    : UpdateValuesRegistrationFormActionType =>
    ({ type: UPDATE_VALUES_REGISTRATION_FORM, updatedValueRegistrationForm })

const registration = ()
    : RegistrationActionType =>
    ({ type: REGISTRATION })

const resetRegistrationForm = ()
    : ResetRegistrationFormActionType =>
    ({ type: RESET_REGISTRATION_FORM })

export {registration, postRegistration, updateValuesRegistrationForm, resetRegistrationForm};
