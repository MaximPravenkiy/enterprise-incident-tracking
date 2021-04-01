import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { RegistrationForm } from '../components/Forms/RegistrationForm';
import {
    postRegistration,
    updateValuesRegistrationForm
} from '../redux/store/actions/registrationCreator';
import { openMessage } from './ServerResponseHandlers/Message';
import { RootReducer } from '../redux/store/reducers/rootReducer';
import {
    RegistrationInitialStateType,
    RegistrationType
} from '../redux/store/reducers/registrationReducer';

const RegistrationContainer = () => {
    const { dateOfBirth, fullname, login, password, position } = useSelector(
        ({ registrationReducer }: RootReducer) => registrationReducer
    );
    const dispatch = useDispatch<Dispatch<RegistrationType>>();

    const registerNewUser = (values: RegistrationInitialStateType) => {
        openMessage('Проверяем данные...');
        dispatch(postRegistration(values));
    };

    const onChange = (value: RegistrationInitialStateType) => {
        dispatch(updateValuesRegistrationForm(value));
    };

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
};

export default RegistrationContainer;
