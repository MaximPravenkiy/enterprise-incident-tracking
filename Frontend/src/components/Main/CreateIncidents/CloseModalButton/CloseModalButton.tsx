import React from 'react';
import {Button} from "antd";
import {closeModal, resetCreateIncidentForm} from "../../../../redux/store/actions/incidentsCreator";
import {useDispatch, useSelector} from "react-redux";
import {RootReducer} from "../../../../redux/store/reducers/rootReducer";
import {Dispatch} from "redux";
import {IncidentsType} from "../../../../redux/store/actions/Types/incidentsTypes";

const CloseModalButton = () => {
    const {actionWithCreateIncidentForm} = useSelector(({incidentsReducer}: RootReducer) => incidentsReducer)
    const dispatch = useDispatch<Dispatch<IncidentsType>>();

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