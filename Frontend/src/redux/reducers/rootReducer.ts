import { combineReducers } from 'redux';
import loginReducer from 'redux/reducers/loginReducer';
import registrationReducer from 'redux/reducers/registrationReducer';
import incidentsReducer from 'redux/reducers/incidentsReducer';

const rootReducer = combineReducers({
    loginReducer,
    registrationReducer,
    incidentsReducer
});

export type RootReducer = ReturnType<typeof rootReducer>;

export default rootReducer;
