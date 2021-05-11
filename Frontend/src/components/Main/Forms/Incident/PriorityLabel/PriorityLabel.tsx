import React, { FC } from 'react';
import { WarningOutlined } from '@ant-design/icons/lib';
import { PriorityLabelProps } from './PriorityLabel.interfaces';
import { Label } from './PriorityLabel.styles';

const PriorityLabel: FC<PriorityLabelProps> = ({ color, text }) => (
    <Label>
        <WarningOutlined
            style={{ color, marginRight: '5px', fontSize: '20px' }}
        />
        <div>{text}</div>
    </Label>
);

export default PriorityLabel;
