import React from 'react';
import { Button, Space } from 'antd';

type ActionButtonsTypeProps = {
    onEditIncident: () => void;
    onDeleteIncident: () => void;
};

const ActionButtons: React.FC<ActionButtonsTypeProps> = ({
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
