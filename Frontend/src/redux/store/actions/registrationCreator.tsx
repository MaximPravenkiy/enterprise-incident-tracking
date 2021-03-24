import {POST_REGISTRATION, REGISTRATION, UPDATE_VALUES_REGISTRATION_FORM} from "./actionTypes";

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

export {registration, postRegistration, updateValuesRegistrationForm};
