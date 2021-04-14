import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { RegistrationForm } from 'components/Main/Forms/Registration/RegistrationForm';
import {
    postRegistration,
    updateValuesRegistrationForm
} from 'redux/store/actions/registration/registrationCreator';
import { RootReducer } from 'redux/store/reducers/rootReducer';
import { openMessage } from 'common/ServerResponseHandlers/Message';
import { RegistrationType } from 'redux/store/actions/registration/interfaces';
import { ValuesRegistrationForm } from 'common/interfaces/registration';

const RegistrationContainer = () => {
    const { dateOfBirth, fullname, login, password, position } = useSelector(
        ({ registrationReducer }: RootReducer) =>
            registrationReducer.valuesRegistrationForm
    );
    const dispatch = useDispatch<Dispatch<RegistrationType>>();

    const registerNewUser = (values: ValuesRegistrationForm) => {
        openMessage('Проверяем данные...');
        dispatch(postRegistration(values));
    };

    const onChange = (value: ValuesRegistrationForm) => {
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
