import { Moment } from 'moment';

export interface ListOfIncidents extends ValuesCreateIncidentsForm {
    icon: JSX.Element;
    key: string;
    owner: string;
}

export interface ValuesCreateIncidentsForm {
    area: string;
    assignee: string;
    description: string;
    dueDate: Moment;
    incidentName: string;
    priority: string;
    startDate: Moment;
    status: string;
}

export interface Users {
    id: string;
    label: string;
    value: string;
    key: string;
}

export interface CreateIncident extends ValuesCreateIncidentsForm {
    owner: string;
}

export type ActionWithCreateIncidentForm = 'Создать' | 'Обновить';
export type ActionWithIncidents =
    | 'Показать все инциденты'
    | 'Показать мои инциденты';
