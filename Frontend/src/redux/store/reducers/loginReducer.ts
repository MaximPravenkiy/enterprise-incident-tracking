import {
    CHANGE_KEY_DEPS_ON_PATH,
    LOGIN,
    LOGOUT,
    UPDATE_VALUES_LOGIN_FORM
} from 'redux/store/actions/actionTypes';
import { ValuesLoginForm, KeysType } from 'common/interfaces/login';
import { LoginType } from 'redux/store/actions/login/interfaces';

type LoginInitialStateType = typeof initialState;

const initialState = {
    valuesLoginForm: {
        login: '',
        password: '',
        remember: false
    } as ValuesLoginForm,
    fullname: '',
    isAuth: false,
    keyDepsOnPath: '' as KeysType
};

function loginReducer(
    state = initialState,
    action: LoginType
): LoginInitialStateType {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                isAuth: true,
                fullname: action.userData
            };
        case UPDATE_VALUES_LOGIN_FORM:
            return {
                ...state,
                valuesLoginForm: {
                    ...state.valuesLoginForm,
                    ...action.updatedValueLoginForm
                }
            };
        case LOGOUT:
            return {
                ...state,
                isAuth: false
            };
        case CHANGE_KEY_DEPS_ON_PATH:
            return {
                ...state,
                keyDepsOnPath: action.keyDepsOnPath
            };
        default:
            return state;
    }
}

export default loginReducer;
