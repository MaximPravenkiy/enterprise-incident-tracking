import { ValuesLoginForm } from 'common/types/login';
import { LoginActions } from 'redux/actions/login/login.interfaces';
import {
    RESET_LOGIN_FORM_VALUES,
    UPDATE_VALUES_LOGIN_FORM
} from 'redux/actions/login/login.actions';

type LoginInitialState = typeof initialState;

const initialState = {
    valuesLoginForm: {
        login: '',
        password: '',
        remember: false
    } as ValuesLoginForm,
    fullname: '',
    isAuth: false
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
