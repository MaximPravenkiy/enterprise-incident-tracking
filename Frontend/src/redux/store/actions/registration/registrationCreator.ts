import {
    POST_REGISTRATION,
    REGISTRATION,
    RESET_REGISTRATION_FORM,
    UPDATE_VALUES_REGISTRATION_FORM
} from 'redux/store/actions/actionTypes';
import { IValuesRegistrationForm } from 'common/interfaces/registration';
import {
    PostRegistrationActionType,
    RegistrationActionType,
    ResetRegistrationFormActionType,
    UpdateValuesRegistrationFormActionType
} from 'redux/store/actions/registration/interfaces';

const postRegistration = (
    registrationFormValues: IValuesRegistrationForm
): PostRegistrationActionType => ({
    type: POST_REGISTRATION,
    registrationFormValues
});

const updateValuesRegistrationForm = (
    updatedValueRegistrationForm: IValuesRegistrationForm
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
