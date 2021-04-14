import { ValuesLoginForm } from 'common/interfaces/login';

export interface LoginFormTypes extends ValuesLoginForm {
    onFinish: (values: ValuesLoginForm) => void;
    onChange: (value: ValuesLoginForm) => void;
    onRegisterClick: () => void;
}
