import axios from "axios";

// registration api
const postRegistrationApi = (values: any) => axios.post(
    '/registration',
    values
);;

// login api
const postLoginApi = (values: any) => axios.post(
    '/login',
    values
);

// incidents api
const getIncidentsApi = (token: any) => axios.get(
    '/incidents',
    {headers: {Authorization: "Bearer " + token}}
);

const postIncidentApi = (values: any) => axios.post('/incidents/create-incident', values);

const getUsersForAssigneeOptionApi = () => axios.get('/incidents/create-incident');

const deleteIncidentApi = (incidentID: any) => axios.delete('/incidents/delete-incident', { data: { incidentID } });

const updateIncidentApi = (updateData: any) => axios.put('/incidents/update-incident', updateData);

export {
    getIncidentsApi,
    postLoginApi,
    getUsersForAssigneeOptionApi,
    postRegistrationApi,
    postIncidentApi,
    deleteIncidentApi,
    updateIncidentApi
};