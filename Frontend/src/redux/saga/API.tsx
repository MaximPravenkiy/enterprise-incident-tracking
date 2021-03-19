import axios from "axios";

// incidents api
const getIncidentsApi = (token: any) => axios.get(
    '/incidents',
    {headers: {Authorization: "Bearer " + token}}
);

// login api
const postLoginApi = (values: any) => axios.post(
    '/login',
    values
);

export {getIncidentsApi, postLoginApi};