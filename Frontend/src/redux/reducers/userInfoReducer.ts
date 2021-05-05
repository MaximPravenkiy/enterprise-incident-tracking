import { UserInfoActions } from '../actions/userInfo/userInfo.interfaces';
import { LOGIN, LOGOUT } from '../actions/userInfo/userInfo.actions';

type UserInfoInitialState = typeof initialState;

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
