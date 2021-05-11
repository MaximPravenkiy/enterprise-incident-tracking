import { RestorePasswordFormValue } from 'common/types/login';

export interface ForgotPasswordFormProps {
    onFinish: (values: RestorePasswordFormValue) => void;
}