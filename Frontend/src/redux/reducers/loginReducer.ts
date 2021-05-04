import { ValuesLoginForm, KeysType } from 'common/types/login';
import { LoginType } from 'redux/actions/login/login.interfaces';
import {
    RESET_LOGIN_FORM_VALUES,
    CHANGE_KEY_DEPS_ON_PATH,
    LOGIN,
    UPDATE_VALUES_LOGIN_FORM,
    LOGOUT
} from '../actions/login/login.actions';

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
                ...action.payload
            };
        case UPDATE_VALUES_LOGIN_FORM:
            return {
                ...state,
                valuesLoginForm: {
                    ...state.valuesLoginForm,
                    ...action.payload.updatedValueLoginForm
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
                ...action.payload
            };
        case RESET_LOGIN_FORM_VALUES:
            return {
                ...state,
                valuesLoginForm: initialState.valuesLoginForm
            };
        default:
            return state;
    }
}

export default loginReducer;
