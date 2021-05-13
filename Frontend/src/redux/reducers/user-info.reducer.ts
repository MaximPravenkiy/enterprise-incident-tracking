import { UserInfoActions } from 'redux/actions/user-info/user-info.interfaces';
import { LOGIN, LOGOUT } from 'redux/actions/user-info/user-info.actions';

interface UserInfoInitialState {
    fullname: string;
    isAuth: boolean;
}

const initialState = {
    fullname: '',
    isAuth: false
};

function userInfoReducer(
    state = initialState,
    action: UserInfoActions
): UserInfoInitialState {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                isAuth: true,
                ...action.payload
            };
        case LOGOUT:
            return {
                ...state,
                isAuth: false
            };
        default:
            return state;
    }
}

export default userInfoReducer;
