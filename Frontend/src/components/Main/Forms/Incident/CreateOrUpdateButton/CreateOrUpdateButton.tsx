import React, { memo } from 'react';
import { Button } from 'antd';
import { ActionWithIncidentForm } from '../IncidentForm.interfaces';

const CreateOrUpdateButton = memo(
    ({
        actionWithIncidentForm
    }: {
        actionWithIncidentForm: ActionWithIncidentForm;
    }) => (
        <Button type="primary" htmlType="submit">
            {actionWithIncidentForm}
        </Button>
    )
);

export default CreateOrUpdateButton;
