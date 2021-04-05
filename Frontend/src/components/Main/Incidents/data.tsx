import React from 'react';
import { IListOfIncidents } from 'common/interfaces/incidents';
import ActionButtonContainer from 'containers/ActionButton.container';

export const columns = [
    {
        title: '',
        dataIndex: 'icon',
        key: 'icon'
    },
    {
        title: 'Incident Name',
        dataIndex: 'incidentName',
        key: 'incidentName'
    },
    {
        title: 'Description',
        dataIndex: 'description',
        key: 'description'
    },
    {
        title: 'Assignee',
        dataIndex: 'assignee',
        key: 'assignee'
    },
    {
        title: 'Area',
        dataIndex: 'area',
        key: 'area'
    },
    {
        title: 'StartDate',
        dataIndex: 'startDate',
        key: 'startDate'
    },
    {
        title: 'DueDate',
        dataIndex: 'dueDate',
        key: 'dueDate'
    },
    {
        title: 'Priority',
        dataIndex: 'priority',
        key: 'priority'
    },
    {
        title: 'Status',
        dataIndex: 'status',
        key: 'status'
    },
    {
        title: 'Action',
        key: 'action',
        render: (incident: IListOfIncidents): any => (
            <ActionButtonContainer incident={incident} />
        )
    }
];
