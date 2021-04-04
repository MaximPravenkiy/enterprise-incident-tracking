import axios from 'axios';
import { RegistrationInitialStateType } from 'redux/store/reducers/registrationReducer';
import {
    LoginFormValue,
    UserDataType
} from 'redux/store/reducers/loginReducer';
import {
    CreateIncidentTypes,
    ListOfIncidentsTypes,
    UpdateIncidentActionType,
    UsersTypes
} from 'redux/store/reducers/incidentsReducer';

type Message = { message: string };

// registration api
const postRegistrationApi = (values: RegistrationInitialStateType) =>
    axios.post<Message>('/registration', values);

// login api
const postLoginApi = (values: LoginFormValue) =>
    axios.post<UserDataType>('/login', values);

// incidents api
const getMyIncidentsApi = (token: string) =>
    axios.get<Array<ListOfIncidentsTypes>>('/incidents/my-incidents', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

const getAllIncidentsApi = () =>
    axios.get<Array<ListOfIncidentsTypes>>('/incidents/all-incidents');

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
    getMyIncidentsApi,
    postLoginApi,
    getUsersForAssigneeOptionApi,
    postRegistrationApi,
    postIncidentApi,
    deleteIncidentApi,
    updateIncidentApi,
    getAllIncidentsApi
};
