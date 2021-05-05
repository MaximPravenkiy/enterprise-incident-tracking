import { ValuesLoginForm, KeysType } from 'common/types/login';
import { LoginActions } from 'redux/actions/login/login.interfaces';
import {
    RESET_LOGIN_FORM_VALUES,
    CHANGE_KEY_DEPS_ON_PATH,
    UPDATE_VALUES_LOGIN_FORM
} from '../actions/login/login.actions';

type LoginInitialState = typeof initialState;

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
    action: LoginActions
): LoginInitialState {
    switch (action.type) {
        case UPDATE_VALUES_LOGIN_FORM:
            return {
                ...state,
                valuesLoginForm: {
                    ...state.valuesLoginForm,
                    ...action.payload.updatedValueLoginForm
                }
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
