import React from 'react';
import {Button} from "antd";
import {closeModal} from "../../../../redux/store/actions/incidentsCreator";
import {useDispatch} from "react-redux";

const CloseModalButton = () => {
    const dispatch = useDispatch();

    return (
        <Button
            type="primary"
            shape="circle"
            danger
            onClick={() => dispatch(closeModal())}
        >
            X
        </Button>
    );
}

export default CloseModalButton;