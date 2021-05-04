import { ValuesRegistrationForm } from 'common/types/registration';
import { History } from 'history';
import {
    POST_REGISTRATION,
    REGISTRATION,
    RESET_REGISTRATION_FORM,
    UPDATE_VALUES_REGISTRATION_FORM
} from './registration.actions';

interface PostRegistrationAction {
    type: typeof POST_REGISTRATION;
    registrationFormValues: ValuesRegistrationForm;
    history: History<unknown>;
}

interface UpdateValuesRegistrationFormAction {
    type: typeof UPDATE_VALUES_REGISTRATION_FORM;
    payload: { updatedValueRegistrationForm: ValuesRegistrationForm };
}

interface RegistrationAction {
    type: typeof REGISTRATION;
}

interface ResetRegistrationFormAction {
    type: typeof RESET_REGISTRATION_FORM;
}

type RegistrationActions =
    | PostRegistrationAction
    | UpdateValuesRegistrationFormAction
    | RegistrationAction
    | ResetRegistrationFormAction;

export type {
    RegistrationActions,
    PostRegistrationAction,
    UpdateValuesRegistrationFormAction,
    RegistrationAction,
    ResetRegistrationFormAction
};
