import React from 'react';
import {RegistrationForm} from "../components/Forms/RegistrationForm";
import {useDispatch, useSelector} from "react-redux";
import {postRegistration, updateValuesRegistrationForm} from "../redux/store/actions/registrationCreator";
import {openMessage} from "./ServerResponseHandlers/Message";
import {RootReducer} from "../redux/store/reducers/rootReducer";
import {Dispatch} from "redux";
import {RegistrationType} from "../redux/store/actions/Types/registrationType";
import {RegistrationInitialStateType} from "../redux/store/reducers/registrationReducer";

export type RegistrationFormTypes = RegistrationInitialStateType & {
    registerNewUser: (values: RegistrationInitialStateType) => void
    onChange: (value: RegistrationInitialStateType) => void
}

const RegistrationContainer = () => {
    const {
        dateOfBirth,
        fullname,
        login,
        password,
        position,
    } = useSelector(({registrationReducer}: RootReducer) => registrationReducer);
    const dispatch = useDispatch<Dispatch<RegistrationType>>();

    const registerNewUser = (values: RegistrationInitialStateType) => {
        console.log('Received values of form: ', values);
        openMessage('Проверяем данные...');
        dispatch(postRegistration(values));
    };

    const onChange = (value: RegistrationInitialStateType) => {
        dispatch(updateValuesRegistrationForm(value));
    }

    return (
        <RegistrationForm
            registerNewUser={registerNewUser}
            dateOfBirth={dateOfBirth}
            fullname={fullname}
            login={login}
            password={password}
            position={position}
            onChange={onChange}
        />
    );
}

export default RegistrationContainer;