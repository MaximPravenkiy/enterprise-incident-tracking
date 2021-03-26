import React from 'react';
import {Button, Space} from "antd";
import {useDispatch} from "react-redux";
import {
    changeAssigneeUserId,
    deleteIncident,
    getIncidents,
    getUsers, setDataForUpdating,
    updateValuesCreateIncidentForm
} from "../../../../redux/store/actions/incidentsCreator";
import {getDate} from "../../../../redux/store/reducers/incidentsReducer";
import {openMessage} from "../../../../containers/ServerResponseHandlers/Message";

const ActionButtons = ({incident}: any) => {
    const dispatch = useDispatch();

    const onDeleteIncident = (event: any) => {
        const incidentID = event.target.closest("button").dataset.key;

        openMessage();
        dispatch(deleteIncident(incidentID));
        dispatch(getIncidents());
    }

    const onEditIncident = (event: any) => {
        const currentIncident = JSON.parse(event.target.closest("button").dataset.incident);
        const userData = localStorage.getItem('userData');
        const incidentID = currentIncident.key;

        if (!userData) return;

        const assignOnCurrentUser = JSON.parse(userData).userId;

        dispatch(setDataForUpdating(incidentID))
        dispatch(changeAssigneeUserId(assignOnCurrentUser));
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