import React from 'react';
import {Button} from "antd";
import {actionWithCreateIncidentFormType} from "../../../../redux/store/reducers/incidentsReducer";

const CreateOrUpdateButton = ({actionWithCreateIncidentForm}
    : {actionWithCreateIncidentForm: actionWithCreateIncidentFormType}) => {
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