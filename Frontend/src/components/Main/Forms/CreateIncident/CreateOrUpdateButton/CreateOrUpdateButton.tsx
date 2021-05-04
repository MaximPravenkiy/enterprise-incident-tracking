import React from 'react';
import { Button } from 'antd';
import { ActionWithCreateIncidentForm } from 'common/types/incidents';

const CreateOrUpdateButton = ({
    actionWithCreateIncidentForm
}: {
    actionWithCreateIncidentForm: ActionWithCreateIncidentForm;
}) => (
    <Button type="primary" htmlType="submit">
        {actionWithCreateIncidentForm === 'Создать' ? 'Создать' : 'Обновить'}
    </Button>
);

export default CreateOrUpdateButton;
