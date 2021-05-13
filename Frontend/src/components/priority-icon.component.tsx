import React, { FC } from 'react';
import { WarningOutlined } from '@ant-design/icons/lib';
import { PriorityType } from 'common/types/incidents';

interface PriorityIconProps {
    priority: PriorityType;
}

const PriorityIcon: FC<PriorityIconProps> = ({ priority }) => {
    let color = '';

    switch (priority) {
        case 'Blocker':
            color = 'red';
            break;
        case 'Critical':
            color = 'orange';
            break;
        case 'Major':
            color = 'yellow';
            break;
        case 'Normal':
            color = 'green';
            break;
        case 'Minor':
            color = 'grey';
            break;
        default:
            break;
    }

    return <WarningOutlined style={{ color, fontSize: '20px' }} />;
};

export default PriorityIcon;
