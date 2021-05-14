import { combineReducers } from 'redux';
import {
    incidentsReducer,
    loginReducer,
    registrationReducer,
    userInfoReducer
} from './index';

const rootReducer = combineReducers({
    loginReducer,
    registrationReducer,
    incidentsReducer,
    userInfoReducer
});

export type RootReducer = ReturnType<typeof rootReducer>;

export default rootReducer;
