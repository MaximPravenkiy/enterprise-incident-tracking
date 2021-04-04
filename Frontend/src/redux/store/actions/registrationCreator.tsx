import {
    POST_REGISTRATION,
    REGISTRATION,
    RESET_REGISTRATION_FORM,
    UPDATE_VALUES_REGISTRATION_FORM
} from 'redux/store/actions/actionTypes';
import {
    PostRegistrationActionType,
    RegistrationActionType,
    RegistrationInitialStateType,
    ResetRegistrationFormActionType,
    UpdateValuesRegistrationFormActionType
} from 'redux/store/reducers/registrationReducer';

const postRegistration = (
    registrationFormValues: RegistrationInitialStateType
): PostRegistrationActionType => ({
    type: POST_REGISTRATION,
    registrationFormValues
});

const updateValuesRegistrationForm = (
    updatedValueRegistrationForm: RegistrationInitialStateType
): UpdateValuesRegistrationFormActionType => ({
    type: UPDATE_VALUES_REGISTRATION_FORM,
    updatedValueRegistrationForm
});

const registration = (): RegistrationActionType => ({ type: REGISTRATION });

const resetRegistrationForm = (): ResetRegistrationFormActionType => ({
    type: RESET_REGISTRATION_FORM
});

export {
    registration,
    postRegistration,
    updateValuesRegistrationForm,
    resetRegistrationForm
};
