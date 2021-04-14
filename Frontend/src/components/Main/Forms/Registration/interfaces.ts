import { ValuesRegistrationForm } from 'common/interfaces/registration';

export interface RegistrationFormTypes extends ValuesRegistrationForm {
    registerNewUser: (values: ValuesRegistrationForm) => void;
    onChange: (value: ValuesRegistrationForm) => void;
}
