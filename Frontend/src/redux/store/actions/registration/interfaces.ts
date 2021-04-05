import {
    POST_REGISTRATION,
    REGISTRATION,
    RESET_REGISTRATION_FORM,
    UPDATE_VALUES_REGISTRATION_FORM
} from 'redux/store/actions/actionTypes';
import { IValuesRegistrationForm } from 'common/interfaces/registration';

export interface PostRegistrationActionType {
    type: typeof POST_REGISTRATION;
    registrationFormValues: IValuesRegistrationForm;
}

export interface UpdateValuesRegistrationFormActionType {
    type: typeof UPDATE_VALUES_REGISTRATION_FORM;
    updatedValueRegistrationForm: IValuesRegistrationForm;
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
