import { Moment } from 'moment';

interface ValuesCreateIncidentsForm {
    area: string;
    assignee: string;
    description: string;
    dueDate: string | Moment;
    incidentName: string;
    priority: string;
    startDate: string | Moment;
    status: string;
    _id: string;
}

interface Incident extends ValuesCreateIncidentsForm {
    icon: JSX.Element;
    key: string;
    owner: string;
}

interface User {
    id: string;
    label: string;
    value: string;
    key: string;
}

interface CreateIncident extends ValuesCreateIncidentsForm {
    owner: string;
}

type ActionWithCreateIncidentForm = 'Создать' | 'Обновить';

export enum ButtonLabel {
    ShowOwnIncidents = 'Show own incidents',
    ShowAllIncidents = 'Show all incidents'
}

export type {
    ValuesCreateIncidentsForm,
    Incident,
    User,
    CreateIncident,
    ActionWithCreateIncidentForm
};
