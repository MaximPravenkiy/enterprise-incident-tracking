import { ValuesRegistrationForm } from 'common/types/registration';
import { History } from 'history';
import {
    POST_REGISTRATION,
    REGISTRATION,
    RESET_REGISTRATION_FORM,
    UPDATE_VALUES_REGISTRATION_FORM
} from './registration.actions';

export interface PostRegistrationAction {
    type: typeof POST_REGISTRATION;
    registrationFormValues: ValuesRegistrationForm;
    history: History<unknown>;
}

export interface UpdateValuesRegistrationFormAction {
    type: typeof UPDATE_VALUES_REGISTRATION_FORM;
    payload: { updatedValueRegistrationForm: ValuesRegistrationForm };
}

export interface RegistrationAction {
    type: typeof REGISTRATION;
}

export interface ResetRegistrationFormAction {
    type: typeof RESET_REGISTRATION_FORM;
}

export type RegistrationActionsType =
    | PostRegistrationAction
    | UpdateValuesRegistrationFormAction
    | RegistrationAction
    | ResetRegistrationFormAction;
