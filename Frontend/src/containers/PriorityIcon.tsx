import React from 'react';
import {WarningOutlined} from "@ant-design/icons/lib";

interface PriorityIconProps {
    priority: string,
}

const PriorityIcon = ({priority}: PriorityIconProps) => {
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
    }

    return (
        <WarningOutlined style={{color, fontSize: '20px'}}/>
    );
}

export default PriorityIcon;