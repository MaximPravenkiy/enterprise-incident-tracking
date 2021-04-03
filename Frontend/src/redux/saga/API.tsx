import axios from 'axios';
import { RegistrationInitialStateType } from '../store/reducers/registrationReducer';
import { LoginFormValue, UserDataType } from '../store/reducers/loginReducer';
import {
    CreateIncidentTypes,
    ListOfIncidentsTypes,
    UpdateIncidentActionType,
    UsersTypes
} from '../store/reducers/incidentsReducer';

type Message = { message: string };

// registration api
const postRegistrationApi = (values: RegistrationInitialStateType) =>
    axios.post<Message>('/registration', values);

// login api
const postLoginApi = (values: LoginFormValue) =>
    axios.post<UserDataType>('/login', values);

// incidents api
const getIncidentsApi = (token: string) =>
    axios.get<Array<ListOfIncidentsTypes>>('/incidents', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

const postIncidentApi = (values: CreateIncidentTypes) =>
    axios.post<Message>('/incidents/create-incident', values);

const getUsersForAssigneeOptionApi = () =>
    axios.get<Array<UsersTypes>>('/incidents/create-incident');

const deleteIncidentApi = (incidentID: string) =>
    axios.delete<Message>('/incidents/delete-incident', {
        data: {
            incidentID
        }
    });

const updateIncidentApi = (
    updateData: UpdateIncidentActionType['updateData']
) => axios.put<Message>('/incidents/update-incident', updateData);

export {
    getIncidentsApi,
    postLoginApi,
    getUsersForAssigneeOptionApi,
    postRegistrationApi,
    postIncidentApi,
    deleteIncidentApi,
    updateIncidentApi
};
