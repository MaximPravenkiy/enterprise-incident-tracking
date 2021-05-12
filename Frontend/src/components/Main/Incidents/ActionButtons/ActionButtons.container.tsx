import React, { FC, memo, useCallback } from 'react';
import { connect } from 'react-redux';
import {
    deleteIncident,
    getUsers,
    setDataForUpdating,
    showEditIncident
} from 'redux/actions/incidents/incidents.actions';
import ActionButtons from './ActionButtons';
import { ActionButtonsContainerProps } from './ActionButtons.interfaces';

const ActionButtonsContainer: FC<ActionButtonsContainerProps> = memo(
    ({
        incident,
        dispatchGetUsers,
        dispatchSetDataForUpdating,
        dispatchDeleteIncident,
        dispatchShowEditIncident
    }) => {
        const onDeleteIncident = useCallback(() => {
            const incidentID = incident.key;

            dispatchDeleteIncident(incidentID);
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);

        const onEditIncident = useCallback(() => {
            const editedIncidentId = incident.key;

            dispatchGetUsers();
            dispatchShowEditIncident();
            dispatchSetDataForUpdating(editedIncidentId);
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);

        return (
            <ActionButtons
                onEditIncident={onEditIncident}
                onDeleteIncident={onDeleteIncident}
            />
        );
    }
);

const mapDispatchToProps = {
    dispatchGetUsers: getUsers,
    dispatchSetDataForUpdating: setDataForUpdating,
    dispatchDeleteIncident: deleteIncident,
    dispatchShowEditIncident: showEditIncident
};

export default connect(null, mapDispatchToProps)(ActionButtonsContainer);
