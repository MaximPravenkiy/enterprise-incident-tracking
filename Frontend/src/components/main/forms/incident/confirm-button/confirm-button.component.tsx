import React, { memo } from 'react';
import { Button } from 'antd';
import { ActionWithIncidentForm } from '../incident-form.interfaces';

const ConfirmButton = memo(
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

export default ConfirmButton;
