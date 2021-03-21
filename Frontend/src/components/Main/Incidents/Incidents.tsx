import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getIncidents} from "../../../redux/store/actions/incidentsCreator";
import {Table, Space} from 'antd';
import styled from "styled-components";
import {NavLink} from "react-router-dom";
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
        render: () => (
            <Space size="middle">
                <NavLink to='/incidents/create-incident'>Edit</NavLink>
                <NavLink to='/incidents' onClick={f}>Delete</NavLink>
            </Space>
        ),
    },
];

const f = (event: any) => {
    console.log(event)
}

const Incidents = () => {
    const dispatch = useDispatch();
    const {listOfIncidents} = useSelector(({incidentsReducer}: any) => incidentsReducer);

    useEffect(() => {
        dispatch(getIncidents());
    }, [dispatch]);

    return (
        <>
            <TableCustom
                rowKey={(record: any) => record.key}
                columns={columns}
                dataSource={listOfIncidents}
            />
            <CreateIncidents/>
        </>

    );
}

export default Incidents;