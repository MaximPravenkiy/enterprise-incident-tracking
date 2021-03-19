import {CHANGE_ASSIGNEE_USER_ID, SET_INCIDENTS, GET_USERS, GET_INCIDENTS, SET_USERS} from "./actionTypes";

// Инциденты

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

// Юзеры

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

export {getIncidents, setIncidents, getUsers, setUsers, changeAssigneeUserId};