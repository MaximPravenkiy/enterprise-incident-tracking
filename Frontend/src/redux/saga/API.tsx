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

const getUsersForAssigneeOptionApi = () => axios.get('/incidents/create-incident');

export {getIncidentsApi, postLoginApi, getUsersForAssigneeOptionApi, postRegistrationApi};