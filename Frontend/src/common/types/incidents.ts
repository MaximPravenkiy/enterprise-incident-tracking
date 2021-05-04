import { Moment } from 'moment';

interface ValuesCreateIncidentsForm {
    area: string;
    assignee: string;
    description: string;
    dueDate: Moment;
    incidentName: string;
    priority: string;
    startDate: Moment;
    status: string;
}

interface ListOfIncidents extends ValuesCreateIncidentsForm {
    icon: JSX.Element;
    key: string;
    owner: string;
}

interface Users {
    id: string;
    label: string;
    value: string;
    key: string;
}

interface CreateIncident extends ValuesCreateIncidentsForm {
    owner: string;
}

type ActionWithCreateIncidentForm = 'Создать' | 'Обновить';
type ActionWithIncidents = 'Показать все инциденты' | 'Показать мои инциденты';

export type {
    ValuesCreateIncidentsForm,
    ListOfIncidents,
    Users,
    CreateIncident,
    ActionWithCreateIncidentForm,
    ActionWithIncidents
};
