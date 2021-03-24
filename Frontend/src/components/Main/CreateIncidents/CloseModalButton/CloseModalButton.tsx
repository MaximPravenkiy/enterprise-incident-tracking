import React from 'react';
import {Button} from "antd";
import {closeModal, resetCreateIncidentForm} from "../../../../redux/store/actions/incidentsCreator";
import {useDispatch, useSelector} from "react-redux";

const CloseModalButton = () => {
    const {actionWithCreateIncidentForm} = useSelector(({incidentsReducer}: any) => incidentsReducer)
    const dispatch = useDispatch();

    const onCloseModal = () => {
        dispatch(closeModal());

        if (actionWithCreateIncidentForm === 'Обновить') {
            dispatch(resetCreateIncidentForm());
        }
    }

    return (
        <Button
            type="primary"
            shape="circle"
            danger
            onClick={onCloseModal}
        >
            X
        </Button>
    );
}

export default CloseModalButton;