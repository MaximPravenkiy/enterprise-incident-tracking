import React from 'react';
import { Incident, PriorityType } from 'common/types/incidents';
import { ColumnsType } from 'antd/es/table';
import moment, { Moment } from 'moment';
import ActionButtonsContainer from './action-buttons/action-buttons.container';

enum Priority {
    Minor = 0,
    Major = 1,
    Normal = 2,
    Critical = 3,
    Blocker = 4
}

function comparePriority(a: PriorityType, b: PriorityType) {
    return Priority[a] - Priority[b];
}

function compareDate(a: string | Moment, b: string | Moment) {
    return moment(a).isAfter(b) ? 1 : -1;
}

const scrollSettings = { x: 1200 };
const columns: ColumnsType<Incident> = [
    {
        title: '',
        dataIndex: 'icon',
        key: 'icon'
    },
    {
        title: 'incident Name',
        dataIndex: 'incidentName',
        key: 'incidentName',
        sortDirections: ['ascend', 'descend'],
        sorter: (a, b) =>
            a.incidentName.charCodeAt(0) - b.incidentName.charCodeAt(0)
    },
    {
        title: 'Description',
        dataIndex: 'description',
        key: 'description'
    },
    {
        title: 'Assignee',
        dataIndex: 'assignee',
        key: 'assignee',
        sortDirections: ['ascend', 'descend'],
        sorter: (a, b) => a.assignee.charCodeAt(0) - b.assignee.charCodeAt(0)
    },
    {
        title: 'Area',
        dataIndex: 'area',
        key: 'area'
    },
    {
        title: 'StartDate',
        dataIndex: 'startDate',
        key: 'startDate',
        sortDirections: ['ascend', 'descend'],
        sorter: (a, b) => compareDate(a.startDate, b.startDate)
    },
    {
        title: 'DueDate',
        dataIndex: 'dueDate',
        key: 'dueDate',
        sortDirections: ['ascend', 'descend'],
        sorter: (a, b) => compareDate(a.dueDate, b.dueDate)
    },
    {
        title: 'Priority',
        dataIndex: 'priority',
        key: 'priority',
        sortDirections: ['ascend', 'descend'],
        sorter: (a, b) => comparePriority(a.priority, b.priority)
    },
    {
        title: 'Status',
        dataIndex: 'status',
        key: 'status'
    },
    {
        title: 'Action',
        key: 'action',
        render: (incident: Incident): JSX.Element => (
            <ActionButtonsContainer incident={incident} />
        )
    }
];

export { scrollSettings, columns };
