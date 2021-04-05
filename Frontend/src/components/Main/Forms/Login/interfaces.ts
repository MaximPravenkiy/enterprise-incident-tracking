import { IValuesLoginForm } from 'common/interfaces/login';

export interface LoginFormTypes extends IValuesLoginForm {
    onFinish: (values: IValuesLoginForm) => void;
    onChange: (value: IValuesLoginForm) => void;
    onRegisterClick: () => void;
}
