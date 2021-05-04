import { ValuesRegistrationForm } from 'common/types/registration';
import {
    PostRegistrationActionType,
    RegistrationActionType,
    ResetRegistrationFormActionType,
    UpdateValuesRegistrationFormActionType
} from 'redux/actions/registration/registration.interfaces';
import { History } from 'history';

const REGISTRATION = 'REGISTRATION';
const UPDATE_VALUES_REGISTRATION_FORM = 'UPDATE_VALUES_REGISTRATION_FORM';
const RESET_REGISTRATION_FORM = 'RESET_REGISTRATION_FORM';
const POST_REGISTRATION = 'POST_REGISTRATION';

const postRegistration = (
    registrationFormValues: ValuesRegistrationForm,
    history: History<unknown>
): PostRegistrationActionType => ({
    type: POST_REGISTRATION,
    registrationFormValues,
    history
});

const updateValuesRegistrationForm = (payload: {
    updatedValueRegistrationForm: ValuesRegistrationForm;
}): UpdateValuesRegistrationFormActionType => ({
    type: UPDATE_VALUES_REGISTRATION_FORM,
    payload
});

const registration = (): RegistrationActionType => ({ type: REGISTRATION });

const resetRegistrationForm = (): ResetRegistrationFormActionType => ({
    type: RESET_REGISTRATION_FORM
});

export {
    registration,
    postRegistration,
    updateValuesRegistrationForm,
    resetRegistrationForm,
    POST_REGISTRATION,
    RESET_REGISTRATION_FORM,
    UPDATE_VALUES_REGISTRATION_FORM,
    REGISTRATION
};
