import React from 'react';
import {Button, Space} from "antd";
import {useDispatch} from "react-redux";
import {deleteIncident, getIncidents} from "../../../../redux/store/actions/incidentsCreator";

const ActionButtons = ({incidentKey}: any) => {
    const dispatch = useDispatch();

    const onDeleteIncident = (event: any) => {
        const incidentID = event.target.closest("button").dataset.key;
        dispatch(deleteIncident(incidentID));
        dispatch(getIncidents());
    }

    const onEditIncident = (event: any) => {
        const incidentID = event.target.closest("button").dataset.key;
        console.log(incidentID)
    }

    return (
        <Space size="middle">
            <Button
                type="link"
                onClick={onEditIncident}
                data-key={incidentKey}
            >
                Edit
            </Button>
            <Button
                type="link"
                onClick={onDeleteIncident}
                data-key={incidentKey}
            >
                Delete
            </Button>
        </Space>
    );
}

export default ActionButtons;