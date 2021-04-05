import {
    ActionWithCreateIncidentFormType, ICreateIncident,
    IUsers,
    IValuesCreateIncidentsForm
} from 'common/interfaces/incidents';

export interface CreateIncidentTypeProps {
    users: Array<IUsers>;
    isModalVisible: boolean;
    valuesCreateIncidentForm: IValuesCreateIncidentsForm;
    actionWithCreateIncidentForm: ActionWithCreateIncidentFormType;
    getUserId: (value: string) => void;
    onFinish: (value: ICreateIncident) => void;
    onChange: (value: IValuesCreateIncidentsForm) => void;
}