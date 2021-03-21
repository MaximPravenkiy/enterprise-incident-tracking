import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getIncidents} from "../../../redux/store/actions/incidentsCreator";
import { Table, Space } from 'antd';
import styled from "styled-components";

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
                <a href='#top'>Edit</a>
                <a href='#top'>Delete</a>
            </Space>
        ),
    },
];

const Incidents = () => {
    const dispatch = useDispatch();
    const {listOfIncidents} = useSelector(({incidentsReducer}: any) => incidentsReducer);
    // const loadMore = !initLoading && !loading ? <LoadMoreButton/> : null;

    useEffect(() => {
        dispatch(getIncidents());
    }, [dispatch]);
    //
    return (
        <TableCustom columns={columns} dataSource={listOfIncidents} />
    );
}

export default Incidents;