import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import CreateIncidentForm from 'components/Main/Forms/CreateIncident/CreateIncidentForm';
import {
    createIncident,
    updateIncident,
    updateValuesCreateIncidentForm
} from 'redux/actions/incidents/incidents.actions';
import { RootReducer } from 'redux/reducers/rootReducer';
import { IncidentsActions } from 'redux/actions/incidents/incidents.interfaces';
import {
    CreateIncident,
    ValuesCreateIncidentsForm
} from 'common/types/incidents';

const CreateIncidentFormContainer = () => {
    const {
        users,
        isModalVisible,
        valuesCreateIncidentForm,
        actionWithCreateIncidentForm,
        incidentID
    } = useSelector(({ incidentsReducer }: RootReducer) => incidentsReducer);
    const dispatch = useDispatch<Dispatch<IncidentsActions>>();

    const onChange = (value: ValuesCreateIncidentsForm) => {
        dispatch(updateValuesCreateIncidentForm({ updatedValue: value }));
    };

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
            dispatch(
                createIncident({ valuesCreateIncidentForm: incidentFormData })
            );
        }

        if (actionWithCreateIncidentForm === 'Обновить') {
            dispatch(
                updateIncident({ updateData: { incidentFormData, incidentID } })
            );
        }
    };

    return (
        <CreateIncidentForm
            users={users}
            isModalVisible={isModalVisible}
            onFinish={onFinish}
            valuesCreateIncidentForm={valuesCreateIncidentForm}
            onChange={onChange}
            actionWithCreateIncidentForm={actionWithCreateIncidentForm}
        />
    );
};

export default CreateIncidentFormContainer;
