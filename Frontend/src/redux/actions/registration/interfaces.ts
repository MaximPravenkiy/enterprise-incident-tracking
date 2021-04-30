import {
    POST_REGISTRATION,
    REGISTRATION,
    RESET_REGISTRATION_FORM,
    UPDATE_VALUES_REGISTRATION_FORM
} from 'redux/actions/actionTypes';
import { ValuesRegistrationForm } from 'common/types/registration';
import { History } from 'history';

export interface PostRegistrationActionType {
    type: typeof POST_REGISTRATION;
    registrationFormValues: ValuesRegistrationForm;
    history: History<unknown>;
}

export interface UpdateValuesRegistrationFormActionType {
    type: typeof UPDATE_VALUES_REGISTRATION_FORM;
    updatedValueRegistrationForm: ValuesRegistrationForm;
}

export interface RegistrationActionType {
    type: typeof REGISTRATION;
}

export interface ResetRegistrationFormActionType {
    type: typeof RESET_REGISTRATION_FORM;
}

export type RegistrationType =
    | PostRegistrationActionType
    | UpdateValuesRegistrationFormActionType
    | RegistrationActionType
    | ResetRegistrationFormActionType;
