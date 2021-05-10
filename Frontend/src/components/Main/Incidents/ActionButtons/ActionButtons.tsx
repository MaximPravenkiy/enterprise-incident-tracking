import React, { FC } from 'react';
import { Button, Space } from 'antd';
import { ActionButtonsProps } from './ActionButtons.interfaces';

const ActionButtons: FC<ActionButtonsProps> = ({
    onEditIncident,
    onDeleteIncident
}) => (
    <Space size="middle">
        <Button type="link" onClick={onEditIncident}>
            Edit
        </Button>
        <Button type="link" onClick={onDeleteIncident}>
            Delete
        </Button>
    </Space>
);

export default ActionButtons;
