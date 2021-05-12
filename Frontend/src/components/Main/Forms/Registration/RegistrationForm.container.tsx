import React, { FC, memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import {
    postRegistration,
    updateValuesRegistrationForm
} from 'redux/actions/registration/registration.actions';
import { RootReducer } from 'redux/reducers/root.reducer';
import { RegistrationActions } from 'redux/actions/registration/registration.interfaces';
import { ValuesRegistrationForm } from 'common/types/registration';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { useDebouncedCallback } from 'use-debounce';
import { RegistrationForm } from './RegistrationForm';

const RegistrationFormContainer: FC<RouteComponentProps> = memo(
    ({ history }) => {
        const {
            dateOfBirth,
            fullname,
            login,
            password,
            position
        } = useSelector(
            ({ registrationReducer }: RootReducer) =>
                registrationReducer.valuesRegistrationForm
        );
        const dispatch = useDispatch<Dispatch<RegistrationActions>>();

        const registerNewUser = useCallback(
            (values: ValuesRegistrationForm) => {
                dispatch(postRegistration(values, history));
            },
            // eslint-disable-next-line react-hooks/exhaustive-deps
            []
        );

        const onChange = useCallback(
            (value: ValuesRegistrationForm) => {
                dispatch(updateValuesRegistrationForm(value));
            },
            // eslint-disable-next-line react-hooks/exhaustive-deps
            []
        );
        const debouncedOnChange = useDebouncedCallback(onChange, 500);

        return (
            <RegistrationForm
                registerNewUser={registerNewUser}
                dateOfBirth={dateOfBirth}
                fullname={fullname}
                login={login}
                password={password}
                position={position}
                onChange={debouncedOnChange}
            />
        );
    }
);

export default withRouter(RegistrationFormContainer);
