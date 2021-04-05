import React from 'react';
import { Button } from 'antd';
import { ActionWithCreateIncidentFormType } from 'common/interfaces/incidents';

const CreateOrUpdateButton = ({
    actionWithCreateIncidentForm
}: {
    actionWithCreateIncidentForm: ActionWithCreateIncidentFormType;
}) => (
    <Button type="primary" htmlType="submit">
        {actionWithCreateIncidentForm === 'Создать' ? 'Создать' : 'Обновить'}
    </Button>
);

export default CreateOrUpdateButton;
