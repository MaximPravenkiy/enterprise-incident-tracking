import React from 'react';
import {RegistrationForm} from "../components/Forms/RegistrationForm";
import {useDispatch, useSelector} from "react-redux";
import {postRegistration, updateValuesRegistrationForm} from "../redux/store/actions/registrationCreator";
import {openMessage} from "./ServerResponseHandlers/Message";

export interface RegistrationProps {
    registerNewUser: any,
    dateOfBirth: any,
    fullname: any,
    login: any,
    password: any,
    position: any,
    onChange: any
}

const RegistrationContainer = () => {
    const {
        dateOfBirth,
        fullname,
        login,
        password,
        position,
    } = useSelector(({registrationReducer}: any) => registrationReducer);
    const dispatch = useDispatch();

    const registerNewUser = async (values: any) => {
        console.log('Received values of form: ', values);
        openMessage('Проверяем данные...');
        dispatch(postRegistration(values));
    };

    const onChange = (values: any) => {
        dispatch(updateValuesRegistrationForm(values));
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