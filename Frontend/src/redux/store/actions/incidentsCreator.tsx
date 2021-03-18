import {CHANGE_ASSIGNEE_USER_ID, GET_INCIDENTS, GET_USERS} from "./actionTypes";

function getIncidents() {
    return {
        type: GET_INCIDENTS
    }
}

function getUsers(users: any) {
    return {
        type: GET_USERS,
        users
    }
}

function changeAssigneeUserId(assigneeUserId: any) {
    return {
        type: CHANGE_ASSIGNEE_USER_ID,
        assigneeUserId
    }
}

export {getIncidents, getUsers, changeAssigneeUserId};