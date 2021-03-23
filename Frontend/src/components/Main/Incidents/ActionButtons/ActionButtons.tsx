import React from 'react';
import {Button, Space} from "antd";
import {useDispatch} from "react-redux";
import {
    deleteIncident,
    getIncidents,
    getUsers,
    updateValuesCreateIncidentForm
} from "../../../../redux/store/actions/incidentsCreator";
import {getDate} from "../../../../redux/store/reducers/incidentsReducer";

const ActionButtons = ({incident}: any) => {
    const dispatch = useDispatch();

    const onDeleteIncident = (event: any) => {
        const incidentID = event.target.closest("button").dataset.key;

        dispatch(deleteIncident(incidentID));
        dispatch(getIncidents());
    }

    const onEditIncident = (event: any) => {
        const currentIncident = JSON.parse(event.target.closest("button").dataset.incident);
        console.log(currentIncident)

        dispatch(updateValuesCreateIncidentForm({
            ...currentIncident,
            startDate: getDate(currentIncident.startDate),
            dueDate: getDate(currentIncident.dueDate),
        }));
        dispatch(getUsers());
    }

    return (
        <Space size="middle">
            <Button
                type="link"
                onClick={onEditIncident}
                data-incident={JSON.stringify(incident)}
            >
                Edit
            </Button>
            <Button
                type="link"
                onClick={onDeleteIncident}
                data-key={incident.key}
            >
                Delete
            </Button>
        </Space>
    );
}

export default ActionButtons;