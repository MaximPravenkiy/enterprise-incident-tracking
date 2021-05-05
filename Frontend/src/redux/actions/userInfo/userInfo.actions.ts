import { LoginAction, LogoutAction } from './userInfo.interfaces';

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const login = (payload: { fullname: string }): LoginAction => ({
    type: LOGIN,
    payload
});

const logout = (): LogoutAction => ({ type: LOGOUT });

export { login, logout, LOGOUT, LOGIN };
