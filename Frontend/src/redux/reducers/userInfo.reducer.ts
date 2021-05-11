import { UserInfoActions } from 'redux/actions/userInfo/userInfo.interfaces';
import { LOGIN, LOGOUT } from 'redux/actions/userInfo/userInfo.actions';

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
