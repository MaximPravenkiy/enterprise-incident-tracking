import axios from 'axios';
import { ValuesRegistrationForm } from 'common/types/registration';
import {
    ValuesLoginForm,
    UserData,
    RestorePasswordFormValue
} from 'common/types/login';
import { UpdateIncidentActionType } from 'redux/actions/incidents/interfaces';
import {
    ListOfIncidents,
    Users,
    ValuesCreateIncidentsForm
} from 'common/types/incidents';
import axiosWithAuthorization from 'common/axiosWithAuthorization';

interface Message {
    message: string;
}

const postRegistrationApi = (values: ValuesRegistrationForm) =>
    axios.post<Message>('/registration', values);

const postLoginApi = (values: ValuesLoginForm) =>
    axios.post<UserData>('/login', values);

const restorePasswordApi = (
    restorePasswordFormValue: RestorePasswordFormValue
) =>
    axios.put<{ message: 'ВСЁ ОК!' }>(
        '/forgot-password',
        restorePasswordFormValue
    );

const getMyIncidentsApi = async () => {
    const axiosInstanceWithAuthorization = await axiosWithAuthorization();
    return axiosInstanceWithAuthorization.get<Array<ListOfIncidents>>(
        '/incidents/my-incidents'
    );
};

const getAllIncidentsApi = () =>
    axios.get<Array<ListOfIncidents>>('/incidents/all-incidents');

const postIncidentApi = (values: ValuesCreateIncidentsForm) =>
    axios.post<Message>('/incidents/create-incident', values);

const getUsersForAssigneeOptionApi = () =>
    axios.get<Array<Users>>('/incidents/create-incident');

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
    getAllIncidentsApi,
    restorePasswordApi
};
