import React, { FC } from 'react';
import { connect } from 'react-redux';
import {
    deleteIncident,
    getUsers,
    setDataForUpdating,
    updateValuesCreateIncidentForm
} from 'redux/actions/incidents/incidents.actions';
import { getDate } from 'common/helpers';
import ActionButtons from './ActionButtons';
import { ActionButtonsContainerProps } from './ActionButtons.interfaces';

const ActionButtonsContainer: FC<ActionButtonsContainerProps> = ({
    incident,
    dispatchGetUsers,
    dispatchUpdateValuesCreateIncidentForm,
    dispatchSetDataForUpdating,
    dispatchDeleteIncident
}) => {
    const onDeleteIncident = () => {
        const incidentID = incident.key;

        dispatchDeleteIncident({ incidentID });
    };

    const onEditIncident = () => {
        const incidentID = incident.key;

        dispatchSetDataForUpdating({ incidentID });
        dispatchUpdateValuesCreateIncidentForm({
            updatedValue: {
                ...incident,
                startDate: getDate(incident.startDate),
                dueDate: getDate(incident.dueDate)
            }
        });
        dispatchGetUsers();
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
    dispatchUpdateValuesCreateIncidentForm: updateValuesCreateIncidentForm,
    dispatchSetDataForUpdating: setDataForUpdating,
    dispatchDeleteIncident: deleteIncident
};

export default connect(null, mapDispatchToProps)(ActionButtonsContainer);
