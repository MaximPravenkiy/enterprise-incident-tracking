import axios from 'axios';
import { ValuesRegistrationForm } from 'common/types/registration';
import {
    ValuesLoginForm,
    UserData,
    RestorePasswordFormValue
} from 'common/types/login';
import { UpdateIncidentAction } from 'redux/actions/incidents/incidents.interfaces';
import {
    ListOfIncidents,
    Users,
    ValuesCreateIncidentsForm
} from 'common/types/incidents';
import axiosWithAuthorization from 'redux/sagas/api/api.services';

interface Message {
    message: string;
}

const postRegistrationApi = (values: ValuesRegistrationForm) =>
    axios.post<Message>('/registration', values);

const postLoginApi = (values: ValuesLoginForm) =>
    axios.post<UserData>('/login', values);

const restorePasswordApi = (
    restorePasswordFormValue: RestorePasswordFormValue
) => axios.put<Message>('/forgot-password', restorePasswordFormValue);

const getMyIncidentsApi = async () => {
    const axiosInstanceWithAuthorization = await axiosWithAuthorization();
    return axiosInstanceWithAuthorization.get<Array<ListOfIncidents>>(
        '/incidents?by-owner=true'
    );
};

const getAllIncidentsApi = async () => {
    const axiosInstanceWithAuthorization = await axiosWithAuthorization();
    return axiosInstanceWithAuthorization.get<Array<ListOfIncidents>>(
        '/incidents'
    );
};

const postIncidentApi = (values: ValuesCreateIncidentsForm) =>
    axios.post<Message>('/incidents', values);

const getUsersForAssigneeOptionApi = () => axios.get<Array<Users>>('/users');

const deleteIncidentApi = (incidentID: string) =>
    axios.delete<Message>(`/incidents/${incidentID}`);

const updateIncidentApi = (
    updateData: UpdateIncidentAction['payload']['updateData']
) => {
    const { incidentFormData, incidentID } = updateData;
    return axios.put<Message>(`/incidents/${incidentID}`, incidentFormData);
};

export {
    getMyIncidentsApi,
    postLoginApi,
    getUsersForAssigneeOptionApi,
    postRegistrationApi,
    postIncidentApi,
    deleteIncidentApi,
    updateIncidentApi,
    getAllIncidentsApi,
    restorePasswordApi
};
