import { ValuesLoginForm } from 'common/types/login';

export interface LoginFormTypes extends ValuesLoginForm {
    onFinish: (values: ValuesLoginForm) => void;
    onChange: (value: ValuesLoginForm) => void;
    onRegisterNowClick: () => void;
    onForgotPasswordClick: () => void;
}
