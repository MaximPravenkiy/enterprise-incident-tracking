import React from 'react';
import {Table} from 'antd';
import styled from "styled-components";
import ActionButtons from "./ActionButtons/ActionButtons";
import CreateIncidentsContainer from "../../../containers/CreateIncidentsContainer";
import {IncidentsTypeProps} from "../../../containers/IncidentsContainer";

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
        render: (incident: any) => <ActionButtons incident={incident}/>,
    },
];

const Incidents: React.FC<IncidentsTypeProps> = ({listOfIncidents}) => {
    return (
        <>
            <TableCustom
                pagination={{position: ['bottomCenter'], defaultPageSize: 4}}
                columns={columns}
                dataSource={listOfIncidents}
                bordered
                loading={listOfIncidents.length === 0}
            />
            <CreateIncidentsContainer/>
        </>
    );
}

export default Incidents;