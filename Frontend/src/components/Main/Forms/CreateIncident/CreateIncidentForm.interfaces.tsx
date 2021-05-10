import {
    ActionWithCreateIncidentForm,
    CreateIncident,
    User,
    ValuesCreateIncidentsForm
} from 'common/types/incidents';
import {
    CreateIncidentAction,
    UpdateIncidentAction,
    UpdateValuesCreateIncidentFormAction
} from 'redux/actions/incidents/incidents.interfaces';

interface CreateIncidentProps {
    users: User[];
    isModalVisible: boolean;
    valuesCreateIncidentForm: ValuesCreateIncidentsForm;
    actionWithCreateIncidentForm: ActionWithCreateIncidentForm;
    onFinish: (value: CreateIncident) => void;
    onChange: (value: ValuesCreateIncidentsForm) => void;
}

interface CreateIncidentFormContainerProps {
    dispatchUpdateValuesCreateIncidentForm: (payload: {
        updatedValue: ValuesCreateIncidentsForm;
    }) => UpdateValuesCreateIncidentFormAction;
    dispatchCreateIncident: (payload: {
        valuesCreateIncidentForm: ValuesCreateIncidentsForm;
    }) => CreateIncidentAction;
    dispatchUpdateIncident: (payload: {
        updateData: { incidentID: string; incidentFormData: CreateIncident };
    }) => UpdateIncidentAction;
}

export type { CreateIncidentFormContainerProps, CreateIncidentProps };
