import { LOGIN, LOGOUT } from 'redux/actions/userInfo/userInfo.actions';

interface LoginAction {
    type: typeof LOGIN;
    payload: { fullname: string };
}

interface LogoutAction {
    type: typeof LOGOUT;
}

type UserInfoActions = LoginAction | LogoutAction;

export type { UserInfoActions, LogoutAction, LoginAction };
