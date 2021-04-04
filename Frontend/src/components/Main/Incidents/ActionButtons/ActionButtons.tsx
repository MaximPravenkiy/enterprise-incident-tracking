import React, { FC } from 'react';
import { Button, Space } from 'antd';

interface ActionButtonsTypeProps {
    onEditIncident: () => void;
    onDeleteIncident: () => void;
}

const ActionButtons: FC<ActionButtonsTypeProps> = ({
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
