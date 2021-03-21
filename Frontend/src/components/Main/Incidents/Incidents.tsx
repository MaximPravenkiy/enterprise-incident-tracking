import {List} from 'antd';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import styled from 'styled-components';
import IncidentsHeader from "./IncidentsHeader/IncidentsHeader";
import IncidentsItem from "./IncidentsItem/IncidentsItem";
import LoadMoreButton from "./LoadMoreButton/LoadMoreButton";
import {getIncidents} from "../../../redux/store/actions/incidentsCreator";

const ListEx = styled(List)`
    width: 95%;
    border: 2px solid;
    padding: 15px 20px;
`

const Incidents = () => {
    const dispatch = useDispatch();
    const {initLoading, loading, listOfIncidents} = useSelector(({incidentsReducer}: any) => incidentsReducer);
    const loadMore = !initLoading && !loading ? <LoadMoreButton/> : null;

    useEffect(() => {
        dispatch(getIncidents());
    }, []);

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