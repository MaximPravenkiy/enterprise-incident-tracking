import React from 'react';
import { Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import {
    closeModal,
    resetCreateIncidentForm
} from 'redux/actions/incidents/incidents.actions';
import { RootReducer } from 'redux/reducers/rootReducer';
import { IncidentsActionsType } from 'redux/actions/incidents/incidents.interfaces';

const CloseModalButton = () => {
    const { actionWithCreateIncidentForm } = useSelector(
        ({ incidentsReducer }: RootReducer) => incidentsReducer
    );
    const dispatch = useDispatch<Dispatch<IncidentsActionsType>>();

    const onCloseModal = () => {
        dispatch(closeModal());

        if (actionWithCreateIncidentForm === 'Обновить') {
            dispatch(resetCreateIncidentForm());
        }
    };

    return (
        <Button type="primary" shape="circle" danger onClick={onCloseModal}>
            X
        </Button>
    );
};

export default CloseModalButton;
