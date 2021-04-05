import React from 'react';
import { Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import {
    closeModal,
    resetCreateIncidentForm
} from 'redux/store/actions/incidents/incidentsCreator';
import { RootReducer } from 'redux/store/reducers/rootReducer';
import { IncidentsType } from 'redux/store/actions/incidents/interfaces';

const CloseModalButton = () => {
    const { actionWithCreateIncidentForm } = useSelector(
        ({ incidentsReducer }: RootReducer) => incidentsReducer
    );
    const dispatch = useDispatch<Dispatch<IncidentsType>>();

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
