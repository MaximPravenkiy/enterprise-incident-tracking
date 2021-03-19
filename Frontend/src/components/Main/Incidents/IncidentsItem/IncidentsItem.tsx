import React from 'react';
import styled from "styled-components";
import {List} from "antd";

const Item = styled(List.Item)`
    && {
        border-bottom: 1px solid;
    }
`

const Div = styled.div`
    text-align: center;
`

export interface IncidentsItemProps {
    incident: any,
}

const IncidentsItem = ({incident}: IncidentsItemProps) => {
    console.log(incident)
    return (
        <Item
            actions={[
                <a href="#top" key="list-loadmore-edit">Edit</a>,
                <a href="#top" key="list-loadmore-more">Delete</a>
            ]}
        >
            <Div style={{width: "3%"}}>{incident.icon}</Div>
            <Div style={{width: "15%"}}>{incident.incidentName}</Div>
            <Div style={{width: "17%"}}>{incident.description}</Div>
            <Div style={{width: "20%"}}>{incident.assignee}</Div>
            <Div style={{width: "15%"}}>{incident.area}</Div>
            <Div style={{width: "10%"}}>{incident.startDate}</Div>
            <Div style={{width: "10%"}}>{incident.dueDate}</Div>
            <Div style={{width: "10%"}}>{incident.priority}</Div>
            <Div style={{width: "15%"}}>{incident.status}</Div>
        </Item>
    );
}

export default IncidentsItem;