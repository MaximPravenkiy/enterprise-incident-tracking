import {List} from 'antd';
import React from 'react';
import {useSelector} from "react-redux";
import styled from 'styled-components';
import IncidentsHeader from "./IncidentsHeader/IncidentsHeader";
import IncidentsItem from "./IncidentsItem/IncidentsItem";
import LoadMoreButton from "./LoadMoreButton/LoadMoreButton";

const ListEx = styled(List)`
    width: 95%;
    border: 2px solid;
    padding: 15px 20px;
`

const Incidents = () => {
    const {initLoading, loading, listOfIncidents} = useSelector(({incidentsReducer}: any) => incidentsReducer);
    const loadMore = !initLoading && !loading ? <LoadMoreButton/> : null;

    return (
        <>
            <ListEx
                header={<IncidentsHeader/>}
                className="demo-loadmore-list"
                loading={initLoading}
                itemLayout="horizontal"
                loadMore={loadMore}
                dataSource={listOfIncidents}
                renderItem={(incident) => (
                    <IncidentsItem incident={incident}/>
                )}
            />
        </>
    );
}

export default Incidents;