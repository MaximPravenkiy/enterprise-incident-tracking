import {
    LoginAction,
    LogoutAction,
    OnLogoutAction
} from 'redux/actions/userInfo/userInfo.interfaces';

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const ON_LOGOUT = 'ON_LOGOUT';

const login = (fullname: string): LoginAction => ({
    type: LOGIN,
    payload: { fullname }
});

const logout = (): LogoutAction => ({ type: LOGOUT });

const onLogout = (): OnLogoutAction => ({ type: ON_LOGOUT });

export { login, logout, onLogout, LOGOUT, LOGIN, ON_LOGOUT };
