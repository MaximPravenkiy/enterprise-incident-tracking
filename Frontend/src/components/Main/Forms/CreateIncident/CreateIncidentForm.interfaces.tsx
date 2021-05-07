import {
    ActionWithCreateIncidentForm,
    CreateIncident,
    User,
    ValuesCreateIncidentsForm
} from 'common/types/incidents';

export interface CreateIncidentProps {
    users: User[];
    isModalVisible: boolean;
    valuesCreateIncidentForm: ValuesCreateIncidentsForm;
    actionWithCreateIncidentForm: ActionWithCreateIncidentForm;
    onFinish: (value: CreateIncident) => void;
    onChange: (value: ValuesCreateIncidentsForm) => void;
}
