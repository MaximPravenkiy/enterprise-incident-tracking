import axios from 'axios';
import { IValuesRegistrationForm } from 'common/interfaces/registration';
import { IValuesLoginForm, IUserData } from 'common/interfaces/login';
import { UpdateIncidentActionType } from 'redux/store/actions/incidents/interfaces';
import {
    IListOfIncidents,
    IUsers,
    IValuesCreateIncidentsForm
} from 'common/interfaces/incidents';

interface Message {
    message: string;
}

// registration api
const postRegistrationApi = (values: IValuesRegistrationForm) =>
    axios.post<Message>('/registration', values);

// login api
const postLoginApi = (values: IValuesLoginForm) =>
    axios.post<IUserData>('/login', values);

// incidents api
const getMyIncidentsApi = (token: string) =>
    axios.get<Array<IListOfIncidents>>('/incidents/my-incidents', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

const getAllIncidentsApi = () =>
    axios.get<Array<IListOfIncidents>>('/incidents/all-incidents');

const postIncidentApi = (values: IValuesCreateIncidentsForm) =>
    axios.post<Message>('/incidents/create-incident', values);

const getUsersForAssigneeOptionApi = () =>
    axios.get<Array<IUsers>>('/incidents/create-incident');

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
