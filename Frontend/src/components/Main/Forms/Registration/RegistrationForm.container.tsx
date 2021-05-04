import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { RegistrationForm } from 'components/Main/Forms/Registration/RegistrationForm';
import {
    postRegistration,
    updateValuesRegistrationForm
} from 'redux/actions/registration/registration.actions';
import { RootReducer } from 'redux/reducers/rootReducer';
import { RegistrationActionsType } from 'redux/actions/registration/registration.interfaces';
import { ValuesRegistrationForm } from 'common/types/registration';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { openMessage } from 'common/services/notification.services';

const RegistrationFormContainer: FC<RouteComponentProps> = ({ history }) => {
    const { dateOfBirth, fullname, login, password, position } = useSelector(
        ({ registrationReducer }: RootReducer) =>
            registrationReducer.valuesRegistrationForm
    );
    const dispatch = useDispatch<Dispatch<RegistrationActionsType>>();

    const registerNewUser = (values: ValuesRegistrationForm) => {
        openMessage('Проверяем данные...');
        dispatch(postRegistration(values, history));
    };

    const onChange = (value: ValuesRegistrationForm) => {
        dispatch(
            updateValuesRegistrationForm({
                updatedValueRegistrationForm: value
            })
        );
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

export default withRouter(RegistrationFormContainer);
