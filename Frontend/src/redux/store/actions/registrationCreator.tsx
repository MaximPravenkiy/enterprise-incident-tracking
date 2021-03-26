import {POST_REGISTRATION, REGISTRATION, RESET_REGISTRATION_FORM, UPDATE_VALUES_REGISTRATION_FORM} from "./actionTypes";

function postRegistration(values: any) {
    return {
        type: POST_REGISTRATION,
        values
    }
}

function updateValuesRegistrationForm(values: any) {
    return {
        type: UPDATE_VALUES_REGISTRATION_FORM,
        values
    }
}

function registration() {
    return {
        type: REGISTRATION
    }
}

function resetRegistrationForm() {
    return {
        type: RESET_REGISTRATION_FORM
    }
}

export {registration, postRegistration, updateValuesRegistrationForm, resetRegistrationForm};
