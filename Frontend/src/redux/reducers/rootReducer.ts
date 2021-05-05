import { combineReducers } from 'redux';
import { incidentsReducer, loginReducer, registrationReducer } from './index';

const rootReducer = combineReducers({
    loginReducer,
    registrationReducer,
    incidentsReducer
});

export type RootReducer = ReturnType<typeof rootReducer>;

export default rootReducer;
