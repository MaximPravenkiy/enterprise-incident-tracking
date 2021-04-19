import {
    POST_REGISTRATION,
    REGISTRATION,
    RESET_REGISTRATION_FORM,
    UPDATE_VALUES_REGISTRATION_FORM
} from 'redux/store/actions/actionTypes';
import { ValuesRegistrationForm } from 'common/interfaces/registration';
import {
    PostRegistrationActionType,
    RegistrationActionType,
    ResetRegistrationFormActionType,
    UpdateValuesRegistrationFormActionType
} from 'redux/store/actions/registration/interfaces';
import { History } from 'history';

const postRegistration = (
    registrationFormValues: ValuesRegistrationForm,
    history: History<unknown>
): PostRegistrationActionType => ({
    type: POST_REGISTRATION,
    registrationFormValues,
    history
});

const updateValuesRegistrationForm = (
    updatedValueRegistrationForm: ValuesRegistrationForm
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
