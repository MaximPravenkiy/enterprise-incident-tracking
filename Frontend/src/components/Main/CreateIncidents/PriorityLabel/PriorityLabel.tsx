import React from 'react';
import {WarningOutlined} from "@ant-design/icons/lib";
import styled from "styled-components";

const Label = styled.div`
    display: flex;
    align-items: center;
`;

export interface PriorityLabelProps {
    color: string,
    text: string
}

const PriorityLabel = ({color, text}: PriorityLabelProps) => {
    return (
        <Label>
            <WarningOutlined style={{color, marginRight: '5px', fontSize: '20px'}}/>
            <div>{text}</div>
        </Label>
    );
}

export default PriorityLabel;