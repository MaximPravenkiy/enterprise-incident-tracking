import { IValuesRegistrationForm } from 'common/interfaces/registration';

export interface RegistrationFormTypes extends IValuesRegistrationForm {
    registerNewUser: (values: IValuesRegistrationForm) => void;
    onChange: (value: IValuesRegistrationForm) => void;
}
