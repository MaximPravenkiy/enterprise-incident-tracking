import {
    ActionWithCreateIncidentFormType,
    CreateIncident,
    Users,
    ValuesCreateIncidentsForm
} from 'common/interfaces/incidents';

export interface CreateIncidentTypeProps {
    users: Array<Users>;
    isModalVisible: boolean;
    valuesCreateIncidentForm: ValuesCreateIncidentsForm;
    actionWithCreateIncidentForm: ActionWithCreateIncidentFormType;
    getUserId: (value: string) => void;
    onFinish: (value: CreateIncident) => void;
    onChange: (value: ValuesCreateIncidentsForm) => void;
}