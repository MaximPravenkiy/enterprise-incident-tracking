import {
    ActionWithCreateIncidentForm,
    CreateIncident,
    Users,
    ValuesCreateIncidentsForm
} from 'common/types/incidents';

export interface CreateIncidentProps {
    users: Users[];
    isModalVisible: boolean;
    valuesCreateIncidentForm: ValuesCreateIncidentsForm;
    actionWithCreateIncidentForm: ActionWithCreateIncidentForm;
    getUserId: (value: string) => void;
    onFinish: (value: CreateIncident) => void;
    onChange: (value: ValuesCreateIncidentsForm) => void;
}
