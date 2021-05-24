import { ValuesRegistrationForm } from 'common/types/registration';
import {
    PostRegistrationAction,
    RegistrationAction,
    ResetRegistrationFormAction,
    UpdateValuesRegistrationFormAction
} from 'redux/actions/registration/registration.interfaces';
import { History } from 'history';

const REGISTRATION = 'REGISTRATION';
const UPDATE_VALUES_REGISTRATION_FORM = 'UPDATE_VALUES_REGISTRATION_FORM';
const RESET_REGISTRATION_FORM = 'RESET_REGISTRATION_FORM';
const POST_REGISTRATION = 'POST_REGISTRATION';

const postRegistration = (
    registrationFormValues: ValuesRegistrationForm,
    history: History<unknown>
): PostRegistrationAction => ({
    type: POST_REGISTRATION,
    payload: { registrationFormValues, history }
});

const updateValuesRegistrationForm = (
    updatedValueRegistrationForm: ValuesRegistrationForm
): UpdateValuesRegistrationFormAction => ({
    type: UPDATE_VALUES_REGISTRATION_FORM,
    payload: { updatedValueRegistrationForm }
});

const registration = (): RegistrationAction => ({ type: REGISTRATION });

const resetRegistrationForm = (): ResetRegistrationFormAction => ({
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
