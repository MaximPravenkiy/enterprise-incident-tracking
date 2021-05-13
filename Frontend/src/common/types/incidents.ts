import { Moment } from 'moment';

type PriorityType = 'Minor' | 'Major' | 'Normal' | 'Critical' | 'Blocker';

interface ValuesCreateIncidentsForm {
    area: string;
    assignee: string;
    description: string;
    dueDate: string | Moment;
    incidentName: string;
    priority: PriorityType;
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

export enum ButtonLabel {
    ShowOwnIncidents = 'Show own incidents',
    ShowAllIncidents = 'Show all incidents'
}

export type {
    ValuesCreateIncidentsForm,
    Incident,
    User,
    CreateIncident,
    PriorityType
};
