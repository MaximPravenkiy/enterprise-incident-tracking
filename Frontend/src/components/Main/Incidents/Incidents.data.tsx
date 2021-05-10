import React from 'react';
import { Incident } from 'common/types/incidents';
import { ColumnsType } from 'antd/es/table';
import moment, { Moment } from 'moment';
import ActionButtonsContainer from './ActionButtons/ActionButtons.container';

function comparePriority(a: string, b: string) {
    if (a === 'Minor' || b === 'Blocker') return -1;
    if (a === 'Blocker' || b === 'Minor') return 1;
    if (a === 'Normal' && b !== 'Blocker' && b !== 'Critical' && b !== 'Major')
        return 1;
    if (a === 'Major' && b !== 'Blocker' && b !== 'Critical') return 1;
    if (a === 'Critical' && b !== 'Blocker') return 1;
    return -1;
}

function compareDate(a: string | Moment, b: string | Moment) {
    return moment(a).isAfter(b) ? 1 : -1;
}

export const columns: ColumnsType<Incident> = [
    {
        title: '',
        dataIndex: 'icon',
        key: 'icon'
    },
    {
        title: 'Incident Name',
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
