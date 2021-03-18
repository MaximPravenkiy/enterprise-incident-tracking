import {combineReducers} from "redux";
import loginReducer from "./loginReducer";
import registrationReducer from "./registrationReducer";
import incidentsReducer from "./incidentsReducer";

const rootReducer = combineReducers({
    loginReducer,
    registrationReducer,
    incidentsReducer
});

export default rootReducer;