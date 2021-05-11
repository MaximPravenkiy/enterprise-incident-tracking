import React, { FC } from 'react';
import { connect } from 'react-redux';
import {
    deleteIncident,
    getUsers,
    setDataForUpdating,
    showEditIncident
} from 'redux/actions/incidents/incidents.actions';
import ActionButtons from './ActionButtons';
import { ActionButtonsContainerProps } from './ActionButtons.interfaces';

const ActionButtonsContainer: FC<ActionButtonsContainerProps> = ({
    incident,
    dispatchGetUsers,
    dispatchSetDataForUpdating,
    dispatchDeleteIncident,
    dispatchShowEditIncident
}) => {
    const onDeleteIncident = () => {
        const incidentID = incident.key;

        dispatchDeleteIncident({ incidentID });
    };

    const onEditIncident = () => {
        const editedIncidentId = incident.key;

        dispatchGetUsers();
        dispatchShowEditIncident();
        dispatchSetDataForUpdating({ editedIncidentId });
    };

    return (
        <ActionButtons
            onEditIncident={onEditIncident}
            onDeleteIncident={onDeleteIncident}
        />
    );
};

const mapDispatchToProps = {
    dispatchGetUsers: getUsers,
    dispatchSetDataForUpdating: setDataForUpdating,
    dispatchDeleteIncident: deleteIncident,
    dispatchShowEditIncident: showEditIncident
};

export default connect(null, mapDispatchToProps)(ActionButtonsContainer);
