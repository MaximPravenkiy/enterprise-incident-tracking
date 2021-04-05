import moment from 'moment';

export interface IListOfIncidents extends IValuesCreateIncidentsForm {
    icon: JSX.Element;
    key: string;
    owner: string;
}

export interface IValuesCreateIncidentsForm {
    area: string;
    assignee: string;
    description: string;
    dueDate: moment.Moment;
    incidentName: string;
    priority: string;
    startDate: moment.Moment;
    status: string;
}

export interface IUsers {
    id: string;
    label: string;
    value: string;
    key: string;
}

export interface ICreateIncident extends IValuesCreateIncidentsForm {
    owner: string;
}

export type ActionWithCreateIncidentFormType = 'Создать' | 'Обновить';
export type ActionWithIncidentsType =
    | 'Показать все инциденты'
    | 'Показать мои инциденты';
