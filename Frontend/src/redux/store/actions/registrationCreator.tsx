import {POST_REGISTRATION, REGISTRATION} from "./actionTypes";

function postRegistration(values: any) {
    return {
        type: POST_REGISTRATION,
        values
    }
}

function registration() {
    return {
        type: REGISTRATION
    }
}

export {registration, postRegistration};
