import moment from 'moment';
import {
    RESET_REGISTRATION_FORM,
    UPDATE_VALUES_REGISTRATION_FORM
} from 'redux/store/actions/actionTypes';
import { RegistrationType } from 'redux/store/actions/registration/interfaces';
import { ValuesRegistrationForm } from 'common/interfaces/registration';

type RegistrationInitialStateType = typeof initialState;

const initialState = {
    valuesRegistrationForm: {
        dateOfBirth: null as null | moment.Moment,
        fullname: '',
        login: '',
        password: '',
        position: ''
    } as ValuesRegistrationForm
};

function registrationReducer(
    state = initialState,
    action: RegistrationType
): RegistrationInitialStateType {
    switch (action.type) {
        case UPDATE_VALUES_REGISTRATION_FORM:
            return {
                ...state,
                valuesRegistrationForm: {
                    ...state.valuesRegistrationForm,
                    ...action.updatedValueRegistrationForm
                }
            };
        case RESET_REGISTRATION_FORM:
            return {
                ...state,
                valuesRegistrationForm: initialState.valuesRegistrationForm
            };
        default:
            return state;
    }
}

export default registrationReducer;
