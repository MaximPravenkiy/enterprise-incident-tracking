import {combineReducers} from "redux";
import loginReducer from "./loginReducer";
import registrationReducer from "./registrationReducer";

const rootReducer = combineReducers({
    loginReducer: loginReducer,
    registrationReducer
});

export default rootReducer;