import React from 'react';
import { Button } from 'antd';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { closeModal } from 'redux/actions/incidents/incidents.actions';
import { IncidentsActions } from 'redux/actions/incidents/incidents.interfaces';
import { ActionWithIncidentForm } from '../IncidentForm.interfaces';

const CloseModalButton = ({
    actionWithIncidentForm
}: {
    actionWithIncidentForm: ActionWithIncidentForm;
}) => {
    const dispatch = useDispatch<Dispatch<IncidentsActions>>();

    const onCloseModal = () => {
        dispatch(closeModal());
    };

    return (
        <Button type="primary" shape="circle" danger onClick={onCloseModal}>
            X
        </Button>
    );
};

export default CloseModalButton;
