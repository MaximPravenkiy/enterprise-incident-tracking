import React, { FC, memo } from 'react';
import { Button, Space } from 'antd';
import { ActionButtonsProps } from './action-buttons.interfaces';

const ActionButtons: FC<ActionButtonsProps> = memo(
    ({ onEditIncident, onDeleteIncident }) => (
        <Space size="middle">
            <Button type="link" onClick={onEditIncident}>
                Edit
            </Button>
            <Button type="link" onClick={onDeleteIncident}>
                Delete
            </Button>
        </Space>
    )
);

export default ActionButtons;
