import React from 'react';
import {Button} from "antd";
import {CreateIncidentProps} from "../../../../containers/CreateIncidentsContainer";

const CreateOrUpdateButton = ({actionWithCreateIncidentForm}: CreateIncidentProps['actionWithCreateIncidentForm']) => {
    return (
        <Button
            type="primary"
            htmlType="submit"
        >
            {actionWithCreateIncidentForm === 'Создать' ?
                'Создать' :
                'Обновить'
            }
        </Button>
    );
}

export default CreateOrUpdateButton;