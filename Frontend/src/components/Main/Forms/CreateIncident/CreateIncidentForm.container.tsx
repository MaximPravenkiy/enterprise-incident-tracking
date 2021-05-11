import React, { FC } from 'react';
import { connect, useSelector } from 'react-redux';
import {
    createIncident,
    updateIncident,
    updateValuesCreateIncidentForm
} from 'redux/actions/incidents/incidents.actions';
import { RootReducer } from 'redux/reducers/rootReducer';
import {
    CreateIncident,
    ValuesCreateIncidentsForm
} from 'common/types/incidents';
import { useDebouncedCallback } from 'use-debounce';
import CreateIncidentForm from './CreateIncidentForm';
import { CreateIncidentFormContainerProps } from './CreateIncidentForm.interfaces';

const CreateIncidentFormContainer: FC<CreateIncidentFormContainerProps> = ({
    dispatchUpdateValuesCreateIncidentForm,
    dispatchCreateIncident,
    dispatchUpdateIncident
}) => {
    const {
        users,
        isModalVisible,
        valuesCreateIncidentForm,
        actionWithCreateIncidentForm,
        incidentID
    } = useSelector(({ incidentsReducer }: RootReducer) => incidentsReducer);

    const onChange = (value: ValuesCreateIncidentsForm) => {
        console.log(value);
        dispatchUpdateValuesCreateIncidentForm({ updatedValue: value });
    };
    const debouncedHandleResize = useDebouncedCallback(onChange, 500);

    const onFinish = (values: CreateIncident) => {
        const assigneeCandidate = users.find(
            (user) => user.id === values.assignee
        );
        const assignee = assigneeCandidate ? assigneeCandidate.label : '';
        const incidentFormData = {
            ...values,
            assignee,
            owner: values.assignee
        };

        if (actionWithCreateIncidentForm === 'Создать') {
            dispatchCreateIncident({
                valuesCreateIncidentForm: incidentFormData
            });
        }

        if (actionWithCreateIncidentForm === 'Обновить') {
            dispatchUpdateIncident({
                updateData: { incidentFormData, incidentID }
            });
        }
    };

    return (
        <CreateIncidentForm
            users={users}
            isModalVisible={isModalVisible}
            onFinish={onFinish}
            valuesCreateIncidentForm={valuesCreateIncidentForm}
            onChange={debouncedHandleResize}
            actionWithCreateIncidentForm={actionWithCreateIncidentForm}
        />
    );
};

const mapDispatchToProps = {
    dispatchUpdateValuesCreateIncidentForm: updateValuesCreateIncidentForm,
    dispatchCreateIncident: createIncident,
    dispatchUpdateIncident: updateIncident
};

export default connect(null, mapDispatchToProps)(CreateIncidentFormContainer);
