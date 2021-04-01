import React from 'react';
import { WarningOutlined } from '@ant-design/icons/lib';
import styled from 'styled-components';

const Label = styled.div`
    display: flex;
    align-items: center;
`;

interface PriorityLabelProps {
    color: string;
    text: string;
}

const PriorityLabel: React.FC<PriorityLabelProps> = ({ color, text }) => (
    <Label>
        <WarningOutlined
            style={{ color, marginRight: '5px', fontSize: '20px' }}
        />
        <div>{text}</div>
    </Label>
);

export default PriorityLabel;
