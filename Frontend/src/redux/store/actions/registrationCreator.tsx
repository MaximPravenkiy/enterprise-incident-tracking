import {POST_REGISTRATION, REGISTRATION, RESET_REGISTRATION_FORM, UPDATE_VALUES_REGISTRATION_FORM} from "./actionTypes";

const postRegistration = (values: any) => ({ type: POST_REGISTRATION, values })

const updateValuesRegistrationForm = (values: any) => ({ type: UPDATE_VALUES_REGISTRATION_FORM, values })

const registration = () => ({ type: REGISTRATION })

const resetRegistrationForm = () => ({ type: RESET_REGISTRATION_FORM })

export {registration, postRegistration, updateValuesRegistrationForm, resetRegistrationForm};
