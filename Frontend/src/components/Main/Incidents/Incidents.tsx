import React from 'react';
import {Table} from 'antd';
import styled from "styled-components";
import {IncidentsProps} from "../../../containers/IncidentsContainer";
import ActionButtons from "./ActionButtons/ActionButtons";
import CreateIncidentsContainer from "../../../containers/CreateIncidentsContainer";

const TableCustom = styled(Table)`
    width: 95%;
`

const columns = [
    {
        title: '',
        dataIndex: 'icon',
        key: 'icon',
    },
    {
        title: 'Incident Name',
        dataIndex: 'incidentName',
        key: 'incidentName',
    },
    {
        title: 'Description',
        dataIndex: 'description',
        key: 'description',
    },
    {
        title: 'Assignee',
        dataIndex: 'assignee',
        key: 'assignee',
    },
    {
        title: 'Area',
        dataIndex: 'area',
        key: 'area',
    },
    {
        title: 'StartDate',
        dataIndex: 'startDate',
        key: 'startDate',
    },
    {
        title: 'DueDate',
        dataIndex: 'dueDate',
        key: 'dueDate',
    },
    {
        title: 'Priority',
        dataIndex: 'priority',
        key: 'priority',
    },
    {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
    },
    {
        title: 'Action',
        key: 'action',
        render: ({key}: any) => <ActionButtons incidentKey={key}/>,
    },
];

const Incidents = ({listOfIncidents}: IncidentsProps) => {
    return (
        <>
            <TableCustom
                pagination={{position: ['bottomCenter'], defaultPageSize: 4}}
                columns={columns}
                dataSource={listOfIncidents}
                bordered
                // loading
            />
            <CreateIncidentsContainer/>
        </>
    );
}

export default Incidents;