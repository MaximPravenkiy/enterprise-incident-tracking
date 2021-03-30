import axios from "axios";
import {RegistrationInitialStateType} from "../store/reducers/registrationReducer";
import {LoginFormValue, UserDataType} from "../store/reducers/loginReducer";
import {CreateIncidentTypes} from "../store/reducers/incidentsReducer";
import {UpdateIncidentActionType} from "../store/actions/Types/incidentsTypes";

// registration api
const postRegistrationApi = (values: RegistrationInitialStateType) =>
    axios.post('/registration', values);

// login api
const postLoginApi = (values: LoginFormValue) =>
    axios.post('/login', values);

// incidents api
const getIncidentsApi = (token: string) =>
    axios.get('/incidents', {
        headers: {
            Authorization: "Bearer " + token
        }
    });

const postIncidentApi = (values: CreateIncidentTypes) =>
    axios.post('/incidents/create-incident', values);

const getUsersForAssigneeOptionApi = () =>
    axios.get('/incidents/create-incident');

const deleteIncidentApi = (incidentID: string) =>
    axios.delete('/incidents/delete-incident', {
        data: {
            incidentID
        }
    });

const updateIncidentApi = (updateData: UpdateIncidentActionType["updateData"]) =>
    axios.put('/incidents/update-incident', updateData);

export {
    getIncidentsApi,
    postLoginApi,
    getUsersForAssigneeOptionApi,
    postRegistrationApi,
    postIncidentApi,
    deleteIncidentApi,
    updateIncidentApi
};