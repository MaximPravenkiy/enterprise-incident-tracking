import React from 'react';
import { Button } from 'antd';
import { ActionWithIncidentForm } from '../IncidentForm.interfaces';

const CreateOrUpdateButton = ({
    actionWithIncidentForm
}: {
    actionWithIncidentForm: ActionWithIncidentForm;
}) => (
    <Button type="primary" htmlType="submit">
        {actionWithIncidentForm}
    </Button>
);

export default CreateOrUpdateButton;
