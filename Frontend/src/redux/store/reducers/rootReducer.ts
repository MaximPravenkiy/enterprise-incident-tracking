import { combineReducers } from 'redux';
import loginReducer from 'redux/store/reducers/loginReducer';
import registrationReducer from 'redux/store/reducers/registrationReducer';
import incidentsReducer from 'redux/store/reducers/incidentsReducer';

const rootReducer = combineReducers({
    loginReducer,
    registrationReducer,
    incidentsReducer
});

export type RootReducer = ReturnType<typeof rootReducer>;

export default rootReducer;
