import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getIncidents} from "../../../redux/store/actions/incidentsCreator";
import {Table, Space, Button} from 'antd';
import styled from "styled-components";
import CreateIncidents from "../CreateIncidents/CreateIncidents";

const TableCustom = styled(Table)`
    width: 95%;
`

const columns = [
    {
        title: 'Icon',
        dataIndex: 'icon',
        key: 'icon',
    },
    {
        title: 'IncidentName',
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
        render: (incident: any) => (
            <Space size="middle">
                <Button
                    type="link"
                    // onClick={}
                >
                    Edit
                </Button>
                <Button
                    type="link"
                    onClick={deleteIncident}
                    data-key={incident.key}
                >
                    Delete
                </Button>
            </Space>
        ),
    },
];

const deleteIncident = (event: any) => {
    const incidentID = event.target.closest("button").dataset.key;
}

const Incidents = () => {
    const dispatch = useDispatch();
    const {listOfIncidents} = useSelector(({incidentsReducer}: any) => incidentsReducer);

    useEffect(() => {
        console.log('slomal')
        dispatch(getIncidents());
    }, [dispatch]);

    return (
        <>
            <TableCustom
                columns={columns}
                dataSource={listOfIncidents}
                bordered
                // loading
            />
            <CreateIncidents/>
        </>

    );
}

export default Incidents;