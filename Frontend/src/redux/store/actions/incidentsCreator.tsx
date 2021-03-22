import {
    CHANGE_ASSIGNEE_USER_ID,
    SET_INCIDENTS,
    GET_USERS,
    GET_INCIDENTS,
    SET_USERS,
    CREATE_INCIDENT, CLOSE_MODAL, DELETE_INCIDENT
} from "./actionTypes";

// Incidents

function getIncidents() {
    return {
        type: GET_INCIDENTS
    }
}

function setIncidents(listOfIncidents: any) {
    return {
        type: SET_INCIDENTS,
        listOfIncidents
    }
}

function createIncident(values: any) {
    return {
        type: CREATE_INCIDENT,
        values
    }
}

function deleteIncident(incidentID: any) {
    return {
        type: DELETE_INCIDENT,
        incidentID
    }
}

function closeModal() {
    return {
        type: CLOSE_MODAL
    }
}

// Users

function getUsers() {
    return {
        type: GET_USERS
    }
}

function setUsers(users: any) {
    return {
        type: SET_USERS,
        users
    }
}

function changeAssigneeUserId(assigneeUserId: any) {
    return {
        type: CHANGE_ASSIGNEE_USER_ID,
        assigneeUserId
    }
}

export {
    getIncidents,
    setIncidents,
    getUsers,
    setUsers,
    changeAssigneeUserId,
    createIncident,
    closeModal,
    deleteIncident
};