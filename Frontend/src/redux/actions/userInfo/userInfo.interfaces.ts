import { LOGIN, LOGOUT, ON_LOGOUT } from './userInfo.actions';

interface LoginAction {
    type: typeof LOGIN;
    payload: { fullname: string };
}

interface LogoutAction {
    type: typeof LOGOUT;
}

interface OnLogoutAction {
    type: typeof ON_LOGOUT;
}

type UserInfoActions = LoginAction | LogoutAction | OnLogoutAction;

export type { UserInfoActions, LogoutAction, LoginAction, OnLogoutAction };
