import { ValuesRegistrationForm } from 'common/types/registration';

export interface RegistrationFormTypes extends ValuesRegistrationForm {
    registerNewUser: (values: ValuesRegistrationForm) => void;
    onChange: (value: ValuesRegistrationForm) => void;
}
