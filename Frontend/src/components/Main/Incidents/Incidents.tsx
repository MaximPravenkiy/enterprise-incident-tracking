import React, { FC } from 'react';
import { Table } from 'antd';
import styled from 'styled-components';
import CreateIncidentsContainer from 'containers/CreateIncidents.container';
import { IncidentsInitialStateType } from 'redux/store/reducers/incidentsReducer';
import ActionButtonContainer from 'containers/ActionButton.container';
import { IListOfIncidents } from 'common/interfaces/incidents';

interface IncidentsTypeProps {
    listOfIncidents: IncidentsInitialStateType['listOfIncidents'];
    isListOfIncidentsLoading: boolean;
}

const TableCustom = styled(Table)`
    width: 95%;
`;

const columns = [
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
        render: (incident: IListOfIncidents): JSX.Element => (
            <ActionButtonContainer incident={incident} />
        )
    }
];

const Incidents: FC<IncidentsTypeProps> = ({
    listOfIncidents,
    isListOfIncidentsLoading
}) => (
    <>
        <TableCustom
            pagination={{ position: ['bottomCenter'], defaultPageSize: 4 }}
            columns={columns}
            dataSource={listOfIncidents}
            bordered
            loading={isListOfIncidentsLoading}
        />
        <CreateIncidentsContainer />
    </>
);

export default Incidents;
